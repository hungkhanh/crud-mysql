const customersService = require('../services/customers.service');

const getAllCustomers = async (req, res) => {
  try {
    const customers = await customersService.findAll();
    res.status(200).json({
      statusCode: 200,
      success: true,
      data: customers,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      success: false,
      message: `${error}`,
    });
  }
};

const createCustomer = async (req, res) => {
  try {
    const customerData = req.body;
    await customersService.create(customerData);
    res.status(201).json({
      statusCode: 201,
      success: true,
      message: 'Create one customer',
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      success: false,
      message: `${error}`,
    });
  }
};

const deleteAllCustomers = async (req, res) => {
  try {
    await customersService.deleteAll();
    res.status(200).json({
      statusCode: 200,
      success: true,
      message: 'Delete all customers',
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      success: false,
      message: `${error}`,
    });
  }
};

const getOneCustomer = async (req, res) => {
  try {
    const id = req.params.customerNumber;
    const customer = await customersService.findById(id);
    if (customer) {
      res.status(200).json({
        statusCode: 200,
        success: true,
        data: customer,
      });
    } else {
      res.status(404).json({
        statusCode: 404,
        success: false,
        message: 'Not Found',
      });
    }
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      success: false,
      message: `${error}`,
    });
  }
};

const updateOrCreateCustomer = async (req, res) => {
  try {
    const id = req.params.customerNumber;
    const customerData = req.body;
    const customer = await customersService.findById(id);
    if (customer) {
      await customersService.update(id, customerData);
    } else {
      await customersService.create(customerData);
    }
    res.status(200).json({
      statusCode: 200,
      success: true,
      message: 'Update one customer',
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      success: false,
      message: `${error}`,
    });
  }
};

const updateCustomer = async (req, res) => {
  try {
    const id = req.params.customerNumber;
    const customerData = req.body;
    const customer = await customersService.findById(id);
    if (customer) {
      await customersService.update(id, customerData);
      res.status(200).json({
        statusCode: 200,
        success: true,
        message: 'Update one customer',
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

const deleteOneCustomer = async (req, res) => {
  try {
    const id = req.params.customerNumber;
    const customer = customersService.findById(id);
    if (customer) {
      await customersService.deleteOne(id);
      res.status(200).json({
        statusCode: 200,
        success: true,
        message: 'Delete one customer',
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
  getAllCustomers,
  createCustomer,
  deleteAllCustomers,

  getOneCustomer,
  updateOrCreateCustomer,
  updateCustomer,
  deleteOneCustomer,
};
