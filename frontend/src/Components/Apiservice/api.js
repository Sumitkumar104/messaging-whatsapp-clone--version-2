//this app contains our all APIs

import axios from "axios";
const url='http://localhost:8000';


// this function is used to add new user or loginin .
export const adduser= async (data)=>{
    try{
         let response = await axios.post(`${url}/adduser`,data);
         console.log(response);
         console.log("user is succesfull created  in database for adduser router ");
    }

    catch(err){
        console.log("There is some error in adduser route  ")
      console.error(err);
    }

}



export const getuser= async (data)=>{
  try{
       const response=await axios.get(`${url}/getuser`,data);   
      //  console.log("users are succesfull show in chat list ");
       return response.data;
  }

  catch(err){
      console.log("there is some  error in fetch all users in getuser route")
    console.error(err);
  }

}


// This function is used to set up the conversation and store the connection in database .
export const setconversation=async(data)=>{
  try{

    await axios.post(`${url}/conversation/add`,data)
    // console.log(" A user for chatting is successfully choose from contact list in setconversation api")

  }
  catch(err){
   console.log('there is something error to choose the user from the chat list=> ', err.message);
  }
}


// this function is used to get the information about the connection set up between the person having sender id and reciever id .
export const getconversation=async(data)=>{
  try{

    const response=await axios.post(`${url}/conversation/get`,data)
    return response.data;
  }
  catch(err){
   console.log('there is something error to choose the user and get information about connection id from the chat list=> ', err.message);
  }
}


// this function is used to send the message obtain from 'data' to backend . 
export const sendmessageindatabase=async(data)=>{
  try{
      
    await axios.post(`${url}/message/add`,data)

  }catch(err){
    console.log("there is some error to send  the message from chatmessage to backend ", err.message);
  }
}


// this function is used to send the message obtain from 'data' to backend . 
export const getmessagefromdatabase=async(id)=>{
  try{
      
   let res= await axios.get(`${url}/message/get/${id}`)
   return res.data;
   

  }catch(err){
    console.log("there is some error to get the message from backend in scrollchat", err.message);
  }
}