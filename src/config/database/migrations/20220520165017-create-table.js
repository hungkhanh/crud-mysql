'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('offices', {});
    await queryInterface.createTable('employees', {});
    await queryInterface.createTable('customers', {});
    await queryInterface.createTable('productlines', {});
    await queryInterface.createTable('products', {});
    await queryInterface.createTable('orders', {});
    await queryInterface.createTable('orderdetails', {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('offices');
    await queryInterface.dropTable('employees');
    await queryInterface.dropTable('customers');
    await queryInterface.dropTable('productlines');
    await queryInterface.dropTable('products');
    await queryInterface.dropTable('orders');
    await queryInterface.dropTable('orderdetails');
  }
};
