-- INSERT ADMIN.
INSERT INTO public.user_entity
(id, username, first_name, last_name, email, "password", created_on, updated_on)
VALUES(1, 'admin', 'First', 'Last', 'testadmin@gmail.com', '$2a$10$0Zr2QEdN44IT6BKPxZRfVOxt7I9otBF1M6sJtP12s.Dk5VjW14doa', '2020-02-13 04:13:26.453', '2020-02-13 04:13:26.456');

INSERT INTO public.user_role_join
(user_id, role_id)
VALUES(1, 1);

-- INSERT USER.
INSERT INTO public.user_entity
(id, username, first_name, last_name, email, "password", created_on, updated_on)
VALUES(2, 'user', 'First', 'Last', 'user@gmail.com', '$2a$10$0Zr2QEdN44IT6BKPxZRfVOxt7I9otBF1M6sJtP12s.Dk5VjW14doa', '2020-02-13 04:13:26.453', '2020-02-13 04:13:26.456');

INSERT INTO public.user_role_join
(user_id, role_id)
VALUES(2, 2);

INSERT INTO draft_entity
(id, "name", num_of_teams, roster_type, budget, created_on, updated_on)
    VALUES(1, 'First Draft', 10, 'DEFAULT', 300, '2019-12-09 14:11:28.906', '2019-12-09 14:11:28.908');

INSERT INTO coach_entity
(id, type_id, user_id, draft_id, created_on, updated_on)
    VALUES(1, 0, 1, 1, '2019-12-09 14:11:28.971', '2019-12-09 14:11:28.971');

INSERT INTO team_entity
(coach_id, "name", budget, created_on, updated_on)
    VALUES(1, 'First Team', 300, '2019-12-09 14:19:07.362', '2019-12-09 14:19:07.362');

INSERT INTO team_entity_player_entity
(team_entity_id, player_entity_id)
    VALUES(1, 1);

-- update the sequences
SELECT setval('afl_teams_enum_id_seq', (SELECT max(id) FROM afl_teams_enum));
SELECT setval('coach_entity_id_seq', (SELECT max(id) FROM coach_entity));
SELECT setval('coach_type_enum_id_seq', (SELECT max(id) FROM coach_type_enum));
SELECT setval('draft_entity_id_seq', (SELECT max(id) FROM draft_entity));
SELECT setval('player_entity_id_seq', (SELECT max(id) FROM player_entity));
SELECT setval('privilege_entity_id_seq', (SELECT max(id) FROM privilege_entity));
SELECT setval('role_entity_id_seq', (SELECT max(id) FROM role_entity));
SELECT setval('user_entity_id_seq', (SELECT max(id) FROM user_entity));
