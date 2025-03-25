const axios = require('axios');
const BASE_URL = 'http://localhost:8080/api/expenses';

class ExpenseService {

    async getExpenseById(id) {
        try {
            const response = await axios.get(`${BASE_URL}/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching expense with id=${id}:`, error);
            throw new Error('Unable to retrieve expense');
        }
    }

    async updateExpense(id, amount) {
        try {
            const response = await axios.put(`${BASE_URL}/${id}`, { amount });
            return response.data;
        } catch (error) {
            console.error(`Error updating expense with id=${id}:`, error);
            throw new Error('Unable to update expense');
        }
    }
}

module.exports = new ExpenseService();