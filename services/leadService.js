const authUtils = require('../utils/authUtils'); 

class LeadService {
    constructor() {
        this.BASE_URL = 'http://localhost:8080/api/leads';
    }

    async getAllLeads(req, res) {
        try {
            const data = await authUtils.authenticatedFetch(req, res, '/api/leads');
            if (!data) return null; // Handle redirect or error from authenticatedFetch
            return data;
        } catch (error) {
            console.error("Error fetching all leads:", error);
            throw new Error('Unable to retrieve all leads');
        }
    }

    async deleteLead(req, res, id) {
        try {
            const data = await authUtils.authenticatedFetch(req, res, `/api/leads/${id}`, {
                method: 'DELETE'
            });
            if (!data) return null;
            return data;
        } catch (error) {
            console.error("Error attempting to delete lead with id " + id, error);
            throw new Error('Unable to delete lead with id: ' + id);
        }
    }
}

module.exports = new LeadService();