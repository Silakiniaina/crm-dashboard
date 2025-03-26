const GraphService = require('../services/graphService');
const TotalDataService = require('../services/totalDataService'); // Si tu veux garder les données totales

class DashboardController {
    async getDashboard(req, res) {
        try {
            // Récupérer les données totales (si elles existent encore dans ton API)
            const totalDataResponse = await TotalDataService.getTotalData(req, res);
            const totalData = totalDataResponse ? totalDataResponse.data : {};

            // Récupérer les données des graphiques
            const budgetVsExpenses = await GraphService.getBudgetVsExpenses(req, res) || [];
            const leadConversionRate = await GraphService.getLeadConversionRate(req, res) || [];
            const averageExpenses = await GraphService.getAverageExpenses(req, res) || [];

            res.render('dashboard', { 
                title: 'Dashboard', 
                totalData: totalData || { totalBudget: 0, totalTicketExpense: 0, totalLeadExpense: 0 },
                budgetVsExpenses,
                leadConversionRate,
                averageExpenses
            });
        } catch (error) {
            console.error(error);
            res.status(500).render('error', { 
                title: 'Error', 
                message: 'Error while fetching dashboard data' 
            });
        }
    }

    async getTotalDataDetails(req, res) {
        try {
            const type = req.query.type;
            if (!['0', '1', '2'].includes(type)) {
                throw new Error('Invalid type parameter');
            }

            const responseDetails = await TotalDataService.getTotalDataDetails(req, res, type);
            const details = responseDetails.data;
            if (!details) return;
            
            let title;
            let pageName = "budget";
            
            switch (type) {
                case '0':
                    title = 'Budget Details';
                    pageName = "budget";
                    break;
                case '1':
                    title = 'Ticket Expense Details';
                    pageName = "expense";
                    break;
                case '2':
                    title = 'Lead Expense Details';
                    pageName = "expense";
                    break;
            }

            res.render(pageName + '-details', { 
                title, 
                details,
                type
            });
        } catch (error) {
            res.status(500).render('error', { 
                title: 'Error', 
                message: 'Error while fetching details' 
            });
        }
    }
}

module.exports = new DashboardController();