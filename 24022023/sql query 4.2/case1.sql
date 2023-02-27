-- Assume you are working with a company that has a database containing information about employees and their departments.  The database has three tables:
-- Employees table, which includes columns for employee ID, name, department ID, and salary.
-- Departments table, which includes columns for department ID and department name.
-- Salaries table, which includes columns for employee ID, salary, and date.
create database practice4_2;
use practice4_2;
CREATE TABLE Employees (
    id INT PRIMARY KEY,
    name VARCHAR(32),
    department_id INT,
    salary INT
);
alter table Employees
add foreign key (department_id)references departments(id);
CREATE TABLE Departments (
    id INT PRIMARY KEY,
    name VARCHAR(32)
);
CREATE TABLE salaries (
    emp_id INT,
    salary INT,
    date DATE
);

-- Employees table
INSERT INTO Employees (id, name, department_id, salary) VALUES
(1, 'Alice', 1, 50000),
(2, 'Bob', 2, 60000),
(3, 'Charlie', 1, 55000),
(4, 'Dave', 3, 70000),
(5, 'Eve', 1, 45000),
(6, 'Frank', 2, 65000);

-- Departments table
INSERT INTO Departments (id, name) VALUES
(1, 'Sales'),
(2, 'Engineering'),
(3, 'Marketing');

-- salaries table
INSERT INTO salaries(emp_id, salary, date) VALUES
(1, 50000, '2022-01-01'),
(1, 55000, '2022-02-01'),
(2, 60000, '2022-01-01'),
(2, 62000, '2022-02-01'),
(3, 55000, '2022-01-01'),
(3, 57000, '2022-02-01'),
(4, 70000, '2022-01-01'),
(4, 72000, '2022-02-01'),
(5, 45000, '2022-01-01'),
(5, 46000, '2022-02-01'),
(6, 65000, '2022-01-01'),
(6, 67000, '2022-02-01');


-- 1. Write a query to return the names of all employees who work in the 'Sales' department.
SELECT 
    e.name
FROM
    employees e
        JOIN
    departments d ON e.department_id = d.id
WHERE
    d.name = 'sales';

-- 2. Write a query to return the total number of employees in  each department, ordered by department name
SELECT 
    d.name, COUNT(e.id) AS num_emp
FROM
    employees e
        JOIN
    departments d ON e.department_id = d.id
GROUP BY d.id
ORDER BY d.name;

-- 3. Write a query to return the average salary for each 
-- department, ordered by department name.
SELECT 
    d.name, AVG(e.salary) AS avg_salary
FROM
    employees e
        JOIN
    departments d ON e.department_id = d.id
GROUP BY d.id
ORDER BY d.name;

-- 4. Write a query to return the top 10% of highest paid 
-- employees, ordered by salary.
SELECT e.EmployeeID, e.Salary
FROM Employees e
ORDER BY Salary DESC
LIMIT   10 ;

-- 5. Write a query to return the salary of each employee for 
-- their latest salary entry

SELECT 
    e.name , s.salary,new.date
FROM
    Employees e
    join salaries s ON s.emp_id = e.id
join
    (SELECT 
           s.emp_id,MAX(s.date)as date
        FROM
            salaries s
                JOIN
            employees e ON s.emp_id = e.id
        GROUP BY e.id
      
        ORDER BY date DESC
) as new
on new.emp_id = e.id
and s.date=new.date;



   

