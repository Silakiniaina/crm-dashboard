const express = require('express');
const router = express.Router();
const ThresholdController = require('../controllers/thresholdController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware.isAuthenticated, ThresholdController.getThreshold);
router.post('/', authMiddleware.isAuthenticated, ThresholdController.updateThreshold);

module.exports = router;