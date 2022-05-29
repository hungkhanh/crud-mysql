const {QueryTypes} = require('sequelize');
const db = require('../config/database/models');

const salesInfo = async (startDate, endDate) => {
  const [results, metadata] = await db.sequelize.query(
    `
    SELECT products.productName AS name , o.sum AS total price
    FROM products
    LEFT JOIN
      (
        SELECT orderdetails.productCode AS code, SUM(orderdetails.quantityOrdered * orderdetails.priceEach) AS sum
        FROM orderdetails
        LEFT JOIN orders
        ON orderdetails.orderNumber = orders.orderNumber
        WHERE  orders.orderDate >= :startDate AND orders.orderDate <= :endDate
        GROUP BY orderdetails.productCode
      ) AS o
    ON products.productCode = o.code`,
    {
      replacements: {startDate: startDate, endDate: endDate},
      type: QueryTypes.SELECT,
    },
  );
  return results;
};

const customersInfo = async (employeeId, startDate, endDate) => {
  const [results, metadata] = await db.sequelize.query(
    `
    SELECT co.id, co.name, SUM(p.sum)
    FROM
    (
      SELECT  orderdetails.orderNumber AS order_number, SUM(orderdetails.quantityOrdered * orderdetails.priceEach) AS sum
      FROM orderdetails
      GROUP BY orderdetails.orderNumber
    ) AS p
    LEFT JOIN
    (
      SELECT c.id, c.name, orders.orderNumber AS order_number
      FROM orders
      LEFT JOIN
      (
        SELECT customers.customerNumber AS id, customers.customerName AS name
        FROM customers
        WHERE customers.salesRepEmployeeNumber = :employeeId
        AND customers.createAt >= :startDate
        AND customers.createAt <= :endDate
      ) AS c
      ON orders.customerNumber = c.id
    ) AS co
    ON p.order_number = co.order_number
    GROUP BY co.id`,
    {
      replacements: {
        employeeId: employeeId,
        startDate: startDate,
        endDate: endDate,
      },
      type: QueryTypes.SELECT,
    },
  );
  return results;
};

module.exports = {
  salesInfo,
  customersInfo,
};
