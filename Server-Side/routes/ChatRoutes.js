const express = require('express');
const { CreateChat, UserChats, FindChat } = require('../controller/ChatController');
const route = express.Router();

route.post('/',CreateChat)
route.get('/:userId',UserChats)
route.get('/find/:firstId/:secondId',FindChat)

module.exports = route