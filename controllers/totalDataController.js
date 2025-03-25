const TotalDataService = require('../services/totalDataService');

class TotalDataController {

    async getTotalData(req, res) {
        try {
            const responseData = await TotalDataService.getTotalData(); 
            const totalData = responseData.data; 
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
}

module.exports = new TotalDataController();