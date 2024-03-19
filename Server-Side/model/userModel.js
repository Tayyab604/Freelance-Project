const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username : {
        type : String,
        required : [true,"Username Required"]
    },
    email : {
        type : String,
        required : [true,"Email Required"]
    },
    password : {
        type : String,
        required : [true,"Password Required"]
    },
    role : {
        type : String,
        required : [true,"Role Required"]
    },
    verifytoken : {
        type : String,
        required : [true,"token Required"]
    },
    isVerfied : {
        type : String,
        required : [true,"isVerfied Required"]
    },
    forgetpasswordtoken : {
        type : String,
        required : [true,"forgetpassword token Required"]
    },
    
},
{
    timestamps : true
})

const User = mongoose.model('new_users',userSchema)

module.exports = User