'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employees extends Model {}

  employees.init(
    {
      employeeNumber: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      lastName: DataTypes.STRING,
      firstName: DataTypes.STRING,
      extension: DataTypes.STRING,
      email: DataTypes.STRING,
      officeCode: DataTypes.STRING,
      reportsTo: DataTypes.INTEGER,
      jobTitle: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'employees',
      timestamps: false,
    },
  );
  return employees;
};
