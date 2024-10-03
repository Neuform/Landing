import axios from "axios"
const jwt = localStorage.getItem('jwt')
console.log(jwt)

// export const API_BASE_URL = "https://blog-api-production-3703.up.railway.app"
export const API_BASE_URL = "http://localhost:5858"

export const api = axios.create({
    baseURL:API_BASE_URL,
    headers:{
        "Authorization":`Bearer ${jwt}`,
        "Content-Type":"application/json"
    }
})