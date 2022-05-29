const router = require('express').Router();
const officesController = require('../controllers/offices.controller');

router.post('/createEmployeeDefault', officesController.createEmployeeDefault);

module.exports = router;
