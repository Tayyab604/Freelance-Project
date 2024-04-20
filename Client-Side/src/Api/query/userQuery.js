import Axios from '../axios'

const API_USERS = "/api/users"

export const GetUserById = async (id)=>{
    try {
        const {data} = await Axios.get(`${API_USERS}/getuserbyid/${id}`)
        return data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}
export const SignUpUser = async ({username,email,password,role})=>{
    
        try {
            const {data} = await Axios.post(`${API_USERS}/signup`,{username,email,password,role})
            return data
        } catch (error) {
            throw new Error(error.response.data.message)
        }
}
export const SigninUser = async ({email,password})=>{
    try {
        const {data} = await Axios.post(`${API_USERS}/signin`, {email, password})
        return data
       
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}

export const VerifyUser = async ({token})=>{
    
    try {
        const {data} = await Axios.post(`${API_USERS}/welcomeuser`,{token})
        return data
       
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}
export const ResendVerifyMail = async ({email})=>{
    try {
        const {data} = await Axios.post(`${API_USERS}/resendmail`,{email})
        return data
       
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}
export const ForgetThePassword = async ({email})=>{
    try {
        const {data} = await Axios.post(`${API_USERS}/forgetpassword`,{email})
        return data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}
export const UpdateForgetPassword = async ({token,newpassword})=>{    
    try {
        const {data} = await Axios.post(`${API_USERS}/updateforgetpassword`,{token,newpassword})
        return data
       
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}
