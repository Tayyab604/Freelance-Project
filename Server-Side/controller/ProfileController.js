const asyncHandler = require("express-async-handler");
const UserProfile = require("../model/profileModel");
const User = require("../model/userModel");


// @des GetProfile
// route post /api/profile/basicinfo  
// @access private 
const GetProfile = asyncHandler(async (req,res) => {
    const {email} = req.params;
    if ( !email) {
        res.status(400)
        throw new Error("All Feild Are Required")
    }
    const Profile = await UserProfile.findOne({email})
    if (!Profile) {
        res.status(400)
        throw new Error("Profile Does Not Exist")
    }
    res.status(200).json({
        "FindProfileByEmail" : email ,
        "Profile" : Profile
    }) 
})
// @des Profile BasicInfo
// route post /api/profile/basicinfo  
// @access private 
const BasicInfo = asyncHandler(async (req,res) => {
    const { email,firstname,lastname,sex,dob,city,address,title,primaryskill,aboutyourself } = req.body;
    if ( !email || !firstname || !lastname || !sex || !dob || !city || !address || !title || !primaryskill || !aboutyourself) {
        res.status(400)
        throw new Error("All Feild Are Required")
    }
    const user = await User.findOne({email})
    if (!user) {
        res.status(400)
        throw new Error("User Does Not Exist")
    }
    const BasicInfo = await UserProfile.create({
        email,
        firstname,
        lastname,
        sex,
        dob,
        city,
        address,
        title,
        primaryskill,
        aboutyourself
    })
    res.status(200).json({
        "UpdateBasicInfoby" : email ,
        "Profile" : BasicInfo
    }) 
})
// @des Profile BasicInfo
// route post /api/profile/basicinfo  
// @access private 
const UpdateBasicInfo = asyncHandler(async (req,res) => {
    const { email,firstname,lastname,sex,dob,city,address,title,primaryskill,aboutyourself } = req.body;
    if ( !email || !firstname || !lastname || !sex || !dob || !city || !address || !title || !primaryskill || !aboutyourself) {
        res.status(400)
        throw new Error("All Feild Are Required")
    }
    await UserProfile.findOneAndUpdate({
        email ,
        firstname : firstname,
        lastname : lastname,
        sex : sex,
        dob : dob,
        city : city,
        address : address,
        title : title,
        primaryskill  : primaryskill,
        aboutyourself : aboutyourself
    })
    const user = await UserProfile.find({email})

        res.status(200).json({
            "BasicInfoUpdate" : email ,
            "Profile" : user
        }) 
    
    })
// @des Profile Education
// route post /api/profile/education  
// @access private  
const Education = asyncHandler(async (email) => {
  
    res.status(200).json({
        Education : "Education"
      
    })
})
// @des Profile Education
// route post /api/profile/education  
// @access private  
const Qualifications = asyncHandler(async (req, res) => {
    res.status(200).json({
        Qualifications : "Qualifications"
      
    })
  
})
// @des Profile Education
// route post /api/profile/education  
// @access private  
const WorkExperience = asyncHandler(async (req, res) => {
    res.status(200).json({
        WorkExperience : "WorkExperience"
      
    })
})
// @des Profile Education
// route post /api/profile/education  
// @access private  
const PortfolioItems = asyncHandler(async (req, res) => {
    res.status(200).json({
        PortfolioItems : "PortfolioItems"
      
    })

})
// @des Profile Education
// route post /api/profile/education  
// @access private  
const Certificates = asyncHandler(async (req, res) => {
  
    res.status(200).json({
        Certificates : "Certificates"
      
    })
})


module.exports = {
    GetProfile,
    BasicInfo,
    UpdateBasicInfo,
    Education,
    Qualifications,
    WorkExperience,
    PortfolioItems,
    Certificates,
}