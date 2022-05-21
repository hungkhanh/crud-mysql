'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {}

  products.init(
    {
      productCode: {
        primaryKey: true,
        type: DataTypes.STRING,
      },
      productName: DataTypes.STRING,
      productLine: DataTypes.STRING,
      productScale: DataTypes.STRING,
      productVendor: DataTypes.STRING,
      productDescription: DataTypes.TEXT,
      quantityInStock: DataTypes.INTEGER,
      buyPrice: DataTypes.REAL,
      MSRP: DataTypes.REAL,
    },
    {
      sequelize,
      modelName: 'products',
      timestamps: false,
    },
  );
  return products;
};
