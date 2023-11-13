create database Bazar;
use Bazar;
CREATE TABLE Productos (
    Id INT PRIMARY KEY,
    Titulo VARCHAR(255),
    Descripcion TEXT,
    DiscountPercentage DECIMAL(18, 2),
    Rating DECIMAL(18, 2),
    Precio DECIMAL(18, 2),
    Stock INT,
    Categoria VARCHAR(255),
    Imagen VARCHAR(255),
    Thumbnail VARCHAR(255),
    Estatus VARCHAR(50)
);

CREATE PROCEDURE GetAllProductos
AS
BEGIN
    SELECT * FROM Productos;
END;

CREATE PROCEDURE SearchProductosByName
    @ProductName VARCHAR(255)
AS
BEGIN
    SELECT * FROM Productos
    WHERE Titulo LIKE '%' + @ProductName + '%';
END;
CREATE PROCEDURE SearchProductosById
    @id INT
AS
BEGIN
    SELECT * FROM Productos
    WHERE id =@id;
END;


EXEC GetAllProductos;


DECLARE @SearchTerm VARCHAR(255) = 'iPhone 9';
EXEC SearchProductosByName @ProductName = @SearchTerm;

INSERT INTO [dbo].[Productos] ([Id], [Titulo], [Descripcion], [DiscountPercentage], [Rating], [Precio], [Stock], [Categoria], [Imagen], [Thumbnail], [Estatus])
VALUES (1, 'iPhone 9', 'An apple mobile which is nothing like apple', 12.96, 4.69, 549.00, 94, 'smartphones', 'https://i.dummyjson.com/data/products/1/1.jpg', 'https://i.dummyjson.com/data/products/1/thumbnail.jpg', 'Active');

INSERT INTO [dbo].[Productos] ([Id], [Titulo], [Descripcion], [DiscountPercentage], [Rating], [Precio], [Stock], [Categoria], [Imagen], [Thumbnail], [Estatus])
VALUES (2, 'iPhone X', 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...', 17.94, 4.44, 899.00, 34, 'smartphones', 'https://i.dummyjson.com/data/products/2/1.jpg', 'https://i.dummyjson.com/data/products/2/thumbnail.jpg', 'Active');

INSERT INTO [dbo].[Productos] ([Id], [Titulo], [Descripcion], [DiscountPercentage], [Rating], [Precio], [Stock], [Categoria], [Imagen], [Thumbnail], [Estatus])
VALUES (3, 'Samsung Universe 9', 'Samsung''s new variant which goes beyond Galaxy to the Universe', 15.46, 4.09, 1249.00, 36, 'smartphones', 'https://i.dummyjson.com/data/products/3/1.jpg', 'https://i.dummyjson.com/data/products/3/thumbnail.jpg', 'Active');


INSERT INTO [dbo].[Productos] ([Id], [Titulo], [Descripcion], [DiscountPercentage], [Rating], [Precio], [Stock], [Categoria], [Imagen], [Thumbnail], [Estatus])
VALUES (4, 'OPPOF19', 'OPPO F19 is officially announced on April 2021.', 17.91, 4.3, 280.00, 123, 'smartphones', 'https://i.dummyjson.com/data/products/4/1.jpg', 'https://i.dummyjson.com/data/products/4/thumbnail.jpg', 'Active');

INSERT INTO [dbo].[Productos] ([Id], [Titulo], [Descripcion], [DiscountPercentage], [Rating], [Precio], [Stock], [Categoria], [Imagen], [Thumbnail], [Estatus])
VALUES (30, 'Skin Beauty Serum.', 'Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m', 10.68, 4.42, 46.00, 54, 'skincare', 'https://i.dummyjson.com/data/products/19/1.jpg,https://i.dummyjson.com/data/products/19/3.png,https://i.dummyjson.com/data/products/19/2.jpg', 'https://i.dummyjson.com/data/products/19/thumbnail.jpg', 'Active');

INSERT INTO [dbo].[Productos] ([Id], [Titulo], [Descripcion], [DiscountPercentage], [Rating], [Precio], [Stock], [Categoria], [Imagen], [Thumbnail], [Estatus])
VALUES (20, 'Freckle Treatment Cream- 15gm', 'Fair & Clear is Pakistans only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.', 16.99, 4.06, 70.00, 140, 'skincare', 'https://i.dummyjson.com/data/products/20/1.jpg,https://i.dummyjson.com/data/products/20/2.jpg,https://i.dummyjson.com/data/products/20/4.jpg', 'https://i.dummyjson.com/data/products/20/thumbnail.jpg', 'Active');
