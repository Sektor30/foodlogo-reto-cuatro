import axios from 'axios'

const API = process.env.REACT_APP_API;

export const register = async (user) => {
    return await axios.post(`${API}/register`, user)
}

export const login = async (user) => {
    return await axios.post(`${API}/login`, user)
}

export const profile = async (token) => {
    return await axios.get(`${API}/profile`, {
        headers: {
            Authorization: token
        }
    });
}