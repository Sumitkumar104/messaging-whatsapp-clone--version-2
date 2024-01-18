const express = require("express");
const route = express.Router();

const adduser = require("./controllers/adduser");
const addnewuserforchat = require("./controllers/addnewuserforchat");
const getusers = require("./controllers/getusers");    // use to show the contacts with which he chats previously.
const {setconversation,getconversation} = require("./controllers/conversationcontroller");
const {sendmessage,getmessage}=require("./controllers/messagecontroller");


// this route is for future purpose .
// route.post("/addnewcontact", addnewuserforchat);



route.post("/adduser", adduser);           // it have data come from frontend in ( request ).body which we store in database .
route.get("/getuser", getusers);          //  it return user object which conatin contacts in response .

route.post("/conversation/add", setconversation);  // this is api call which excute function setconversation in serviceapi folders in which request body contain sender and reciever id.
route.post("/conversation/get",getconversation);  

route.post("/message/add",sendmessage);  // this route is used to send message in database . 
route.get("/message/get/:id",getmessage);  // this route is used to get message from database . 

module.exports = route;
