const axios = require('axios');
const BASE_URL = 'http://localhost:8080/api/total-data';

class TotalDataService {

    async getTotalData() {
        try {
            const response = await axios.get(`${BASE_URL}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching total data:', error);
            throw new Error('Unable to retrieve total data');
        }
    }
}

module.exports = new TotalDataService();