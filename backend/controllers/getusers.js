
const userschema=require("../models/userschema");

getusers=async(req,res)=>{
    try {
        const user = await userschema.find({});
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }

}
module.exports=getusers