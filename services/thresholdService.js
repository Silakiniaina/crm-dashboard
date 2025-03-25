const authUtils = require('../utils/authUtils');

class ThresholdService {

    async getThreshold(req, res) {
        try {
            const data = await authUtils.authenticatedFetch(req, res, '/api/budget-thresholds');
            if (!data) return null;
            return data;
        } catch (error) {
            console.error("Error fetching threshold:", error);
            throw new Error('Unable to retrieve threshold');
        }
    }

    async updateThreshold(req, res, id, threshold) {
        try {
            const data = await authUtils.authenticatedFetch(req, res, '/api/budget-thresholds', {
                method: 'PUT',
                body: { id, threshold }
            });
            if (!data) return null;
            return data;
        } catch (error) {
            console.error(`Error updating threshold:`, error);
            throw new Error('Unable to update threshold');
        }
    }
}

module.exports = new ThresholdService();