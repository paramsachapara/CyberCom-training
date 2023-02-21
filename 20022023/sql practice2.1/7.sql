use practice2_1_2;
create table Student7(
	id int auto_increment primary key,
    name varchar(256) not null
);

create table sem1(
	id int auto_increment primary key,
    student_id int,
    maths int not null ,
    physics int not null,
    chemistry int not null,
    foreign key(student_id) references Student7(id) on delete cascade
);
create table sem2(
	id int auto_increment primary key,
    student_id int,
    maths int not null ,
    physics int not null,
    chemistry int not null,
    foreign key(student_id) references Student7(id) on delete cascade
);
insert into student7(name)
value ('param'),('rutvik'),('yug'),('tejas');
select * from student7;

insert into sem1(student_id,maths,physics,chemistry)
value(1,98,89,88),
	(2,98,89,88),
    (3,98,89,88),
	(4,98,89,88);
    
insert into sem2(student_id,maths,physics,chemistry)
value(1,98,89,88),
	(2,98,89,88),
    (3,98,89,88),
	(4,98,89,88);
