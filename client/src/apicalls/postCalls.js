import axios from "axios";
import { API_BASE_URL } from "./config.js";

const api = axios.create({
    baseURL : API_BASE_URL,
    withCredentials : true
})

export const upload_post_apicall = async (body) => {
    try {
        const response = await api.post("/api/post/upload", body)
        return response.data?response.data : response
    } catch (error) {
        throw error.response?.data?.message || "Failed to upload post"
    }
}

export const get_post_apicall = async () => {
    try {
        const response = await api.get("/api/post/")
        return response.data
    } catch (error) {
        throw error.response?.data?.message || "Failed to get all posts"
    }
}