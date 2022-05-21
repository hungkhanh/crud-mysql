'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {}

  orders.init(
    {
      orderNumber: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      orderDate: DataTypes.DATE,
      requiredDate: DataTypes.DATE,
      shippedDate: DataTypes.DATE,
      status: DataTypes.STRING,
      comments: DataTypes.TEXT,
      customerNumber: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'orders',
      timestamps: false,
    },
  );
  return orders;
};
