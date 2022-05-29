const router = require('express').Router();
const { celebrate, Joi, errors, Segments } = require('celebrate');
const employeesController = require('../controllers/employees.controller');
const employeesSchema = require('../utils/validation/employees.validation');

router.get('/', employeesController.getAllEmployees);
router.post(
  '/',
  celebrate({body: employeesSchema}),
  employeesController.createEmployee,
);
router.delete('/', employeesController.deleteAllEmployees);

router.get('/:employeeNumber', employeesController.getOneEmployee);
router.put(
  '/:employeeNumber',
  celebrate({body: employeesSchema}),
  employeesController.updateOrCreateEmployee,
);
router.patch(
  '/:employeeNumber',
  celebrate({body: employeesSchema}),
  employeesController.updateEmployee,
);
router.delete('/:employeeNumber', employeesController.deleteOneEmployee);

router.post('/addCustomers', employeesController.addCustomers);

module.exports = router;
