const db = require('../config/database/models');

const Customers = db.customers;

const findAll = async () => {
  return await Customers.findAll({});
};

const create = async (data) => {
  return await Customers.create(data);
};

const deleteAll = async () => {
  return await Customers.truncate();
};

const findById = async (id) => {
  return await Customers.findByPk(id);
};

// condition: Object
const findOne = async (condition) => {
  return await Customers.findOne({where: condition});
};

const update = async (id, data) => {
  return await Customers.update(data, {
    where: {customerNumber: id},
  });
};

const deleteOne = async (id) => {
  return await Customers.destroy({
    where: {customerNumber: id},
  });
};

module.exports = {
  findAll,
  create,
  deleteAll,

  findById,
  findOne,
  update,
  deleteOne,
};
