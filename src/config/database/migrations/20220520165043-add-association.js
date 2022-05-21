'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // employees[officeCode] n --- 1 offices[officeCode]
    await queryInterface.addConstraint('employees', {
      fields: ['officeCode'],
      type: 'foreign key',
      name: 'FK_employees_offices',
      references: {
        table: 'offices',
        field: 'officeCode',
      },
    });

    // employees[reportsTo] n --- 1 employees[employeeNumber]
    await queryInterface.addConstraint('employees', {
      fields: ['reportsTo'],
      type: 'foreign key',
      name: 'FK_employees_employees',
      references: {
        table: 'employees',
        field: 'employeeNumber',
      },
    });

    // customers[salesRepEmployeeNumber] n --- 1 employees[employeeNumber]
    await queryInterface.addConstraint('customers', {
      fields: ['salesRepEmployeeNumber'],
      type: 'foreign key',
      name: 'FK_customers_employees',
      references: {
        table: 'employees',
        field: 'employeeNumber',
      },
    });

    // products[productLine] n --- 1 productlines[productLine]
    await queryInterface.addConstraint('products', {
      fields: ['productLine'],
      type: 'foreign key',
      name: 'FK_products_productlines',
      references: {
        table: 'productlines',
        field: 'productLine',
      },
    });

    // orderdetails[orderNumber] n --- m products[productCode]
    await queryInterface.addConstraint('orderdetails', {
      fields: ['orderNumber'],
      type: 'foreign key',
      name: 'FK_orderdetails_orders',
      references: {
        table: 'orders',
        field: 'orderNumber',
      },
    });

    await queryInterface.addConstraint('orderdetails', {
      fields: ['productCode'],
      type: 'foreign key',
      name: 'FK_orderdetails_products',
      references: {
        table: 'products',
        field: 'productCode',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint(
      'employees',
      'FK_employees_offices',
    );
    await queryInterface.removeConstraint(
      'employees',
      'FK_employees_employees',
    );
    await queryInterface.removeConstraint(
      'customers',
      'FK_customers_employees',
    );
    await queryInterface.removeConstraint(
      'products',
      'FK_products_productlines',
    );
    await queryInterface.removeConstraint(
      'orderdetails',
      'FK_orderdetails_orders',
    );
    await queryInterface.removeConstraint(
      'orderdetails',
      'FK_orderdetails_products',
    );
  },
};
