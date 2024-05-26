import * as organization from "../lib/organization.js";

const createOrganization = async (req, res)=>{
    try{
        const newOrganization = await organization.create(req.body);
        return res.status(200).json({
            status: "success",
            organization : newOrganization
        });
    }
    catch(e){
        return res.json({ 
            status: "failed",
            message: error.message
        });
    }
}

export { createOrganization }