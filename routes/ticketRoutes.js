const express = require('express');
const router = express.Router();
const LeadController = require('../controllers/ticketController');

router.get('/', LeadController.getAllTickets);

module.exports = router;