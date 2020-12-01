INSERT INTO role_entity(id, type)
    VALUES  (1, 'ADMIN'),
            (2, 'USER');

INSERT INTO privilege_entity(id, type)
    VALUES  (1, 'WRITE'),
            (2, 'READ');

INSERT INTO role_privilege_join(role_id, privilege_id)
    VALUES  (1, 1),
            (1, 2),
            (2, 2);

INSERT INTO roster_entity(id, type, def, mid, ruc, fwd, bench)
    VALUES (1, '57154', 5, 7, 1, 5, 4),
           (2, '22222', 2, 2, 2, 2, 2);

INSERT INTO draft_status_enum(id, status)
    VALUES (0, 'IN_SETUP'),
           (1, 'READY'),
           (2, 'IN_PROGRESS'),
           (3, 'STOPPED'),
           (4, 'COMPLETE');

INSERT INTO team_type_enum(id, type)
    VALUES  (0, 'COMMISSIONER'),
            (1, 'MEMBER');

INSERT INTO team_status_enum(id, status)
VALUES (0, 'IN_SETUP'),
       (1, 'READY');

/* Insert initial Afl Teams Data. */
INSERT INTO afl_teams_enum(id, aflTeam)
    VALUES  (0, 'ADELAIDE_CROWS'),
            (1, 'BRISBANE_LIONS'),
            (2, 'CARLTON_BLUES'),
            (3, 'COLLINGWOOD_MAGPIES'),
            (4, 'ESSENDON_BOMBERS'),
            (5, 'FREMANTLE_DOCKERS'),
            (6, 'GEELONG_CATS'),
            (7, 'GOLD_COAST_SUNS'),
            (8, 'GWS_GIANTS'),
            (9, 'HAWTHORN_HAWKS'),
            (10, 'MELBOURNE_DEMONS'),
            (11, 'NORTH_MELBOURNE_KANGAROOS'),
            (12, 'PORT_ADELAIDE_POWER'),
            (13, 'RICHMOND_TIGERS'),
            (14, 'ST_KILDA_SAINTS'),
            (15, 'SYDNEY_SWANS'),
            (16, 'WEST_COAST_EAGLES'),
            (17, 'WESTERN_BULLDOGS');

/* Insert initial Position Data. */
INSERT INTO position_entity (id, type)
    VALUES  (1, 'DEF'),
            (2, 'MID'),
            (3, 'RUC'),
            (4, 'FWD'),
            (5, 'BENCH');

/* Insert initial Player Data. */
INSERT INTO player_entity(id, first_name, last_name, afl_team_id, average)
    VALUES (1, 'Cyril', 'Rioli', 9, 100),
           (2, 'Jarryd', 'Roughead', 9, 100),
           (3, 'Jaeger', 'O''Meara', 9, 100),
           (4, 'Tom', 'Mitchell', 9, 100),
           (5, 'Ben', 'Stratton', 9, 100),
           (6, 'Isaac', 'Smith', 9, 100),
           (7, 'James', 'Worpel', 9, 100),
           (8, 'Sam', 'Frost', 9, 100),
           (9, 'Jonathon', 'Patton', 9, 100),
           (10, 'Luke', 'Breust', 9, 100),
           (11, 'Robert', 'Dipierdomenico', 9, 110),
           (12, 'Dermott', 'Brereton', 9, 130),
           (13, 'Jason', 'Dunstall', 9, 170),
           (14, 'Nick', 'Holland', 9, 100),
           (15, 'Trent', 'Croad', 9, 100),
           (16, 'James', 'Sicily', 9, 100),
           (17, 'Stephen', 'Gilham', 9, 140),
           (18, 'Tim', 'Boyle', 9, 100),
           (19, 'Jack', 'Gunston', 9, 100),
           (20, 'Will', 'Day', 9, 160),
           (21, 'Grant', 'Birchall', 9, 110),
           (22, 'Tim', 'Clark', 9, 100),
           (23, 'Patrick', 'Cripps', 4, 100),
           (24, 'Nat', 'Fyfe', 5, 110),
           (25, 'Dustin', 'Martin', 1, 130),
           (26, 'Tyson', 'Stengline', 14, 80),
           (27, 'Jason', 'Poplyzia', 14, 70),
           (28, 'Matt', 'Rowell', 2, 140),
           (29, 'Noah', 'Anderson', 9, 130),
           (30, 'Paul', 'Puopolo', 9, 100),
           (31, 'Chris', 'Mew', 9, 110),
           (32, 'Chris', 'Langford', 9, 130),
           (33, 'Will', 'Langford', 9, 170),
           (34, 'Shaun', 'Burgoyne', 9, 100),
           (35, 'Peter', 'Burgoyne', 9, 100),
           (36, 'Shane', 'Crawford', 9, 100),
           (37, 'Bryan', 'Stachaun', 9, 140),
           (38, 'Robert', 'Walls', 10, 100),
           (39, 'Malcolm', 'Blight', 11, 100),
           (40, 'Leigh', 'Matthew', 9, 160);

/* Insert initial Player Positions. */
INSERT INTO player_position_join(player_id, position_id)
    VALUES (1, 2),
           (2, 2),
           (2, 3),
           (3, 4),
           (4, 4),
           (5, 1),
           (6, 4),
           (7, 4),
           (8, 1),
           (9, 2),
           (9, 3),
           (10, 2),
           (11, 2),
           (12, 2),
           (13, 3),
           (14, 4),
           (15, 4),
           (16, 1),
           (17, 4),
           (18, 4),
           (19, 1),
           (20, 2),
           (21, 2),
           (22, 2),
           (22, 3),
           (23, 4),
           (24, 4),
           (25, 1),
           (26, 4),
           (27, 4),
           (28, 1),
           (29, 2),
           (29, 3),
           (30, 2),
           (31, 2),
           (32, 2),
           (33, 3),
           (34, 4),
           (35, 4),
           (36, 1),
           (37, 4),
           (38, 4),
           (39, 1),
           (40, 2);





