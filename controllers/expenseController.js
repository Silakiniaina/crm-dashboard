const ExpenseService = require('../services/expenseService');

class ExpenseController {

    async getExpenseUpdateDetails(req, res) {
        try {
            const id = parseInt(req.query.id);
            const responseData = await ExpenseService.getExpenseById(id);
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
    }
}

module.exports = new ExpenseController();