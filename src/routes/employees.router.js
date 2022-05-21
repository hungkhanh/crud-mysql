const router = require('express').Router();
const employeesController = require('../controllers/employees.controller');

router.get('/', employeesController.getAllEmployees);
router.post('/', employeesController.createEmployee);
router.delete('/', employeesController.deleteAllEmployees);

router.get('/:employeeNumber', employeesController.getOneEmployee);
router.put('/:employeeNumber', employeesController.updateOrCreateEmployee);
router.patch('/:employeeNumber', employeesController.updateEmployee);
router.delete('/:employeeNumber', employeesController.deleteOneEmployee);

module.exports = router;