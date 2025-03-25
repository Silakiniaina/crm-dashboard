const express = require('express');
const router = express.Router();
const LeadController = require('../controllers/leadController');
const authMiddleware = require('../middlewares/authMiddleware'); // Adjust path as needed

router.get('/', authMiddleware.isAuthenticated, LeadController.getAllLeads);
router.post('/:id', authMiddleware.isAuthenticated, LeadController.deleteLead);

module.exports = router;