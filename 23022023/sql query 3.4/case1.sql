create database practice3_4_1;
use practice3_4_1;

SET SQL_SAFE_UPDATES=0;

CREATE TABLE Cars (
    carId INT PRIMARY KEY,
    brand VARCHAR(56),
    model VARCHAR(56),
    year INT,
    mileage INT,
    price DECIMAL(10 , 2 ),
    available BIT
);

create table Customers(
customerId int primary key,
firstName varchar(56),
lastName varchar(56),
email varchar(104),
phoneNumber varchar(20)
);

create table Sales(
saleId int primary key,
carId int ,
customerId int,
saleDate date,
salePrice decimal(10,2),
foreign key(carId) references Cars(carId),
foreign key(customerId) references Customers(customerId)
);

INSERT INTO Cars (CarID, Brand, Model, Year, Mileage, Price, Available)
VALUES
  (1, 'Toyota', 'Camry', 2015, 50000, 15000.00, 1),
  (2, 'Honda', 'Civic', 2017, 30000, 18000.00, 0),
  (3, 'Ford', 'Mustang', 2018, 20000, 25000.00, 1),
  (4, 'Chevrolet', 'Corvette', 2020, 10000, 55000.00, 1),
  (5, 'Volkswagen', 'Jetta', 2016, 40000, 12000.00, 0);

INSERT INTO Customers (CustomerID, FirstName, LastName, Email, PhoneNumber)
VALUES
  (1, 'John', 'Smith', 'john.smith@example.com', '(555) 555-1212'),
  (2, 'Mary', 'Johnson', 'mary.johnson@example.com', '(555) 555-2323'),
  (3, 'David', 'Williams', 'david.williams@example.com', '(555) 555-3434'),
  (4, 'Sarah', 'Jones', 'sarah.jones@example.com', '(555) 555-4545'),
  (5, 'Michael', 'Brown', 'michael.brown@example.com', '(555) 555-5656');
  
  INSERT INTO Sales (SaleID, CarID, CustomerID, SaleDate, SalePrice)
VALUES
  (1, 1, 1, '2022-02-15', 14500.00),
  (2, 3, 2, '2022-02-18', 24000.00),
  (3, 4, 3, '2022-02-21', 50000.00),
  (4, 2, 4, '2022-02-22', 17500.00),
  (5, 1, 5, '2022-02-23', 14000.00);

select * from cars;
select * from customers;
select * from sales;
-- 1. Retrieve the top 10 most expensive cars from the Cars 
-- table.
SELECT 
    *
FROM
    cars
ORDER BY price DESC
LIMIT 10;

-- 2. Retrieve the average price of all available cars from the 
-- Cars table.
SELECT 
    AVG(price) AS avg_price
FROM
    cars;
    
-- 3. Retrieve the list of customers who have purchased a car, 
--  along with the total number of cars each customer has purchased.

select c.FirstName , c.LastName, count(s.CarID) as number_of_cars
from Customers c
join Sales s
on c.CustomerID = s.CustomerID
group by c.CustomerID;


-- 4. Retrieve the list of customers who have not yet made a purchase.

select c.FirstName , c.LastName
from Customers c
join Sales s
on c.CustomerID = s.CustomerID
where c.CustomerID not in (select s.customerID);

-- 5. Insert a new car into the Cars table with the following information:
--  Brand='Toyota', Model='Corolla', Year=2022, Mileage=0, Price=20000, Available=1.

insert into Cars values (6,'Toyota','Corolla',2022,0,20000,1);

-- 6. Update the price of all cars in the Cars table by adding 10% to their current price.
update Cars
set price=price+(price/10)
;
-- 7. Delete all sales from the Sales table that occurred before January 1, 2022.

delete from Sales
where SaleDate< '2022-01-01';


