import mongoose from "mongoose";

const organizationSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true,
        unique: true
    },
    domainName: { 
        type: String, 
        required: true,
        unique: true
    },
    ssoConfig: { 
        type: Object,
        unique: true
    }
});

const Organization = mongoose.model(organizationSchema, organizationSchema);

export { Organization};