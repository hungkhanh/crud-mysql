const employeesService = require('../services/employees.service');

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
    if (employee) {
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

module.exports = {
  getAllEmployees,
  createEmployee,
  deleteAllEmployees,

  getOneEmployee,
  updateOrCreateEmployee,
  updateEmployee,
  deleteOneEmployee,
};
