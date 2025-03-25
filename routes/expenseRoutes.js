const express = require('express');
const router = express.Router();
const ExpenseController = require('../controllers/expenseController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/expense-update-details', authMiddleware.isAuthenticated, ExpenseController.getExpenseUpdateDetails);
router.post('/expense-update-details', authMiddleware.isAuthenticated , ExpenseController.updateExpense);

module.exports = router;