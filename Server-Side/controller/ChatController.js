const ChatModel = require("../model/Chat/ChatModel");
const asyncHandler = require("express-async-handler");


// @des Create Chat
// route post /api/chat  
// @access private 
const CreateChat = asyncHandler(async (req, res) => {
    if(req.body.senderId&&req.body.receiverId){

        const newChat = ChatModel({
            members: [req.body.senderId, req.body.receiverId]
        })
        
        const result = await newChat.save();
        res.json({
            result: result,
            message: "Created Chat"
        })
    }else{
        res.status(400)
        throw new Error("All Feild Are Required")
    }
  
      
    

})
// @des Create Chat
// route post /api/chat  
// @access private 
const UserChats = asyncHandler(async (req, res) => {
    const chat = await ChatModel.find({
        members: { $in: [req.params.userId] }
    })
    res.json({
        chat: chat,
        message: "UserChats"
    })
})

// @des Create Chat
// route post /api/chat  
// @access private 
const FindChat = asyncHandler(async (req, res) => {
    const chat = await ChatModel.findOne({
        members: { $all: [req.params.firstId, req.params.secondId] }
    })
    res.json({
        chat: chat,
        message: "FindChat"
    })
})



module.exports = {
    CreateChat,
    UserChats,
    FindChat

}