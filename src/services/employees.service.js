const db = require('../config/database/models');

const Employeees = db.employeees;

const findAll = async () => {
  return await Employeees.findAll({});
};

const create = async (data) => {
  return await Employeees.create(data);
};

const deleteAll = async () => {
  return await Employeees.truncate();
};

const findById = async (id) => {
  return await Employeees.findByPk(id);
};

// condition: Object
const findOne = async (condition) => {
  return await Employeees.findOne({where: condition});
};

const update = async (id, data) => {
  return await Employeees.update(data, {
    where: {employeeNumber: id},
  });
};

const deleteOne = async (id) => {
  return await Employeees.destroy({
    where: {employeeNumber: id},
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
