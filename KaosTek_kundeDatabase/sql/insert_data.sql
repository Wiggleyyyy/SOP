USE KaosTek
GO

INSERT INTO customers (first_name, last_name, address, zipcode, city, country)
VALUES
('Jens', 'Jensen', 'Bredagerkløkken 2', 5200, 'Odense SØ', 'Denmark'),
('Franco', 'Bianco', 'Stenløsevej 2', 5200, 'Odense S', 'Denmark'),
('Fred', 'Hansen', 'Dalumvej 2', 5200, 'Odense S', 'Denmark'),
('Hans', 'Hansen', 'Dalumvej 25', 5200, 'Odense S', 'Denmark');
GO

INSERT INTO products (product_name, ean, price)
VALUES
('Myggelamper', NULL, 200),
('Sokkelampe', NULL, 300),
('Røgalarm', NULL, 200),
('Bestikbakke', NULL, 200),
('Flyttekasser', NULL, 1500);
GO

INSERT INTO orders (customer_id, order_date, order_status)
VALUES
(1, '2022-05-01', 'Completed'), 
(2, '2022-06-01', 'Completed'),  
(1, '2022-05-22', 'Completed'), 
(1, '2022-05-22', 'Completed'), 
(3, '2022-06-01', 'Completed'), 
(4, '2022-06-01', 'Completed'),  
(1, '2022-06-01', 'Completed');
GO

INSERT INTO order_items (order_id, product_id, quantity, price)
VALUES
(1, 1, 10, 200),
(2, 2, 1, 300),
(3, 3, 2, 200),
(3, 4, 1, 200),
(4, 4, 1, 200),
(5, 5, 100, 1500),
(6, 2, 1, 300),
(7, 2, 1, 300);
GO