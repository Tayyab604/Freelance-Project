const MessageModel = require("../model/Chat/MessageModel");
const asyncHandler = require("express-async-handler");


// @des AddMessages
// route post /api/messages  
// @access private 
const AddMessage = asyncHandler(async (req, res) => {
    const {chatId,senderId,text} = req.body;
    if(!chatId&&!senderId&&!text){
        res.status(400)
        throw new Error("All Feild Are Required")
    }
    const message = MessageModel({
        chatId,
        senderId,
        text
    })
    const result =  await message.save()
      res.json({
        result 
      })

})

// @des GetMessages
// route post /api/messages  
// @access private 
const GetMessages = asyncHandler(async (req, res) => {
    const {chatId} =req.params
    const result = await MessageModel.find({chatId})
    res.json({
        result : result,
        message : "GetMessages"
      })
    
})




module.exports = {
    AddMessage,
    GetMessages

}