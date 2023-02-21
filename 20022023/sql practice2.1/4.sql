use practice2_1_2;
create table Customer5(
	id int primary key auto_increment,
    name varchar(256)
);
create table Orders(
	id int primary key auto_increment,
    customer_id int not null ,
    foreign key (customer_id) references customer5(id) on delete cascade
);

insert into customer5 (name)
value('param'),
('yug'),
('rutvik');

insert into Orders (customer_id)
value(1),
(1);


select name 
from customer5
where customer5.id not in (select customer_id from orders);