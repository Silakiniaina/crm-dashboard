const axios = require('axios');
const JAVA_API_URL = 'http://localhost:8080/api/data-total';
const JAVA_API_DETAILS_URL = 'http://localhost:8080/api/data-total/details';
const JAVA_API_EXPENSES_URL = 'http://localhost:8080/api/expenses';
const JAVA_API_THRESHOLD_URL = 'http://localhost:8080/api/threshold';

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

    async updateExpenseAmount(id, amount) {
        try {
            const response = await axios.post(JAVA_API_EXPENSES_URL + '/update', null, {
                params: { id, amount }
            });
            console.log(`Updated expense with id=${id}: `, response.data);
            return response.data;
        } catch (error) {
            throw new Error(error.response.data.data);
        }
    }

    async getThreshold() {
        try {
            const response = await axios.get(JAVA_API_THRESHOLD_URL);
            console.log("Threshold: ", response.data);
            return response.data;
        } catch (error) {
            console.error("Erreur lors de la récupération du threshold:", error);
            throw new Error('Impossible de récupérer le threshold');
        }
    }

    async updateThreshold(id, threshold) {
        try {
            const response = await axios.post(JAVA_API_THRESHOLD_URL, null, {
                params: { id, threshold }
            });
            console.log(`Updated threshold with id=${id}: `, response.data);
            return response.data;
        } catch (error) {
            console.error(`Erreur lors de la mise à jour du threshold avec id=${id}:`, error);
            throw new Error('Impossible de mettre à jour le threshold');
        }0
    }
}
module.exports = new TotalDataService();