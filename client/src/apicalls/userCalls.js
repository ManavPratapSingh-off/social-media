import axios from "axios";
import { API_BASE_URL } from "./config.js";

const api = axios.create({
    baseURL : API_BASE_URL,
    withCredentials : true
})

export const get_param_user = async (user_name) => {
    try {
        const response = await api.get(`/api/user/profile/${user_name}`)
        return response.data
    } catch (error) {
        throw error.response?.data?.message || "Failed to fetch user data"
    }
}