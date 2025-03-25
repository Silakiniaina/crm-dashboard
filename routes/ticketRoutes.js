const express = require('express');
const router = express.Router();
const TicketController = require('../controllers/ticketController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware.isAuthenticated, TicketController.getAllTickets);
router.post('/:id', authMiddleware.isAuthenticated, TicketController.deleteTicket);

module.exports = router;