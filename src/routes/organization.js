import express from 'express';
import { createOrganization } from '../controllers/organization.js';
const orgRouter = express.Router();

orgRouter.post('', createOrganization);

export default orgRouter;