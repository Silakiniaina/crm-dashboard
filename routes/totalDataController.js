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

router.get('/data-total/details', async (req, res) => {
    try {
        const type = req.query.type; // Get the 'type' query parameter
        if (!['0', '1', '2'].includes(type)) {
            throw new Error('Invalid type parameter');
        }

        const detailsData = await totalDataService.getTotalDataDetails(type);
        const details = detailsData.data; // Assuming the Java API returns a similar nested structure
        let title;
        let pageName = "budget";
        switch (type) {
            case '0':
                title = 'Budget Details';
                pageName = "budget";
                break;
            case '1':
                title = 'Ticket Expense Details';
                pageName = "expense";
                break;
            case '2':
                title = 'Lead Expense Details';
                pageName = "expense";
                break;
        }

        res.render(pageName+'-details', { 
            title, 
            details,
            type
        });
    } catch (error) {
        console.error(error);
        res.status(500).render('error', { 
            title: 'Error', 
            message: 'Error while fetching details' 
        });
    }
});

module.exports = router;