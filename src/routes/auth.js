import express from 'express';
import { ssoLogin } from '../controllers/auth.js';

const authRouter = express.Router();


authRouter.get("/sso-login", ssoLogin);

export default authRouter;
