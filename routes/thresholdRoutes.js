const express = require('express');
const router = express.Router();
const ThresholdController = require('../controllers/thresholdController');

router.get('/threshold', ThresholdController.getThreshold);
router.post('/threshold', ThresholdController.updateThreshold);

module.exports = router;