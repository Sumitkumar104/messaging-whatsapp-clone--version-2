
const Message=require("../models/mesaagechatschema");
const conversation=require("../models/conversationschema");


exports.sendmessage = async (request, response) => {
    const message = new Message(request.body);   // this represent a object .
    try {
        await message.save();

        // also update the conversation database in which message show the last message .
        await conversation.findByIdAndUpdate(request.body.conversationid, { message: request.body.text });  // find by conversation id and update by message.
        response.status(200).json("Message has been sent successfully");
    } catch (error) {
        response.status(500).json(error);
    }

}

exports.getmessage = async (request, response) => {
    try {
        // console.log("paramid",request.data)
        const messages = await Message.find({ conversationid: request.params.id });
        response.status(200).json(messages);    // send messages in response 
    } catch (error) {
        response.status(500).json(error);
    }

}