CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers 
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(45) NOT NULL,
	devoured boolean NOT NULL default false,
	date timestamp,
	PRIMARY KEY(id)
);

