create database Practice2_1_2;
use Practice2_1_2;
create table Cinema
(
	id int primary key auto_increment,
    movie varchar(256) unique not null,
    description text,
    rating float
);
insert into Cinema (id, movie, description, rating) 
values ('1', 'War', 'great 3D', '8.9'),
('2', 'Science', 'fiction', '8.5'),
('3', 'irish', 'boring', '6.2'),
('4', 'Ice song', 'Fantacy', '8.6'),
('5', 'House card', 'Interesting', '9.1');

select * from Cinema 
where mod(id,2) = 1 and description != 'boring' order by rating desc;