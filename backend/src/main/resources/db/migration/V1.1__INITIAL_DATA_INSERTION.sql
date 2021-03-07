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
INSERT INTO afl_teams_enum(id, afl_team)
    VALUES  (1, 'ADELAIDE_CROWS'),
            (2, 'BRISBANE_LIONS'),
            (3, 'CARLTON_BLUES'),
            (4, 'COLLINGWOOD_MAGPIES'),
            (5, 'ESSENDON_BOMBERS'),
            (6, 'FREMANTLE_DOCKERS'),
            (7, 'GEELONG_CATS'),
            (8, 'GOLD_COAST_SUNS'),
            (9, 'GWS_GIANTS'),
            (10, 'HAWTHORN_HAWKS'),
            (11, 'MELBOURNE_DEMONS'),
            (12, 'NORTH_MELBOURNE_KANGAROOS'),
            (13, 'PORT_ADELAIDE_POWER'),
            (14, 'RICHMOND_TIGERS'),
            (15, 'ST_KILDA_SAINTS'),
            (16, 'SYDNEY_SWANS'),
            (17, 'WEST_COAST_EAGLES'),
            (18, 'WESTERN_BULLDOGS');

/* Insert initial Position Data. */
INSERT INTO position_entity (id, type)
    VALUES  (1, 'DEF'),
            (2, 'MID'),
            (3, 'RUC'),
            (4, 'FWD'),
            (5, 'BENCH');





