const express = require('express');
const router = express.Router();
const TotalDataController = require('../controllers/totalDataController');

router.get('/dashboard', TotalDataController.getTotalData);
router.get('/data-total/details', TotalDataController.getTotalDataDetails);

module.exports = router;