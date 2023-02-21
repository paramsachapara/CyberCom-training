create database practice2_1_3;
use practice2_1_3;
create table salary(
	id int primary key auto_increment,
    name varchar(256),
    sex enum('m','f'),
    salary int
);
insert into salary(name,sex,salary)
value('A','m',2500),
	('B','f',6500),
    ('C','m',8500),
    ('D','f',9500);

SET SQL_SAFE_UPDATES = 0;

update salary
set sex = case '1' when sex ='m' then 'f'
when sex = 'f' then 'm'
else sex
end ;
select * from salary;