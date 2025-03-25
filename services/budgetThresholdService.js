const axios = require('axios');
const BASE_URL = 'http://localhost:8080/api/budget-thresholds';

class ThresholdService {

    async getThreshold() {
        try {
            const response = await axios.get(BASE_URL);
            return response.data;
        } catch (error) {
            console.error("Error fetching threshold:", error);
            throw new Error('Unable to retrieve threshold');
        }
    }

    async updateThreshold(id, threshold) {
        try {
            const response = await axios.put(BASE_URL, { id, threshold });
            return response.data;
        } catch (error) {
            console.error(`Error updating threshold:`, error);
            throw new Error('Unable to update threshold');
        }
    }
}

module.exports = new ThresholdService();