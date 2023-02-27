create database bookstore;
use bookstore;
CREATE TABLE book (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(256) NOT NULL,
    author_id INT NOT NULL,
    publication_date DATE NOT NULL
);
CREATE TABLE author (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(256) NOT NULL
);
CREATE TABLE book_category (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(256) NOT NULL
);
CREATE TABLE book_category_mappings (
    id INT PRIMARY KEY AUTO_INCREMENT,
    book_id INT,
    category_id INT,
    FOREIGN KEY (book_id)
        REFERENCES book (id)
        ON DELETE CASCADE,
    FOREIGN KEY (category_id)
        REFERENCES book_category (id)
        ON DELETE CASCADE
);
INSERT INTO book (title, author_id, publication_date) 
VALUES 
  ('To Kill a Mockingbird', 1, '1960-07-11'),
  ('1984', 2, '1949-06-08'),
  ('The Great Gatsby', 3, '1925-04-10'),
  ('Pride and Prejudice', 4, '1813-01-28'),
  ('Animal Farm', 2, '1945-08-17');

INSERT INTO author ( name) 
VALUES 
  ('Harper Lee'),
  ('George Orwell'),
  ('F. Scott Fitzgerald'),
  ('Jane Austen');
  
INSERT INTO book_category( name) 
VALUES 
  ('Fiction'),
  ('Non-fiction'),
  ('Science Fiction'),
  ('Mystery');

INSERT INTO book_category_mappings (book_id, category_id) 
VALUES 
  (1, 1),
  (1, 2),
  (2, 1),
  (2, 3),
  (3, 1),
  (4, 1),
  (5, 1),
  (5, 2),
  (5, 3);


-- 1. Write a query to find all books published in the year 2020.

SELECT 
    title
FROM
    book
WHERE
    YEAR(publication_date) = 2020;

-- 2. Write a query to find the name of the author who has written the most number of books.


SELECT 
    author.name
FROM
    book
        JOIN
    author ON book.author_id = author.id
GROUP BY author.name
ORDER BY (COUNT(book.author_id)) DESC
LIMIT 1;



-- 3. Write a query to find the name of the category with the most number of books.
SELECT 
    bc.name
FROM
    book_category bc
        JOIN
    book_category_mappings bcm ON bcm.category_id = bc.id
GROUP BY bcm.category_id
ORDER BY (COUNT(bcm.book_id)) DESC
LIMIT 1;



-- 4. Write a query to find the name of the author who has written the most number of books in the category "fiction".
SELECT 
    a.name
FROM
    author a
        JOIN
    book b ON a.id = b.author_id
        JOIN
    book_category_mappings bcm ON b.id = bcm.book_id
        JOIN
    book_category bc ON bc.id = bcm.category_id
where bc.name= 'fiction'
group by a.id
order by(count(a.id)) desc
limit 1;


-- 5. Write a query to find the titles of the top 5 most popular books. 
-- The popularity of a book is defined as the number of times it has been borrowed by customers. 
-- Assume that information about book borrowings is stored in a 
-- separate table called book_borrowings with the following columns:
-- id: unique identifier for each borrowing
-- book_id: foreign key pointing to the books table
-- customer_id: foreign key pointing to the customers table
-- borrow_date: date on which the book was borrowed
create table customers (id int auto_increment primary key,
name varchar(256) not null
);

create table book_borrowing(
id int auto_increment primary key,
book_id int not null,
customer_id int not null,
borrow_date date not null,
foreign key(book_id) references book(id),
foreign key(customer_id)references customers(id)
);

insert into customers(name) values('Yug'),('Rutvik'),('Param');
insert into customers(name) values('Tejas'),('Savan');
truncate table book_borrowing;
INSERT INTO book_borrowing (book_id, customer_id, borrow_date)
VALUES
    (1, 1, '2022-02-01'),
    (1, 2, '2022-02-02'),
    (3, 2, '2022-02-03'),
    (4, 3, '2022-02-04'),
    (4, 3, '2022-02-05'),
    (1, 2, '2022-02-06'),
    (2, 5, '2022-02-07'),
    (3, 1, '2022-02-08'),
    (4, 5, '2022-02-09'),
    (5, 1, '2022-02-10');

SELECT 
    b.title-- , COUNT(book_id)
FROM
    book b
        JOIN
    book_borrowing bb ON b.id = bb.book_id
GROUP BY book_id
ORDER BY COUNT(book_id) DESC
LIMIT 5;
































