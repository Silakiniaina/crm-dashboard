const express = require('express');
const router = express.Router();
const totalDataService = require('../services/totalDataService');

router.get('/data-total', async (req, res) => {
    try {
        const responseData = await totalDataService.getTotalData(); 
        const totalData = responseData.data; 
        console.log("Controller: ", totalData);
        res.render('dashboard', { 
            title: 'Dashboard for total data', 
            totalData
        });
    } catch (error) {
        console.error(error);
        res.status(500).render('error', { 
            title: 'Error', 
            message: 'Error while fetching data' 
        });
    }
});

module.exports = router;