import Axios from '../axios'

const API_CHATS = "/api/chat" 

export const UserChats = async (userId)=>{
    
    try {
        const {data} = await Axios.get(`${API_CHATS}/${userId}`,)
        return data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}