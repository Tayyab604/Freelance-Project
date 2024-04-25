const asyncHandler = require("express-async-handler");
const User = require("../model/userModel");
const bcrypt = require('bcrypt')
const nodemailer = require("nodemailer")
const jwt = require('jsonwebtoken')

// @des Get User By Id
//
const GetUserById = asyncHandler(async (req,res) => {
    const { id } = req.params
    if (!id) {
        res.status(400)
        throw new Error("All Feild Are Required")
    }
    const user = await User.findById(id)
    res.status(200).json({
        UserById : user
      
    })
  

    
})

// @des Verify the User
//  not a route its function  
const SendVerficationMail = asyncHandler(async (email) => {
    const user = await User.findOne({ email })
    const encryptedToken = await bcrypt.hash(user._id.toString(), 8);

    const jwtToken = jwt.sign({ userId: user._id }, process.env.TOKEN_KEY, {
        expiresIn: "5m",
    });
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "maliktayyab12344321@gmail.com",
            pass: "qwhe ajaw mnfy azxx",
        },
    });
    const mailoption = {
        from: "maliktayyab12344321@gmail.com",
        to: email,
        subject: "Welcome to Canfree",
        html: `Hi ${user.username}, <br/>Thank you for create account on <strong>Canfree</strong>.<br/>
        To complete your registration, please click the link below to verify your email address:<strong><a href="${'http://localhost:5173/welcome'}/${jwtToken}">Verify</a></strong> <br/>
        This link will expire in 5 minutes.If you don't verify your email address within this timeframe,you'll need to request a new verification email.
        If you've already verified your email address, you can disregard this email. <br/>
        <strong>Thanks</strong>, <br/>
        <strong>The Canfree Team</strong>`
    }
    await user.updateOne({ verifytoken: encryptedToken })
    await transporter.sendMail(mailoption, (error, info) => {
        if (error) {
            console.error("Error sending email: ", error);
        } else {
            console.log("Email sent: ", info.response);



        }
    })
})
// @des Create a New User
// route post /api/users/signup  
// @access public 
const Signup = asyncHandler(async (req, res) => {
    const { username, email, password, role } = req.body;
    if (!username || !email || !password || !role) {
        res.status(400)
        throw new Error("All Feild Are Required")
    }
    const userAvailable = await User.findOne({ email })
    if (userAvailable) {
        res.status(400)
        throw new Error("Email is Already Exist")
    }
    // hash password
    const hashPassword = await bcrypt.hash(password, 10)
    const isVerfied = "0";
    const verifytoken = "No";
    const forgetpasswordtoken = "No"
    const user = await User.create({
        username,
        email,
        password: hashPassword,
        role,
        verifytoken,
        isVerfied,
        forgetpasswordtoken
    })
    if (user) {
        res.status(201).json({
            "message": "User Create SuccessFully",
            _id: user.id,
            email: user.email,
            token: user.verifytoken,
            role: user.role,
            isVerfied: user.isVerfied
        });
        SendVerficationMail(user.email)
    } else {
        res.status(401)
        throw new Error("User Data  not valid")
    }
})
// @des Resend Mail
// route post /api/users/signup  
// @access public 
const resendmail = asyncHandler(async (req, res) => {
    const { email } = req.body
    if (!email) {
        res.status(400)
        throw new Error("Email Are Required for verification")
    }
    const userAvailable = await User.findOne({ email })
    if (!userAvailable) {
        res.status(400)
        throw new Error("User Not Available")
    }
    SendVerficationMail(email)
    res.json({
        messsage: `successfully Resend mail to ${email}`
    })
})
// @des Verify User
// route post /api/users/welcomeuser  
// @access public 
const WelcomeUserVerified = asyncHandler(async (req, res) => {
    const { token } = req.body;
    if (!token) {
        res.status(400)
        throw new Error("Token is required")
    }
    const decodedToken = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await User.findById(decodedToken.userId);
    if (!user) {
        res.status(401)
        throw new Error("Invalid Token")
    };

    const updateUser = await user.updateOne({ isVerfied: "1" })
    res.json({
        "Message":`Successfully Verfied the User${user.email}`
    })

})
// @des Forgetpassword email send
// route post /api/users/forgetpassword  
// @access public 
const ForgetPassword = asyncHandler(async (req, res) => {
    const { email } = req.body;
    if (!email) {
        res.status(400)
        throw new Error("All Feild Are Required")
    }
    const user = await User.findOne({ email })
    if (!user) {
        res.status(400)
        throw new Error("Email Does not Exist")
    }
    const encryptedToken = await bcrypt.hash(user._id.toString(), 8);

    const jwtToken = jwt.sign({ userId: user._id }, process.env.TOKEN_KEY, {
        expiresIn: "5m",
    });
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "maliktayyab12344321@gmail.com",
            pass: "qwhe ajaw mnfy azxx",
        },
    });
    const mailoption = {
        from: "maliktayyab12344321@gmail.com",
        to: email,
        subject: "Forget Password on Canfree",
        html: `Dear ${user.username}, <br/>
        We understand that forgetting your password can be frustrating. To reset your password for your Canfree account <br/> Click on this link <strong><a href="${'http://localhost:5173/newpassword'}/${jwtToken}">Forget Password</a></strong> <br/>
        <strong>Thanks</strong>, <br/>
        <strong>The Canfree Team</strong>`
    }
    await user.updateOne({ forgetpasswordtoken: encryptedToken })
    await transporter.sendMail(mailoption, (error, info) => {
        if (error) {
            console.error("Error sending email: ", error);
        } else {
            console.log("forget password Email sent: ", info.response);



        }
    })
    res.json({
        "message": `Successfully Forget mail Send to ${user.email}`
    })

})
// @des Successfully Forget the password
// route post /api/users/ updateforgetpassword 
// @access public 
const UpdateForgetPassword = asyncHandler(async (req, res) => {
    const { token , newpassword} = req.body
    if (!token) {
        res.status(401)
        throw new Error("Toke is required")
    }
    if(!newpassword){
        res.status(401)
        throw new Error("New password is required")
    }
    const decodedToken = jwt.verify(token, process.env.TOKEN_KEY)
    const user = await User.findById(decodedToken.userId);
    if (!user) {
        res.status(401)
        throw new Error("Invalid Token")
    };
    const hashPassword = await bcrypt.hash(newpassword, 10)
    const updateUser = await user.updateOne({ password: hashPassword })
    res.json({
        "message": `Successfully forget password of ${user.email}`
    })
})
// @des Login user
// route post /api/users/signin  
// @access public 
const Signin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400)
        throw new Error("All Feild Are Required")
    }
    const userAvailable = await User.findOne({ email })
    if (!userAvailable) {
        res.status(400)
        throw new Error("User Does Not Exist")
    }
    if (userAvailable.isVerfied == "0") {
        res.status(400)
        throw new Error("User Does Not Verified")
    }

    if (email == userAvailable.email && (await bcrypt.compare(password, userAvailable.password))) {
        const token = jwt.sign(
            {
              username: userAvailable.username,
              email: userAvailable.email,
              userId: userAvailable.id,
            },
            process.env.TOKEN_KEY,
            {
              expiresIn: "7d",
            }
          );
      
          res.cookie("jwt", token);
      
          res.json({ 
            username: userAvailable.username,
            email: userAvailable.email,
            userId: userAvailable.id,
            token:token,
            role:userAvailable.role,
            message: "Signin SuccessFully" ,
             });
    } else {
        res.status(400)
        throw new Error("Your Credentials are invalid")
    }
    
})



module.exports = {
    Signup,
    resendmail,
    Signin,
    WelcomeUserVerified,
    ForgetPassword,
    UpdateForgetPassword,
    GetUserById

}