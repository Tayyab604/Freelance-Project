const mongoose = require('mongoose');
const ProfileSchema = mongoose.Schema({
    email : {
        type : String,
        required : [true,"email Required"]
    },
    firstname : {
        type : String,
        required : [true,"firstname Required"]
    },
    lastname : {
        type : String,
        required : [true,"lastname Required"]
    },
    sex : {
        type : String,
        required : [true,"sex Required"]
    },
    dob : {
        type : String,
        required : [true,"dob Required"]
    },
    city : {
        type : String,
        required : [true,"city Required"]
    },
    address : {
        type : String,
        required : [true,"address Required"]
    },
    title : {
        type : String,
        required : [true,"title Required"]
    },
    primaryskill : {
        type : String,
        required : [true,"primaryskill Required"]
    }, 
    aboutyourself : {
        type : String,
        required : [true,"aboutyourself Required"]
    },
    
},
{
    timestamps : true
})

const UserProfile = mongoose.model('Profile',ProfileSchema)

module.exports = UserProfile