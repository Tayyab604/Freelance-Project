const express = require('express');
const { BasicInfo, Education, Qualifications,WorkExperience,PortfolioItems,Certificates } = require('../controller/ProfileController');
const route = express.Router();


route.post('/basicinfo',BasicInfo)
route.post('/education',Education)
route.post('/qualifications',Qualifications)
route.post('/workexperince',WorkExperience)
route.post('/portfolioitems',PortfolioItems)
route.post('/certificates',Certificates)


module.exports = route