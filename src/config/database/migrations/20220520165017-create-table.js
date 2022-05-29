'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('offices', {
      officeCode: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      addressLine1: {
        type: Sequelize.STRING,
      },
      addressLine2: {
        type: Sequelize.STRING,
      },
      state: {
        type: Sequelize.STRING,
      },
      country: {
        type: Sequelize.STRING,
      },
      postalCode: {
        type: Sequelize.STRING,
      },
      territory: {
        type: Sequelize.STRING,
      },
    });

    await queryInterface.createTable('employees', {
      employeeNumber: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      firstName: {
        type: Sequelize.STRING,
      },
      extension: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      officeCode: {
        type: Sequelize.STRING,
      },
      reportsTo: {
        type: Sequelize.INTEGER,
      },
      jobTitle: {
        type: Sequelize.STRING,
      },
    });

    await queryInterface.createTable('customers', {
      customerNumber: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      customerName: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: 'default',
      },
      contactLastName: {
        type: Sequelize.STRING,
      },
      contactFirstName: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      addressLine1: {
        type: Sequelize.STRING,
      },
      addressLine2: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      state: {
        type: Sequelize.STRING,
      },
      postalCode: {
        type: Sequelize.STRING,
      },
      country: {
        type: Sequelize.STRING,
      },
      salesRepEmployeeNumber: {
        type: Sequelize.INTEGER,
      },
      creditLimit: {
        type: Sequelize.INTEGER,
      },
    });

    await queryInterface.createTable('productlines', {
      productLine: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      textDescription: {
        type: Sequelize.TEXT,
      },
      htmlDescription: {
        type: Sequelize.TEXT,
      },
      image: {
        type: Sequelize.BLOB,
      },
    });

    await queryInterface.createTable('products', {
      productCode: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      productName: {
        type: Sequelize.STRING,
      },
      productLine: {
        type: Sequelize.STRING,
      },
      productScale: {
        type: Sequelize.STRING,
      },
      productVendor: {
        type: Sequelize.STRING,
      },
      productDescription: {
        type: Sequelize.TEXT,
      },
      quantityInStock: {
        type: Sequelize.INTEGER,
      },
      buyPrice: {
        type: Sequelize.REAL,
      },
      MSRP: {
        type: Sequelize.REAL,
      },
    });

    await queryInterface.createTable('orders', {
      orderNumber: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      orderDate: {
        type: Sequelize.DATE,
      },
      requiredDate: {
        type: Sequelize.DATE,
      },
      shippedDate: {
        type: Sequelize.DATE,
      },
      status: {
        type: Sequelize.STRING,
      },
      comments: {
        type: Sequelize.TEXT,
      },
      customerNumber: {
        type: Sequelize.INTEGER,
      },
    });

    await queryInterface.createTable('orderdetails', {
      orderNumber: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      productCode: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      quantityOrdered: {
        type: Sequelize.INTEGER,
      },
      priceEach: {
        type: Sequelize.REAL,
      },
      orderLineNumber: {
        type: Sequelize.INTEGER,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('offices');
    await queryInterface.dropTable('employees');
    await queryInterface.dropTable('customers');
    await queryInterface.dropTable('productlines');
    await queryInterface.dropTable('products');
    await queryInterface.dropTable('orders');
    await queryInterface.dropTable('orderdetails');
  },
};
