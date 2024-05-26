import { SAML } from "@node-saml/node-saml";


async function getLoginUrl(samlOptions) {
    const saml = new SAML(samlOptions);
    const loginUrl = await saml.getAuthorizeUrlAsync();
    return loginUrl;
};

async function validateLogin(samlResponse, samlOptions) {
    const saml = new SAML(samlOptions);
    const response = await saml.validatePostResponseAsync(samlResponse);
    return response.profile;
  };

const generateAccessToken = id =>jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '24h' });

export { getLoginUrl, validateLogin, generateAccessToken }