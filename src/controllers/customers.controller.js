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
    console.log(error);
    return res.status(500).json({
      statusCode: 500,
      success: false,
      message: `${error}`,
    });
  }
};

module.exports = {
  getAllCustomers,
};
