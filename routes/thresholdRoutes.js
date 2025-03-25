const express = require('express');
const router = express.Router();
const ThresholdController = require('../controllers/thresholdController');

router.get('/', ThresholdController.getThreshold);
router.post('/', ThresholdController.updateThreshold);

module.exports = router;