DROP DATABASE IF EXISTS burgers;
CREATE DATABASE burgers;
USE burgers;
CREATE TABLE burgers (
	id INTEGER auto_increment NOT NULL PRIMARY KEY,
    name VARCHAR(500) NOT NULL,
    status BOOLEAN DEFAULT false
);
SELECT * FROM burgers;