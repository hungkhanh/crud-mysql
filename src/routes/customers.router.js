const router = require('express').Router();
const customersController = require('../controllers/customers.controller');

router.get('/', customersController.getAllCustomers);
router.post('/', customersController.createCustomer);
router.delete('/', customersController.deleteAllCustomers);

router.get('/:customerNumber', customersController.getOneCustomer);
router.put('/:customerNumber', customersController.updateOrCreateCustomer);
router.patch('/:customerNumber', customersController.updateCustomer);
router.delete('/:customerNumber', customersController.deleteOneCustomer);

module.exports = router;
