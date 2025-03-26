const authUtils = require('../utils/authUtils');

class GraphService {
    async getBudgetVsExpenses(req, res) {
        try {
            const data = await authUtils.authenticatedFetch(req, res, `/api/graphs/budget-vs-expenses?limit=10`);
            if (!data) return null;
            return data;
        } catch (error) {
            console.error("Error fetching budget vs expenses data:", error);
            throw new Error('Unable to retrieve budget vs expenses data');
        }
    }

    async getLeadConversionRate(req, res) {
        try {
            const data = await authUtils.authenticatedFetch(req, res, `/api/graphs/lead-conversion-rate`);
            if (!data) return null;
            return data;
        } catch (error) {
            console.error("Error fetching lead conversion rate data:", error);
            throw new Error('Unable to retrieve lead conversion rate data');
        }
    }

    async getAverageExpenses(req, res) {
        try {
            const data = await authUtils.authenticatedFetch(req, res, `/api/graphs/avg-expenses`);
            if (!data) return null;
            return data;
        } catch (error) {
            console.error("Error fetching average expenses data:", error);
            throw new Error('Unable to retrieve average expenses data');
        }
    }
}

module.exports = new GraphService();