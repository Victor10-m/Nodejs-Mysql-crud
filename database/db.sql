-- creamos la base de datos
CREATE DATABASE crudnodejsmysql;

-- usamos la nase de datos
use crudnodejsmysql;

-- creamos una tabla con los siguientes datos
CREATE TABLE customer (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  address VARCHAR(100) NOT NULL,
  phone VARCHAR(15)
);

-- verificamos que la tabla exista dentro de la base de datos
show tables;

-- desribimos la tabla
describe customer;


