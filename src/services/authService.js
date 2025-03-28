import { apiRequest } from "../utils/apiCalls/apiCalls";

export const login = async (email, password) => {
    try {
        const userData = await apiRequest('/api/auth/login', 'POST', {email, password}, {"Access-Control-Allow-Credentials": true})
        console.log(userData)
        return userData
    } catch (error) {
        throw error;
    }
}

export const logout = async() => {
    try {
        await apiRequest('/auth/logout', 'POST')
    } catch (error) {
        
    }
}

