const User = require("../models/userschema");

const adduser = async (req, res) => {
  try {
    // console.log("1");
    // console.log(req.body.sub);
    let exist = await User.findOne({ sub: req.body.sub });
    // console.log("2");

    if (exist) {
      res.status(200).json('user already exists');
      return;
    }

    // console.log("4");
    const newUser = new User(req.body);
    // console.log("44");/

    // Save the user to the database
    await newUser.save();

    // console.log("5");
    res.status(200).json(newUser);
    // console.log("6");
    // console.log("User is saved in the database successfully in addusercontroller");
  } catch (error) {
    // Handle the error here
    console.error("Error in add user controller:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = adduser;
