const express = require("express");
const route = express.Router();


const getusers = require("./controllers/getusers");    // use to show the contacts with which he chats previously.
const {setconversation,getconversation} = require("./controllers/conversationcontroller");
const {sendmessage,getmessage}=require("./controllers/messagecontroller");
const {signin,signup,forgottenpassword}=require("./controllers/Auth_v2");
const { sign } = require("crypto");


route.get("/getuser", getusers);          //  it return user object which conatin contacts in response .

route.post("/conversation/add", setconversation);  // this is api call which excute function setconversation in serviceapi folders in which request body contain sender and reciever id.
route.post("/conversation/get",getconversation);  

route.post("/message/add",sendmessage);  // this route is used to send message in database . 
route.get("/message/get/:id",getmessage);  // this route is used to get message from database . 


// for version 2
route.post("/signup",signup);
route.post("/signin",signin);
route.post("/forgottenpassword",forgottenpassword)

module.exports = route;
