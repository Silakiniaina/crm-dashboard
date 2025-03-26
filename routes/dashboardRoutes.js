const express = require('express');
const router = express.Router();
const DashboardController = require('../controllers/dashboardController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/dashboard', authMiddleware.isAuthenticated, DashboardController.getDashboard);
router.get('/data-total/details', authMiddleware.isAuthenticated, DashboardController.getTotalDataDetails);

module.exports = router;