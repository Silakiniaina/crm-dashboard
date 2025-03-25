const axios = require('axios');

class AuthUtils {
    async authenticatedFetch(req, res, url, options = {}) {
        const token = req.session.token;
        if (!token) {
            res.redirect("/login");
            return null;
        }

        const baseUrl = process.env.API_HOST;
        const fullUrl = `${baseUrl}${url}`;
        console.log(fullUrl);
        const headers = {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        };

        try {
            const response = await axios({
                url: fullUrl,
                method: options.method || 'GET', 
                headers,
                data: options.body, 
                ...options, 
            });

            return response.data; 
        } catch (error) {
            console.error("API fetch error:", error.message);
            res.status(500).send(`API Error: ${error.message}`);
            return null;
        }
    }
}

module.exports = new AuthUtils();