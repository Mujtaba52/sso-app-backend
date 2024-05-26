import * as user from '../lib/user.js';

const createUser = async (req, res) =>{
    try{
        const newUser = await user.create(req.body);
        return res.status(200).json({
            status: "success",
            user: newUser
        });
    }
    catch(e){
        return res.json({ 
            status: "failed",
            message: error.message
        });
    }
}

export { createUser };