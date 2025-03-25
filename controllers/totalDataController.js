const TotalDataService = require('../services/totalDataService');

class TotalDataController {
    async getTotalData(req, res) {
        try {
            const datas = await TotalDataService.getTotalData(req, res);
            const totalData = datas.data;
            if (!totalData) return;
            res.render('dashboard', { 
                title: 'Dashboard for total data', 
                totalData
            });
        } catch (error) {
            console.error(error);
            res.status(500).render('error', { 
                title: 'Error', 
                message: 'Error while fetching data' 
            });
        }
    }

    async getTotalDataDetails(req, res) {
        try {
            const type = req.query.type;
            if (!['0', '1', '2'].includes(type)) {
                throw new Error('Invalid type parameter');
            }

            const details = await TotalDataService.getTotalDataDetails(req, res, type);
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
            console.error(error);
            res.status(500).render('error', { 
                title: 'Error', 
                message: 'Error while fetching details' 
            });
        }
    }
}

module.exports = new TotalDataController();