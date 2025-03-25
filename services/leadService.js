const axios = require('axios');
const BASE_URL = 'http://localhost:8080/api/leads';

class LeadService{

    async getAllLeads(){
        try {
            const response = await axios.get(BASE_URL);
            return response.data;
        } catch (error) {
            console.error("Error fetching all leads:", error);
            throw new Error('Unable to retrieve all leads');
        }
    }

    async deleteLead(id){
        try {
            const response = await axios.delete(`${BASE_URL}/${id}`)
            return response.data;
        } catch (error) {
            console.error("Error attempting to delete lead", error);
            throw new Error('Unable to delete lead with id : '+id);
        }
    }
}

module.exports = new LeadService();