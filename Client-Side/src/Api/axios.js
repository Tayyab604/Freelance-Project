import axios from 'axios'

const Axios = axios.create({
    baseURL : "http://localhost:4000"
})

export default Axios