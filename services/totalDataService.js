const axios = require('axios');
const JAVA_API_URL = 'http://localhost:8080/api/data-total';
const JAVA_API_DETAILS_URL = 'http://localhost:8080/api/data-total/details';
const JAVA_API_EXPENSES_URL = 'http://localhost:8080/api/expenses';

class TotalDataService {
    async getTotalData() {
        try {
            const response = await axios.get(JAVA_API_URL);
            console.log("data: ", response.data);
            return response.data;
        } catch (error) {
            throw new Error('Impossible de récupérer les données totales');
        }
    }

    async getTotalDataDetails(type) {
        try {
            const response = await axios.get(JAVA_API_DETAILS_URL, {
                params: { type } // Pass the type as a query parameter
            });
            console.log(`Details for type ${type}: `, response.data);
            return response.data;
        } catch (error) {
            console.error(`Erreur lors de la récupération des détails pour type ${type}:`, error);
            throw new Error('Impossible de récupérer les détails des données');
        }
    }

    async getExpenseById(id) {
        try {
            const response = await axios.get(`${JAVA_API_EXPENSES_URL}/${id}`);
            console.log(`Expense with id=${id}: `, response.data);
            return response.data;
        } catch (error) {
            // console.error(`Erreur lors de la récupération de l'expense avec id=${id}:`, error);
            throw new Error('Impossible de récupérer l\'expense');
        }
    }
}

module.exports = new TotalDataService();