USE nfl_def_ranks_db;

CREATE TABLE D_Rank(
id INT auto_increment NOT NULL,
Team VARCHAR(50) NOT NULL,
PassYardsPerGame FLOAT NOT NULL,
PassYardsPerGameRank FLOAT NOT NULL,
RushYardsPerGame FLOAT NOT NULL,
RushYardsPerGameRank FLOAT NOT NULL,
PointsPerGame FLOAT NOT NULL,
PointsPerGameRank FLOAT NOT NULL,
AveragePassRank FLOAT NOT NULL,
TruePassRank FLOAT NOT NULL,
AverageRushRank FLOAT NOT NULL,
TrueRushRank FLOAT NOT NULL,
created_at timestamp not null,
updated_at timestamp not null,
user_id varchar(50) not null,
teamAbbreviation VARCHAR (50) not null,
PRIMARY KEY(id)
)

SELect*FROM D_Rank