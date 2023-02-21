use practice2_1_2;
create table index6(
	id int auto_increment primary key,
    email varchar(256) unique not null
);

insert into index6(email)
value('paramsachapara29@gmail.com'),
	('yugpatel2107@gmail.com'),
    ('rm2028@gmiail.com');
    
create index email_index
on index6(email);