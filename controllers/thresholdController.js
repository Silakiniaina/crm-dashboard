const ThresholdService = require('../services/thresholdService');

class ThresholdController {
    async getThreshold(req, res) {
        try {
            const thresholdData = await ThresholdService.getThreshold(req, res);
            const thresholdId = thresholdData ? thresholdData.data.id : 0;
            const threshold = thresholdData ? thresholdData.data.threshold : 0;
            if (!thresholdData) return;
            res.render('threshold', {
                title: 'Update Budget Alert Threshold',
                thresholdId,
                threshold,
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

    async updateThreshold(req, res) {
        try {
            const id = parseInt(req.body.id);
            const threshold = parseFloat(req.body.threshold);
            const result = await ThresholdService.updateThreshold(req, res, id, threshold);
            if (!result) return;
            res.redirect('/dashboard');
        } catch (error) {
            console.error(error);
            res.status(500).render('error', { 
                title: 'Error', 
                message: 'Error while updating threshold' 
            });
        }
    }
}

module.exports = new ThresholdController();