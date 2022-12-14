--Base de Datos de John Navarro Ramirez

--Script para crear la base de datos 
GO 
CREATE DATABASE Cine;
GO

USE Cine;
GO 

--Crear tabla de Peliculas
CREATE TABLE Pelicula(
id_pelicula int IDENTITY(1,5) NOT NULL,
nombre_pelicula NVARCHAR(50) NOT NULL,
--La duración está declarada como "nvarchar" para permitir la posibilidad de escribirla de manera textual o en fomato numerico
duracion NVARCHAR(50) NOT NULL,
categoria NVARCHAR(20) NOT NULL,
PRIMARY KEY(id_pelicula)
); 
GO

--Pequeño insert de datos en tabla pelicula 
INSERT INTO Pelicula VALUES 
('La Era De Hielo', '1:35', 'Animada'),
('Gladiador', '2:40', 'Accion'),
('El Titanic', '2:13', 'Romance');
GO 

--C
--R
--U
--D

--Crear tabla para cada Sala
CREATE TABLE Sala(
id_sala int IDENTITY(1,1) NOT NULL,
--El siguiente atributo refiere al tipo de sala, si es 3D llevará el valor 1, si es 2D el valor 0
tipo_sala bit,
PRIMARY KEY(id_sala)
)
GO

--Pequeño insert de sala
INSERT INTO Sala VALUES
(1),
(1),
(1),
(0)
GO

--C
--R
--U
--D

SELECT * FROM Sala

--Crear tabla de Comprobante de la Pelicula 
CREATE TABLE Comprobante(
id_factura int IDENTITY(1,1) NOT NULL,
id_pelicula int NOT NULL,
id_sala int NOT NULL,
hora_funcion NVARCHAR(20) NOT NULL,
PRIMARY KEY(id_factura),
CONSTRAINT FK_Pelicula FOREIGN KEY (id_pelicula) REFERENCES pelicula(id_pelicula),
CONSTRAINT FK_Sala FOREIGN KEY (id_sala) REFERENCES sala(id_sala)
)
GO
--Pequeño insert a tabla Comprobante
INSERT INTO Comprobante VALUES
(1, 2, '2:30pm'),
(6, 1, '3:15pm'),
(11, 4, '7:45pm')
GO

--C
--R
--U
--D

SELECT * FROM Sala

