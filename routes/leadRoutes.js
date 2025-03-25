const express = require('express');
const router = express.Router();
const LeadController = require('../controllers/leadController');

router.get('/', LeadController.getThreshold);

module.exports = router;