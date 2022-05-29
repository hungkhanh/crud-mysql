const reportController = require('../services/report.service');

const reportSale = async (req, res) => {
  try {
    return await reportController.salesInfo(req.body.startDate, req.body.endDate)
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      success: false,
      message: `${error}`,
    });
  }
}

const reportCusomers = async (req, res) => {
  try {
    return await reportController.customersInfo(req.body.employeeId, req.body.startDate, req.body.endDate)
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      success: false,
      message: `${error}`,
    });
  }
}

module.exports = {
  reportSale,
  reportCusomers,
}