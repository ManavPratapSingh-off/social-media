import axios from "axios";
import { API_BASE_URL } from "./config.js";

const api = axios.create({
    baseURL : API_BASE_URL,
    withCredentials : true
})

export const signUpUser = async (userData) => {
    try {
        const response = await api.post("/api/auth/sign-up", userData)
        return response.data
    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
            throw new Error(error.response.data.message)
        }
        throw error
    }
}

export const signInUser = async (credentials) => {
    try {
        const response = await api.post("/api/auth/sign-in", credentials)
        return response.data
    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
            throw new Error(error.response.data.message)
        }
        throw error
    }
}