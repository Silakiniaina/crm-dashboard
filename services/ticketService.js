const axios = require('axios');
const BASE_URL = 'http://localhost:8080/api/tickets';

class TicketService{

    async getAllTickets(){
        try {
            const response = await axios.get(BASE_URL);
            return response.data;
        } catch (error) {
            console.error("Error fetching all tickets:", error);
            throw new Error('Unable to retrieve all tickets');
        }
    }

    async deleteTicket(id){
        try {
            const response = await axios.delete(`${BASE_URL}/${id}`)
            return response.data;
        } catch (error) {
            console.error("Error attempting to delete ticket with id "+id, error);
            throw new Error('Unable to delete ticket with id : '+id);
        }
    }
}

module.exports = new TicketService();