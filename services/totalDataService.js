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

    async getTotalDataDetails(type) {
        try {
            const response = await axios.get(`${BASE_URL}/details`, {
                params: { type }
            });
            return response.data;
        } catch (error) {
            console.error(`Error fetching details for type ${type}:`, error);
            throw new Error('Unable to retrieve data details');
        }
    }
}

module.exports = new TotalDataService();