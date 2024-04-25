const express = require('express');
const { BasicInfo, Education, Qualifications,WorkExperience,PortfolioItems,Certificates, GetProfile, UpdateBasicInfo } = require('../controller/ProfileController');
const route = express.Router();

route.get('/getprofile/:email',GetProfile)
route.post('/basicinfo',BasicInfo)
route.put('/updatebasicinfo',UpdateBasicInfo)
route.post('/education',Education)
route.post('/qualifications',Qualifications)
route.post('/workexperince',WorkExperience)
route.post('/portfolioitems',PortfolioItems)
route.post('/certificates',Certificates)


module.exports = route