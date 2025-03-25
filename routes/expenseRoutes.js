const express = require('express');
const router = express.Router();
const ExpenseController = require('../controllers/expenseController');

router.get('/expense-update-details', ExpenseController.getExpenseUpdateDetails);
router.post('/expense-update-details', ExpenseController.updateExpense);

module.exports = router;