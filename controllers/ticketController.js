const TicketService = require('../services/ticketService');

class TicketController{

    async getAllTickets(req, res){
        try {
            const ticketsResponse = await TicketService.getAllTickets();
            const tickets = ticketsResponse.data;
            res.render('all-tickets',{
                title : 'All tickets',
                tickets
            })
        } catch (error) {
            console.error(error);
            res.status(500).render('error', { 
                title: 'Error', 
                message: 'Error while fetching all tickets' 
            });
        }
    }

    async deleteTicket(req, res){
        try {
            const id = parseInt(req.params.id);
            await TicketService.deleteTicket(id);
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