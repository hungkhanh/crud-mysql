'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class offices extends Model {}

  offices.init(
    {
      officeCode: {
        primaryKey: true,
        type: DataTypes.STRING,
      },
      city: DataTypes.STRING,
      phone: DataTypes.STRING,
      addressLine1: DataTypes.STRING,
      addressLine2: DataTypes.STRING,
      state: DataTypes.STRING,
      country: DataTypes.STRING,
      postalCode: DataTypes.STRING,
      territory: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'offices',
      timestamps: false,
    },
  );

  return offices;
};
