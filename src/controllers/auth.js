import * as organizations from "../lib/organization.js"
import { getLoginUrl, validateLogin, generateAccessToken } from "../lib/auth.js"
import boom from '@hapi/boom'
import "dotenv/config";
import * as user from '../lib/user.js';

const ssoLogin = async (req, res)=>{
    let { domainName } = req.query;
    const organization = await organizations.findOne({domainName})

    if(!organization) return res.status(404).json({ message: "No organization found" });
    const { ssoConfig } = organization;
    const loginUrl = await getLoginUrl(ssoConfig);
    res.json({ ssoUrl: loginUrl });
  }

  async function ssoCallback(req, res) {
    try {
      let { domainName } = req.query;
      const organization = await organizations.findOne({domainName})

      if(!organization) throw boom.notFound('Organization Not found');
      const assertion = await validateLogin(req.body, organization.ssoConfig);
      const email = assertion.nameID
      if (!email) throw boom.unauthorized('Email not found in SAML assertion.');
      const ssoUser = await user.findOne({ email });

      if (!ssoUser) { throw boom.unauthorized('SSO login was attempt was failed.') }
      const userAccessToken = generateAccessToken(ssoUser._id.toString());
      //redirect to dashboard with the token in the url.
      res.redirect(`${process.env.DASHBOARD_URL}?token=${userAccessToken}`);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  export { ssoLogin, ssoCallback };