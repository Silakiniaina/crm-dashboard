const axios = require('axios');
const BASE_URL = 'http://localhost:8080/api/login';

class AuthService {
    async login(username, password) {
        const headers = {
            "Content-Type": "application/json",
        };

        try {
            const response = await axios.post(BASE_URL, {
                username,
                password,
            }, {
                headers
            });
            return response.data; 
        } catch (error) {
            console.error("Login error:", error.message);
            throw error; 
        }
    }
}

module.exports = new AuthService();