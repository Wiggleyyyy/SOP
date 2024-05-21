USE master
GO

CREATE DATABASE KaosTek
GO

USE KaosTek
GO

CREATE TABLE customers (
	id INT PRIMARY KEY IDENTITY(1,1),
	first_name VARCHAR(255) NOT NULL,
	last_name VARCHAR(255) NOT NULL, 
	address VARCHAR(255) NOT NULL, 
	zipcode INT, 
	city VARCHAR(255), 
	country VARCHAR(255), 
);

CREATE TABLE products (
	id INT PRIMARY KEY IDENTITY(1,1),
	product_name VARCHAR(255) NOT NULL,
	ean BIGINT,
	price DECIMAL(10,2),
);

CREATE TABLE orders (
	id INT PRIMARY KEY IDENTITY(1,1),
	customer_id INT NOT NULL,
	order_date datetime NOT NULL, 
	order_status VARCHAR(255) NOT NULL,

	FOREIGN KEY (customer_id) REFERENCES customers(id)
);

CREATE TABLE order_items (
	id INT PRIMARY KEY IDENTITY(1,1),
	order_id INT NOT NULL,
	product_id INT NOT NULL,
	quantity INT NOT NULL, 
	price DECIMAL(10,2) NOT NULL,

	FOREIGN KEY (order_id) REFERENCES orders(id),
	FOREIGN KEY (product_id) REFERENCES products(id),
);