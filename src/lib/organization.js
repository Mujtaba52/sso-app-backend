import { Organization } from "../database/models/organization.js";


const findOne = async cond=>await Organization.findOne(cond);

const create = async option=>await Organization.create(option);

export { findOne, create };