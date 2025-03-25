const authUtils = require('../utils/authUtils');

class TotalDataService {

    async getTotalData(req, res) {
        try {
            const data = await authUtils.authenticatedFetch(req, res, '/api/total-data');
            if (!data) return null;
            return data;
        } catch (error) {
            console.error('Error fetching total data:', error);
            throw new Error('Unable to retrieve total data');
        }
    }

    async getTotalDataDetails(req, res, type) {
        try {
            const data = await authUtils.authenticatedFetch(req, res, '/api/total-data/details', {
                method: 'GET',
                params: { type }
            });
            if (!data) return null;
            return data;
        } catch (error) {
            console.error(`Error fetching details for type ${type}:`, error);
            throw new Error('Unable to retrieve data details');
        }
    }
}

module.exports = new TotalDataService();