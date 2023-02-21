use practice2_2;
create table Cources(
	student varchar(256),
    class varchar(256),
    primary key(student,class)
);

insert into Cources
value('A','maths'),
	('B','biology'),
    ('C','english'),
    ('D','computer'),
    ('E','maths'),
    ('F','maths'),
    ('G','maths'),
    ('H','maths'),
    ('I','maths');
    
select class
from cources
group by class
having count(class)>4;