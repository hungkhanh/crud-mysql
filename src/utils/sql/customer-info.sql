SELECT co.`id`, co.`name`, SUM(p.`sum`)
FROM
(
  SELECT  `orderdetails`.`orderNumber` AS `order_number`, SUM(`orderdetails`.`quantityOrdered` * `orderdetails`.`priceEach`) AS `sum`
  FROM `orderdetails`
  GROUP BY `orderdetails`.`orderNumber`
) AS p
LEFT JOIN
(
  SELECT c.`id`, c.`name`, `orders`.`orderNumber` AS `order_number`
  FROM `orders`
  LEFT JOIN
  (
    SELECT `customers`.`customerNumber` AS `id`, `customers`.`customerName` AS `name`
    FROM `customers`
    WHERE `customers`.`salesRepEmployeeNumber` = :employeeId
  ) AS c
  ON `orders`.`customerNumber` = c.`id`
) AS co
ON p.`order_number` = co.`order_number`
GROUP BY co.`id`