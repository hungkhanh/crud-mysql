const router = require('express').Router();
const reportController = require('../controllers/report.controller');

router.post('/sale', reportController.reportSale);
router.post('/customers', reportController.reportCusomers);

module.exports = router;
