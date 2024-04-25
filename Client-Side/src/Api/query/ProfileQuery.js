import Axios from '../axios'

const API_USERS = "/api/profile"


export const GetAllDataOfProfileForUpdate = async (email)=>{
    try {
        const {data} =  await Axios.get(`${API_USERS}/getprofile/${email}`)
        return data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}
export const GetAllDataOfProfile = async (email)=>{
    try {
        const {data} =  await Axios.get(`${API_USERS}/getprofile/${email}`)
        return data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}
export const ProfileBasicInfo = async ({email,firstname,lastname,sex,dob,city,address,title,primaryskill,aboutyourself})=>{
    try {
        const {data} =  await Axios.post(`${API_USERS}/basicinfo`,{email,firstname,lastname,sex,dob,city,address,title,primaryskill,aboutyourself})
        return data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}
export const UpdateProfileBasicInfo = async ({email,firstname,lastname,sex,dob,city,address,title,primaryskill,aboutyourself})=>{
    try {
        const {data} =  await Axios.put(`${API_USERS}/updatebasicinfo`,{email,firstname,lastname,sex,dob,city,address,title,primaryskill,aboutyourself})
        return data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}
export const ProfileEducation = async ({country,collage,startdata,enddata,degree})=>{
    console.log(country,collage,startdata,enddata,degree)
}
export const ProfileQualifications = async ({certificate,organization,startdata,summary})=>{
    console.log(certificate,organization,startdata,summary)
}
export const ProfileWorkExperience = async ({position,company,startdata,enddata,summary})=>{
    console.log(position,company,startdata,enddata,summary)
}