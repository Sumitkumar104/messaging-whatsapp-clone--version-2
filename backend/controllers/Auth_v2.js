const Userdemo = require("../models/userschemaauth-v2")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.signup = async (req, res) => {
    try {


        // fetch all data from the frontend which is stoed in request 's body.
        const { name, email, phonenumber, password } = req.body;

        // Check if user already exists
        const existingUser = await Userdemo.findOne({ email })
        if (existingUser) {
            res.status(203).json(

                "User already exists. Please sign in to continue."
            )
            return;
        }

        // hash the password
        const hashedPassword = await bcrypt.hash(password, 10)

        // now add new user in database
        const user = await Userdemo.create({
            name,
            email,
            phonenumber,
            password: hashedPassword,
        })
        // console.log(user);
        res.status(200).json(user)

    }
    catch (error) {
        console.error(error)
        return res.status(500).json({
            success: false,
            message: "User cannot be signup . Please try again.",
        })
    }
}



// signin controller
exports.signin = async (req, res) => {
    try {

        // Get email and password from request body
        const { email, password } = req.body

        // Find user with provided email
        const user = await Userdemo.findOne({ email })

        // If user not found with provided email
        if (!user) {

            res.status(203).json("User with this email is not Registered!")
            return;
        }

        else {

            // check the password if it is correct then we pass the user in response.  
            bcrypt.compare(password, user.password)
                .then((result) => {
                    if (result) {
                        res.status(200).json(user) // Passwords match
                        return ;
                    } else {
                        res.status(203).json("password do not match") // Passwords do not match
                        return ;
                    }
                })
                .catch((error) => {
                    console.error('Error comparing passwords:', error);
                });

        }

    }
    catch (error) {

        console.error(error)
        return res.status(500).json({
            success: false,
            message: `Login Failure Please Try Again`,
        })

    }
}

exports.forgottenpassword = async (req, res) => {
    try {

        const { password, email } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        await Userdemo.findOneAndUpdate(

            { email: email },
            { password: hashedPassword },
            { new: true }
        )

        res.json({
            success: true,
            message: `Password change Successful`,
        })


    } catch (error) {
        return res.json({
            error: error.message,
            success: false,
            message: `Some Error in changing the Password`,
        })

    }
}