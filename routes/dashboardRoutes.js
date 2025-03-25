const express = require('express');
const router = express.Router();
const TotalDataController = require('../controllers/totalDataController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/dashboard', authMiddleware.isAuthenticated, TotalDataController.getTotalData);
router.get('/data-total/details', authMiddleware.isAuthenticated, TotalDataController.getTotalDataDetails);

module.exports = router;