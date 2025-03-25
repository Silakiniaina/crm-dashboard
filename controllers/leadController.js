const LeadService = require('../services/leadService');

class LeadController{

    async getAllLeads(req, res){
        try {
            const leadsResponse = await LeadService.getAllLeads();
            const leads = leadsResponse.data;
            res.render('all-leads',{
                title : 'All leads',
                leads
            })
        } catch (error) {
            console.error(error);
            res.status(500).render('error', { 
                title: 'Error', 
                message: 'Error while fetching all leads' 
            });
        }
    }
}

module.exports = new LeadController();