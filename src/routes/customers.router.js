const router = require('express').Router();
const celebrate = require('celebrate');
const customersController = require('../controllers/customers.controller');
const customersSchema = require('../utils/validation/customers.validation');

router.get('/', customersController.getAllCustomers);
router.post(
  '/',
  celebrate({
    body: customersSchema,
  }),
  customersController.createCustomer,
);
router.delete('/', customersController.deleteAllCustomers);

router.get('/:customerNumber', customersController.getOneCustomer);
router.put(
  '/:customerNumber',
  celebrate({
    body: customersSchema,
  }),
  customersController.updateOrCreateCustomer,
);
router.patch(
  '/:customerNumber',
  celebrate({
    body: customersSchema,
  }),
  customersController.updateCustomer,
);
router.delete('/:customerNumber', customersController.deleteOneCustomer);

module.exports = router;
