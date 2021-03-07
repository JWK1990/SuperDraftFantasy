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

/* Insert initial Player Positions. */
/* INSERT INTO player_position_join(player_id, position_id)
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
           (40, 2),
           (41, 1),
           (41, 4),
           (42, 4),
           (43, 1),
           (44, 1),
           (44, 2),
           (45, 2),
           (46, 2),
           (47, 3),
           (48, 1),
           (48, 3),
           (49, 1),
           (49, 2),
           (50, 1);
   */





