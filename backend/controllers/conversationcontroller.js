const conversationschema = require("../models/conversationschema");

exports.setconversation = async (req, res) => {
  try {


    const senderid = req.body.senderid;
    const receiverid = req.body.receiverid;

    const exist = await conversationschema.findOne({ members: { $all: [senderid, receiverid] } });

    // if exist==true means these both person already do chat .
    if (exist) {
       res.status(200).json({
        message: "conversation is already exists"
      })
      return ;
    }

    // if exist == false means we set up a conversation between them 
    const newconversation = new conversationschema({
      members: [senderid, receiverid]
    })

    try {
      const savedConversation = await newconversation.save();
      res.status(200).json(savedConversation);
  } catch (error) {
      res.status(500).json(error);
  }
   
  } catch (err) {
     res.status(500).json(err.message);
  }
}





exports.getconversation = async (req, res) => {
  try {

    // console.log(req.body);

    const senderid = req.body.senderid;
    const receiverid = req.body.receiverid;
    let conversation = await conversationschema.findOne({ members: { $all: [senderid, receiverid] } }); 
     res.status(200).json( conversation)


  } catch (err) {
     
      res.status(500).json(err);
  }

}
