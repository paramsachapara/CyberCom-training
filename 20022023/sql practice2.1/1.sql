-- 1. Create a database structure for employee leave application.
--  It should include all the employee's information as well as their leave information. 


create database practice2_1_1;
use practice2_1_1;

create table employee(
	id int primary key auto_increment,
    name text,
    city text,
    department varchar(16)
);
create table Leave_Application(
	id int,
    date date,
    reason text,
    foreign key(id) references employee(id) on delete cascade
);

insert into employee(name,city,department)
value('param','bhavnagar','javasccript'),
	('yug','ahmedabad','python'),
    ('rutvik','japan','kadiya_kam'),
    ('jaimin','ahmedabad','hardcore_majuri');
    
insert into Leave_Application(id,date,reason)
value(1,'2023-02-18','wnat to go home');