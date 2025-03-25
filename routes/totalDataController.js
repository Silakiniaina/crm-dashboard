const express = require('express');
const router = express.Router();
const totalDataService = require('../services/totalDataService');

router.get('/data-total', async (req, res) => {
    try {
        const responseData = await totalDataService.getTotalData(); 
        const totalData = responseData.data; 
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

router.get('/expense-update-details', async (req, res) => {
    try {
        const id = parseInt(req.query.id);
        const responseData = await totalDataService.getExpenseById(id);
        const expense = responseData.data;
        const type = expense.ticket ? '1' : expense.lead ? '2' : null;
        res.render('expense-update-details', {
            title: 'Update Expense Amount',
            expenseId: id,
            amount: expense.amount.toString(),
            type,
            page: 'expense-update-details'
        });
    } catch (error) {
        console.error(error);
        res.status(500).render('error', { 
            title: 'Error', 
            message: 'Error while fetching expense details' 
        });
    }
});

router.post('/expense-update-details', async (req, res) => {
    try {
        const id = parseInt(req.body.id);
        const amount = parseFloat(req.body.amount);
        await totalDataService.updateExpenseAmount(id, amount);
        let type = req.query.type;
        if (!type) {
            const expenseData = await totalDataService.getExpenseById(id);
            type = expenseData.data.ticket ? '1' : expenseData.data.lead ? '2' : null;
        }


        if (!type) {
            throw new Error('Unable to determine expense type');
        }

        res.redirect(`/data-total/details?type=${type}`);
    } catch (error) {
        res.status(500).render('error', { 
            title: 'Error', 
            message: error
        });
    }
});

router.get('/threshold', async (req, res) => {
    try {
        const responseData = await totalDataService.getThreshold();
        const thresholdData = responseData.data;
        res.render('threshold', {
            title: 'Update Budget Alert Threshold',
            thresholdId: thresholdData ? thresholdData.id : 0,
            threshold: thresholdData ? thresholdData.threshold : 0,
            page: 'threshold'
        });
    } catch (error) {
        console.error(error);
        res.render('threshold', {
            title: 'Update Budget Alert Threshold',
            thresholdId: 0,
            threshold: 0,
            page: 'threshold'
        }); // Fallback to default values if fetch fails
    }
});

router.post('/threshold', async (req, res) => {
    try {
        console.log("Req.body: ", req.body);
        const id = parseInt(req.body.id);
        const threshold = parseFloat(req.body.threshold);
        await totalDataService.updateThreshold(id, threshold);
        res.redirect('/data-total');
    } catch (error) {
        console.error(error);
        res.status(500).render('error', { 
            title: 'Error', 
            message: 'Error while updating threshold' 
        });
    }
});

module.exports = router;