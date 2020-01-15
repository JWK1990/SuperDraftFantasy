INSERT INTO role_entity (id, name)
    VALUES  (1, 'ADMIN'),
            (2, 'USER');

INSERT INTO privilege_entity (id, name)
    VALUES  (1, 'WRITE'),
            (2, 'READ');

INSERT INTO role_privilege_join(role_id, privilege_id)
    VALUES  (1, 1),
            (1, 2),
            (2, 2);

INSERT INTO coach_type_enum(id, type)
    VALUES  (0, 'COMMISSIONER'),
            (1, 'MEMBER');

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

/* Insert initial Player Data. */
INSERT INTO player_entity(id, first_name, last_name, afl_team_id, average)
    VALUES (1, 'Cyril', 'Rioli', 9, 100);





