'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customers extends Model {
    static associate(models) {}
  }

  customers.init(
    {
      customerNumber: {
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      customerName: DataTypes.STRING,
      contactLastName: DataTypes.STRING,
      contactFirstName: DataTypes.STRING,
      phone: DataTypes.STRING,
      addressLine1: DataTypes.STRING,
      addressLine2: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      postalCode: DataTypes.STRING,
      country: DataTypes.STRING,
      salesRepEmployeeNumber: DataTypes.INTEGER,
      creditLimit: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'customers',
      timestamps: false,
    },
  );

  return customers;
};
