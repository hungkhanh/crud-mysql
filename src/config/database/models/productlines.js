'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productlines extends Model {}

  productlines.init(
    {
      productLine: {
        primaryKey: true,
        type: DataTypes.STRING,
      },
      textDescription: DataTypes.TEXT,
      htmlDescription: DataTypes.TEXT,
      image: DataTypes.BLOB,
    },
    {
      sequelize,
      modelName: 'productlines',
      timestamps: false,
    },
  );
  return productlines;
};
