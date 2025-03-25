const ThresholdService = require('../services/thresholdService');

class ThresholdController {

    async getThreshold(req, res) {
        try {
            const responseData = await ThresholdService.getThreshold();
            const thresholdData = responseData.data;
            
            res.render('threshold', {
                title: 'Update Budget Alert Threshold',
                thresholdId: thresholdData ? thresholdData.id : 0,
                threshold: thresholdData ? thresholdData.threshold : 0,
                page: 'threshold'
            });
        } catch (error) {
            console.error(error);
            res.render('threshold', {
                title: 'Update Budget Alert Threshold',
                thresholdId: 0,
                threshold: 0,
                page: 'threshold'
            });
        }
    }
}

module.exports = new ThresholdController();