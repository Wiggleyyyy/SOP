USE ERP_system;
GO

CREATE TABLE companies (
	company_id INT PRIMARY KEY IDENTITY(1,1),
	company_name VARCHAR(255) NOT NULL,
	cvr_number VARCHAR(255) NOT NULL,
	vat_number VARCHAR(255) NOT NULL,
	legal_form_id INT NOT NULL,
	owner_name VARCHAR(255) NOT NULL,
	contact_person VARCHAR(255),
	date_created DATETIME DEFAULT GETDATE(),
	address_1 VARCHAR(255) NOT NULL,
	address_2 VARCHAR(255),
	country_id INT NOT NULL,
	zipcode INT NOT NULL,
	city VARCHAR(255) NOT NULL,
	delivery_address VARCHAR(255),
	delivery_country_id INT,
	delivery_zipcode INT,
	delivery_city VARCHAR(255),
	delivery_phone VARCHAR(255),
	delivery_email VARCHAR(255),
	company_phone VARCHAR(255),
	company_email VARCHAR(255),
	website VARCHAR(255),
	status_id INT NOT NULL,
	billing_address VARCHAR(255) NOT NULL,
	billing_term_id INT NOT NULL,
	billing_contact VARCHAR(255) NOT NULL,

	FOREIGN KEY (legal_form_id) REFERENCES legal_forms(legal_form_id),
	FOREIGN KEY (country_id) REFERENCES iso_country_code(iso_country_code_id),
	FOREIGN KEY (delivery_country_id) REFERENCES iso_country_code(iso_country_code_id),
	FOREIGN KEY (status_id) REFERENCES status(status_id),
	FOREIGN KEY (billing_term_id) REFERENCES payment_terms(payment_term_id),
);
GO

CREATE TABLE users (
	user_id INT PRIMARY KEY IDENTITY(1,1), 
	first_name VARCHAR(255) NOT NULL,
	last_name VARCHAR(255) NOT NULL,
	user_username VARCHAR(255) NOT NULL,
	user_password VARCHAR(255) NOT NULL,
	phone VARCHAR(255),
	email VARCHAR(255),
	contact_phone VARCHAR(255),
	contact_email VARCHAR(255),
	date_created DATETIME DEFAULT GETDATE(),
	company_id INT,
	role_id INT NOT NULL,
	country_id INT NOT NULL,
	address_1 VARCHAR(255),
	address_2 VARCHAR(255),
	status_id INT NOT NULL,

	FOREIGN KEY (role_id) REFERENCES user_roles(user_role_id),
	FOREIGN KEY (status_id) REFERENCES status(status_id),
	FOREIGN KEY (country_id) REFERENCES iso_country_code(iso_country_code_id),
	FOREIGN KEY(company_id) REFERENCES companies(company_id)
);
GO

CREATE TABLE debtors (
	debtor_id INT PRIMARY KEY IDENTITY(1,1),
	debtor_name VARCHAR(255) NOT NULL,
	company_id INT NOT NULL,
	cvr_number VARCHAR(255) NOT NULL,
	vat_number VARCHAR(255) NOT NULL,
	phone VARCHAR(255),
	email VARCHAR(255),
	country_id INT,
	contact_person VARCHAR(255),
	zipcode INT,
	city VARCHAR(255),
	delivery_phone VARCHAR(255),
	delivery_email VARCHAR(255),
	delivery_zipcode INT,
	delivery_country_id INT,
	delivery_city VARCHAR(255),
	delivery_address VARCHAR(255),
	billing_address VARCHAR(255) NOT NULL,
	billing_contact VARCHAR(255) NOT NULL,
	billing_term INT,
	date_created DATETIME DEFAULT GETDATE(),
	debtor_note VARCHAR(255),

	FOREIGN KEY (company_id) REFERENCES companies(company_id),
	FOREIGN KEY (country_id) REFERENCES iso_country_code(iso_country_code_id),
	FOREIGN KEY (delivery_country_id) REFERENCES iso_country_code(iso_country_code_id),
	FOREIGN KEY (billing_term) REFERENCES payment_terms(payment_term_id),
);
GO

CREATE TABLE items (
	item_id INT PRIMARY KEY IDENTITY(1,1),
	ean_number BIGINT NOT NULL,
	item_name VARCHAR(255) NOT NULL,
	item_text VARCHAR(255),
	sales_price1 DECIMAL(10,2) NOT NULL,
	sales_price2 DECIMAL(10,2),
	cost_price DECIMAL(10,2) NOT NULL,
	stock INT NOT NULL,
	status_id INT NOT NULL,

	FOREIGN KEY (status_id) REFERENCES status(status_id),
);
GO

CREATE TABLE orders (
	order_id INT PRIMARY KEY IDENTITY(1,1),
	debtor_id INT NOT NULL,
	date_created DATETIME DEFAULT GETDATE(),
	date_complated DATETIME,
	status_id INT NOT NULL,
	currency_id INT NOT NULL,
	payment_status INT NOT NULL,
	payment_method VARCHAR(255) NOT NULL,
	total_amount DECIMAL(10,2) NOT NULL,
	tax_amount DECIMAL (10,2) NOT NULL,
	shipping_country_id INT,
	shipping_zipcode INT,
	shipping_city INT,
	shipping_address1 VARCHAR(255),
	shipping_address2 VARCHAR(255),
	order_note VARCHAR(255),

	FOREIGN KEY (debtor_id) REFERENCES debtors(debtor_id),
	FOREIGN KEY (status_id) REFERENCES status(status_id),
	FOREIGN KEY (currency_id) REFERENCES currencies(currency_id),
	FOREIGN KEY (payment_status) REFERENCES status(status_id),
	FOREIGN KEY (shipping_country_id) REFERENCES iso_country_code(iso_country_code_id),
);
GO

CREATE TABLE orderlines (
	order_line_id INT PRIMARY KEY IDENTITY(1,1),
	order_id INT NOT NULL,
	date_created DATETIME DEFAULT GETDATE(),
	price DECIMAL(10,2) NOT NULL,
	promotion_code_id INT,
	order_line_text VARCHAR(255),
	quantity INT NOT NULL,
	is_shipping TINYINT NOT NULL,
	tax_rate INT NOT NULL,
	tax_amount DECIMAL(10,2) NOT NULL,
	item_id INT NOT NULL,

	FOREIGN KEY (order_id) REFERENCES orders(order_id),
	FOREIGN KEY (promotion_code_id) REFERENCES promotion_codes(code_id),
	FOREIGN KEY (item_id) REFERENCES items(item_id),
);
GO