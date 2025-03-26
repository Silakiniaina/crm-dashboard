const LeadService = require('../services/leadService');

class LeadController {
    async getAllLeads(req, res) {
        try {
            const leadsData = await LeadService.getAllLeads(req, res);
            const leads = leadsData.data;
            if (!leads) return; 
            res.render('all-leads', {
                title: 'All leads',
                leads
            });
        } catch (error) {
            console.error(error);
            res.status(500).render('error', { 
                title: 'Error', 
                message: 'Error while fetching all leads' 
            });
        }
    }

    async deleteLead(req, res) {
        try {
            const id = parseInt(req.params.id);
            const result = await LeadService.deleteLead(req, res, id);
            if (!result) return; // authenticatedFetch handles redirect
            res.redirect(`/leads`);
        } catch (error) {
            console.error(error);
            res.status(500).render('error', { 
                title: 'Error', 
                message: 'Error while deleting lead' 
            });
        }
    }
}

module.exports = new LeadController();