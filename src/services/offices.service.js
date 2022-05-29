const db = require('../config/database/models');

const Offices = db.offices;

const getAllOfficesId = async () => {
  const offices = await Offices.findAll({});
  return offices.map((o) => o.officeCode);
};

module.exports = {
  getAllOfficesId,
};
