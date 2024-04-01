import Axios from '../axios'

const API_CHATS = "/api/messages"

export const FetchMessages = async (chatid)=>{
    
    try {
        const {data} = await Axios.get(`${API_CHATS}/${chatid}`,)
        return data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}
export const addMessages = async (message)=>{
    try {
        const {data} = await Axios.post(`${API_CHATS}`,message)
        return data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}