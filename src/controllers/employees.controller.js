const employeesService = require('../services/employees.service');
const customersService = require('../services/customers.service');

const getAllEmployees = async (req, res) => {
  try {
    const employees = await employeesService.findAll();
    res.status(200).json({
      statusCode: 200,
      success: true,
      data: employees,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      success: false,
      message: `${error}`,
    });
  }
};

const createEmployee = async (req, res) => {
  try {
    const employeeData = req.body;
    await employeesService.create(employeeData);
    res.status(201).json({
      statusCode: 201,
      success: true,
      message: 'Create one employee',
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      success: false,
      message: `${error}`,
    });
  }
};

const deleteAllEmployees = async (req, res) => {
  try {
    await employeesService.deleteAll();
    res.status(200).json({
      statusCode: 200,
      success: true,
      message: 'Delete all employees',
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      success: false,
      message: `${error}`,
    });
  }
};

const getOneEmployee = async (req, res) => {
  try {
    const id = req.params.employeeNumber;
    const employee = await employeesService.findById(id);
    if (employee) {
      res.status(200).json({
        statusCode: 200,
        success: true,
        data: employee,
      });
    } else {
      res.status(404).json({
        statusCode: 404,
        success: false,
        message: 'Not Found',
      });
    }
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      success: false,
      message: `${error}`,
    });
  }
};

const updateOrCreateEmployee = async (req, res) => {
  try {
    const id = req.params.employeeNumber;
    const employeeData = req.body;
    const employee = await employeesService.findById(id);
    if (employee) {
      await employeesService.update(id, employeeData);
    } else {
      await employeesService.create(employeeData);
    }
    res.status(200).json({
      statusCode: 200,
      success: true,
      message: 'Update one employee',
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      success: false,
      message: `${error}`,
    });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const id = req.params.employeeNumber;
    const employeeData = req.body;
    const employee = await employeesService.findById(id);
    if (employee) {
      await employeesService.update(id, employeeData);
      res.status(200).json({
        statusCode: 200,
        success: true,
        message: 'Update one employee',
      });
    } else {
      res.status(404).json({
        statusCode: 404,
        success: false,
        message: 'Not Found',
      });
    }
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      success: false,
      message: `${error}`,
    });
  }
};

const deleteOneEmployee = async (req, res) => {
  try {
    const id = req.params.employeeNumber;
    const employee = employeesService.findById(id);
    const lastName = employee.lastName;
    const officeCode = employee.officeCode;

    if (lastName === '9999') {
      return res.status(403).json({
        statusCode: 403,
        success: false,
        message: 'Cannot delete default employee',
      });
    }

    if (employee) {
      const defaultEmployee = await employeesService.findOne({
        lastName: '9999',
        officeCode: officeCode,
      });
      await customersService.updateAll(
        {
          salesRepEmployeeNumber: id,
        },
        {
          salesRepEmployeeNumber: defaultEmployee.employeeNumber,
        },
      );

      await employeesService.deleteOne(id);
      res.status(200).json({
        statusCode: 200,
        success: true,
        message: 'Delete one employee',
      });
    } else {
      res.status(404).json({
        statusCode: 404,
        success: false,
        message: 'Not Found',
      });
    }
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      success: false,
      message: `${error}`,
    });
  }
};

// Advance
const addCustomers = async (req, res) => {
  try {
    const employeeData = req.body.employee;
    const customersData = req.body.customers;

    const employee = await employeesService.create(employeeData);
    const employeeId = employee.employeeNumber;

    for (let i = 0; i < customersData.length; ++i) {
      customersData[i].salesRepEmployeeNumber = employeeId;
      await customersService.create(customersData[i]);
    }
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      success: false,
      message: `${error}`,
    });
  }
};

module.exports = {
  getAllEmployees,
  createEmployee,
  deleteAllEmployees,

  getOneEmployee,
  updateOrCreateEmployee,
  updateEmployee,
  deleteOneEmployee,

  addCustomers,
};
