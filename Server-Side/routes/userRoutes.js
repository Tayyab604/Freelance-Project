const express = require('express');
const { Signup, Signin ,resendmail, WelcomeUserVerified, ForgetPassword, UpdateForgetPassword } = require('../controller/userController');
const route = express.Router();

route.post('/signup',Signup)
route.post('/resendmail',resendmail)
route.post('/signin',Signin)
route.post('/welcomeuser',WelcomeUserVerified)
route.post('/forgetpassword',ForgetPassword)
route.post('/updateforgetpassword',UpdateForgetPassword)


module.exports = route