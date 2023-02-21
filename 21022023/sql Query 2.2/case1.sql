create database practice2_2;
use practice2_2;
create table Activity(
	player_id int,
    device_id int,
    event_date date not null,
    games_played int not null,
    primary key(player_id,event_date)
);

insert into Activity(player_id,device_id,event_date,games_played)
value(1,2,'2016-03-01',5),
	(1,3,'2016-05-02',6),
    (2,3,'2017-06-25',1),
    (3,1,'2016-03-02',0),
    (3,4,'2018-07-03',5);

 SET SQL_SAFE_UPDATES = 0;
update  activity
set device_id =4
where event_date='2016-03-02';
update  activity
set device_id =1
where event_date='2018-07-03';

select* from activity;
    
    
-- Question 1: Write an SQL query to report the first login date for each player. 
-- Return the result table in any order.

select player_id, min( event_date) as first_login
from Activity
group by player_id;

-- Question 2: Write an SQL query to report the device that is first logged in for each player. 
-- Return the result table in any order.

select player_id , device_id
from activity
where (player_id,event_date) in (
							select player_id ,min(event_date)
                            from activity
                            group by (player_id)
);



-- Question 3: Write an SQL query to report for each player and date, how many games played so far by the player. 
-- That is, the total number of games played by the player until that date.
--  Check the example for clarity. Return the result table in any order.

create table Activity2(
	player_id int,
    device_id int,
    event_date date not null,
    games_played int not null,
    primary key(player_id,event_date)
);

insert into Activity2(player_id,device_id,event_date,games_played)
value(1,2,'2016-03-01',5),
	(1,3,'2016-05-02',6),
    (1,3,'2016-05-03',4),
    (2,3,'2017-06-25',1),
    (2,2,'2017-06-25',5),
    (3,1,'2016-03-02',0),
    (3,4,'2018-07-03',5);
    
update activity2
set event_date='2017-06-26'
where player_id=2 and device_id=2;

select * from activity2;

select player_id, event_date, sum(games_played) 
over (partition by player_id order by event_date ) as games_played_so_fart
from Activity2;
    
    
    
    
    
    
    
    
    
    
    
    







