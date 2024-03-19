const express = require('express');
const { AddMessage, GetMessages } = require('../controller/MessageController');
const route = express.Router();


route.post('/',AddMessage)
route.get('/:chatId',GetMessages)

module.exports = route