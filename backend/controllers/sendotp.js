const nodemailer=require("nodemailer");
require("dotenv").config();

exports.sendotp=async(req,res)=>{
    try{
        const {email,otp}=req.body;

          // transporter
          const transporter = nodemailer.createTransport({

            host:'smtp.gmail.com',          
            port: 465,
            secure: true,
            logger:true,
            debug:true,
            secureconnection:true,
            auth: {
                user:"sumitbawalia104@gmail.com",
                pass:"jyoxetmvumnipnwk",
            },

        });
        let info = transporter.sendMail({
            from: 'whatsapp verification code',
            to: email,    // doc.email
            subject: ' OTP for whatsapp verification ',
            text:`your OTP for whatsapp Signup is ${otp}`,
        });
        res.status(200).json(`otp send successfully to ${email}`);
        return ;


    }catch(err){

        console.log("there is error in sending the email ",err);

    }
}