-- Create tables
USE Kajakklubbens_opslagstavle;
GO

CREATE TABLE categories (
	id INT PRIMARY KEY IDENTITY(1,1),
	category_name varchar(255) NOT NULL,
)

CREATE TABLE pictures (
	id INT PRIMARY KEY IDENTITY(1,1),
	title VARCHAR(255) NOT NULL,
	image_url VARCHAR(255) NOT NULL, 
	picture_description VARCHAR(255),
	created_at DATETIME2 DEFAULT SYSDATETIME(),
)

CREATE TABLE members (
	id INT PRIMARY KEY IDENTITY (1,1),
	first_name VARCHAR(255) NOT NULL,
	last_name VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL, 
	phone VARCHAR(255) NOT NULL,
)

CREATE TABLE club_events (
	id INT PRIMARY KEY IDENTITY(1,1),
	title VARCHAR(255) NOT NULL,
	category INT NOT NULL, 
	picture INT, 
	host INT NOT NULL, 
	event_date DATETIME NOT NULL,
	duration VARCHAR(255) NOT NULL,
	max_participants INT,
	event_description VARCHAR(255),
	event_location VARCHAR(255),

	FOREIGN KEY (category) REFERENCES categories(id),
	FOREIGN KEY (picture) REFERENCES pictures(id),
	FOREIGN KEY (host) REFERENCES members(id),
)

CREATE TABLE news (
	id INT PRIMARY KEY IDENTITY(1,1),
	title VARCHAR(255) NOT NULL,
	news VARCHAR(255) NOT NULL,
	start_time DATETIME NOT NULL,
	end_time DATETIME NOT NULL,
	author INT NOT NULL,
	is_verified TINYINT NOT NULL,

	FOREIGN KEY (author) REFERENCES members(id),
)