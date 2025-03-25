const express = require('express');
const router = express.Router();
const TicketController = require('../controllers/ticketController');

router.get('/', TicketController.getAllTickets);
router.post('/:id', TicketController.deleteTicket);

module.exports = router;