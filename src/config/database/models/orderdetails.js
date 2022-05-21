'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orderdetails extends Model {}

  orderdetails.init(
    {
      orderNumber: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      productCode: {
        primaryKey: true,
        type: DataTypes.STRING,
      },
      quantityOrdered: DataTypes.INTEGER,
      priceEach: DataTypes.REAL,
      orderLineNumber: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'orderdetails',
      timestamps: false,
    },
  );
  return orderdetails;
};
