const express = require('express');
const router = express.Router();
const LeadController = require('../controllers/leadController');

router.get('/', LeadController.getAllLeads);
router.post('/:id', LeadController.deleteLead);

module.exports = router;