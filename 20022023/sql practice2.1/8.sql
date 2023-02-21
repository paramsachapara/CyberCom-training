use practice2_1_2;
create table Person8(
	personId int auto_increment primary key,
    firstname varchar(256) not null,
    lastname varchar(256) not null
);

create table address(
	addressId int auto_increment primary key,
    personId int not null,
    city varchar(256),
    state varchar(256)

 );
 
 insert into Person8(firstname, lastname)
 value('param','patel'),
	('yug','patel');

insert into address(personId,city,state)
value(1,'bhavnahgar','gujarat'),
	(3,'surat','gujarat');
    
    
select firstname, lastname,city,state 
from person8
left join address
on person8.personId=address.personId;
