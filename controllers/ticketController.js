const TicketService = require('../services/ticketService');

class TicketController {
    async getAllTickets(req, res) {
        try {
            const ticketsData = await TicketService.getAllTickets(req, res);
            const tickets = ticketsData.data;
            if (!tickets) return;
            res.render('all-tickets', {
                title: 'All tickets',
                tickets
            });
        } catch (error) {
            console.error(error);
            res.status(500).render('error', { 
                title: 'Error', 
                message: 'Error while fetching all tickets' 
            });
        }
    }

    async deleteTicket(req, res) {
        try {
            const id = parseInt(req.params.id);
            const result = await TicketService.deleteTicket(req, res, id);
            if (!result) return;
            res.redirect(`/tickets`);
        } catch (error) {
            console.error(error);
            res.status(500).render('error', { 
                title: 'Error', 
                message: 'Error while deleting ticket' 
            });
        }
    }
}

module.exports = new TicketController();