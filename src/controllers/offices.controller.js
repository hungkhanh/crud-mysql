const employeesService = require('../services/employees.service');
const officesService = require('../services/offices.service');

const createEmployeeDefault = async (req, res) => {
  try {
    const isExist = await employeesService.checkEmployeeDefault();
    if (!isExist) {
      const officesId = await officesService.getAllOfficesId();
      for (let i = 0; i < officesId.length; ++i) {
        await employeesService.create({
          lastName: '9999',
          officeCode: officesId[i],
        });
      }
      res.status(201).json({
        statusCode: 201,
        success: false,
        message: 'Create default employee',
      });
    } else {
      res.status(200).json({
        statusCode: 200,
        success: false,
        message: 'Default employee already exists',
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      statusCode: 500,
      success: false,
      message: `${error}`,
    });
  }
};

module.exports = {
  createEmployeeDefault,
};
