const axios = require('axios');
const JAVA_API_URL = 'http://localhost:8080/api/data-total';

class TotalDataService {
    async getTotalData() {
        try {
            const response = await axios.get(JAVA_API_URL);
            console.log("data: ", response.data);
            return response.data;
        } catch (error) {
            throw new Error('Impossible de récupérer les données totales');
        }
    }
}

module.exports = new TotalDataService();