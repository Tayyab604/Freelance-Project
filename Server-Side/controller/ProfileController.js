const asyncHandler = require("express-async-handler");
const User = require("../model/userModel");



const BasicInfo = asyncHandler(async (req,res) => {
    const {id,firstname,lastname,sex,dob,city,address,professionaltitle,primaryskill,aboutyourself} = req.params
    if (!id || !firstname || !lastname || !sex || !dob || !city || !address || !professionaltitle || !primaryskill || !aboutyourself )  {
        res.status(400)
        throw new Error("All Feild Are Required")
    }
    const user = await User.findById(id)
})
const Education = asyncHandler(async (req,res) => {
    res.json({
        Education : "Education"
    })
  })
const Qualifications = asyncHandler(async (req,res) => {
    res.json({
        Qualifications : "Qualifications"
    })
})  
const WorkExperience = asyncHandler(async (req,res) => {
    res.json({
        WorkExperience : "WorkExperience"
    })
})  
const PortfolioItems = asyncHandler(async (req,res) => {
    res.json({
        PortfolioItems : "PortfolioItems"
    })
})  
const Certificates = asyncHandler(async (req,res) => {
    res.json({
        Certificates : "Certificates"
    })
})  





module.exports = {BasicInfo,Education,Qualifications,PortfolioItems,WorkExperience,Certificates}