import { User } from "../database/models/user.js";

const findOne = async cond =>  await User.findOne(cond);

const create = async option => await User.create(option);

export { findOne, create};