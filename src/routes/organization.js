import express from 'express';
import { create } from '../lib/organization.js';
const orgRouter = express.Router();

orgRouter.post('/', create);

export default orgRouter;