import * as express from 'express';
import { createUser } from '../controllers/user.js';

const userRouter = express.Router();

userRouter.post('',createUser);

export default userRouter;