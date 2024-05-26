import express from 'express';
import { ssoLogin, ssoCallback } from '../controllers/auth.js';

const authRouter = express.Router();


authRouter.get("/sso-login", ssoLogin);
authRouter.get("/sso-ssoCallback", ssoCallback);

export default authRouter;
