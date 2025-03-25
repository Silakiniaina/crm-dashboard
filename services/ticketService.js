const authUtils = require('../utils/authUtils');

class TicketService {
    constructor() {
        this.BASE_URL = 'http://localhost:8080/api/tickets';
    }

    async getAllTickets(req, res) {
        try {
            const data = await authUtils.authenticatedFetch(req, res, '/api/tickets');
            if (!data) return null;
            return data;
        } catch (error) {
            console.error("Error fetching all tickets:", error);
            throw new Error('Unable to retrieve all tickets');
        }
    }

    async deleteTicket(req, res, id) {
        try {
            const data = await authUtils.authenticatedFetch(req, res, `/api/tickets/${id}`, {
                method: 'DELETE'
            });
            if (!data) return null;
            return data;
        } catch (error) {
            console.error("Error attempting to delete ticket with id " + id, error);
            throw new Error('Unable to delete ticket with id: ' + id);
        }
    }
}

module.exports = new TicketService();