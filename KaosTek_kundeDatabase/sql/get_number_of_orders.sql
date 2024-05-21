USE KaosTek
GO

SELECT 
	customers.id, 
	CONCAT(customers.first_name, ' ', customers.last_name) AS customer_fullname,
	COUNT(orders.id) AS number_of_orders
FROM
	customers 
LEFT JOIN
	orders ON customers.id = orders.customer_id
GROUP BY 
	customers.id, 
	customers.first_name, 
	customers.last_name
ORDER BY
	customers.id;