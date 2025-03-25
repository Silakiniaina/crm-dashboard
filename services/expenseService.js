const authUtils = require('../utils/authUtils');

class ExpenseService {

    async getExpenseById(req, res, id) {
        try {
            const data = await authUtils.authenticatedFetch(req, res, `/api/expenses/${id}`);
            if (!data) return null;
            return data;
        } catch (error) {
            console.error(`Error fetching expense with id=${id}:`, error);
            throw new Error('Unable to retrieve expense');
        }
    }

    async updateExpense(req, res, id, amount) {
        try {
            const data = await authUtils.authenticatedFetch(req, res, `/api/expenses/${id}`, {
                method: 'PUT',
                body: { amount }
            });
            if (!data) return null;
            return data;
        } catch (error) {
            console.error(`Error updating expense with id=${id}:`, error);
            throw new Error('Unable to update expense');
        }
    }
}

module.exports = new ExpenseService();