const db = require('../config/database/models');

const Employees = db.employees;

const findAll = async () => {
  return await Employees.findAll({});
};

const create = async (data) => {
  return await Employees.create(data);
};

// NOT USE
const deleteAll = async () => {
  return await Employees.truncate();
};

const findById = async (id) => {
  return await Employees.findByPk(id);
};

// condition: Object
const findOne = async (condition) => {
  return await Employees.findOne({where: condition});
};

const update = async (id, data) => {
  return await Employees.update(data, {
    where: {employeeNumber: id},
  });
};

const deleteOne = async (id) => {
  return await Employees.destroy({
    where: {employeeNumber: id},
  });
};

const checkEmployeeDefault = async () => {
  const employeee = await Employees.findOne({
    where: {lastName: '9999'},
  });
  return employeee ? true : false;
};

module.exports = {
  findAll,
  create,
  deleteAll,

  findById,
  findOne,
  update,
  deleteOne,

  checkEmployeeDefault,
};
