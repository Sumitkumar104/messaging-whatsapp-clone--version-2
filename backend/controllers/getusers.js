const Userdemo=require("../models/userschemaauth-v2")

// Take all user from database whose data is present in our code .
getusers=async(req,res)=>{
    try {
        
         const user = await Userdemo.find({});
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }

}
module.exports=getusers