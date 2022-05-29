SELECT `products`.`productName` AS `name` , o.`sum` AS `total price`
FROM `products`
LEFT JOIN
  (
    SELECT `orderdetails`.`productCode` AS `code`, SUM(`orderdetails`.`quantityOrdered` * `orderdetails`.`priceEach`) AS `sum`
    FROM `orderdetails`
    LEFT JOIN `orders`
    ON `orderdetails`.`orderNumber` = `orders`.`orderNumber`
    WHERE  `orders`.`orderDate` >= :startDate AND `orders`.`orderDate` <= :endDate
    GROUP BY `orderdetails`.`productCode`
  ) AS o
ON `products`.`productCode` = o.`code`