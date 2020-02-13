-- INSERT ADMIN USER.
INSERT INTO public.user_entity
(id, username, first_name, last_name, email, "password", created_on, updated_on)
VALUES(1, 'admin', 'First', 'Last', 'testadmin@gmail.com', '$2a$10$0Zr2QEdN44IT6BKPxZRfVOxt7I9otBF1M6sJtP12s.Dk5VjW14doa', '2020-02-13 04:13:26.453', '2020-02-13 04:13:26.456');

INSERT INTO public.user_role_join
(user_id, role_id)
VALUES(1, 1);

-- UPDATE THE SEQUENCES.
SELECT setval('afl_teams_enum_id_seq', (SELECT max(id) FROM afl_teams_enum));
SELECT setval('coach_entity_id_seq', (SELECT max(id) FROM coach_entity));
SELECT setval('coach_type_enum_id_seq', (SELECT max(id) FROM coach_type_enum));
SELECT setval('draft_entity_id_seq', (SELECT max(id) FROM draft_entity));
SELECT setval('draft_status_enum_id_seq', (SELECT max(id) FROM draft_status_enum));
SELECT setval('player_entity_id_seq', (SELECT max(id) FROM player_entity));
SELECT setval('position_entity_id_seq', (SELECT max(id) FROM position_entity));
SELECT setval('privilege_entity_id_seq', (SELECT max(id) FROM privilege_entity));
SELECT setval('role_entity_id_seq', (SELECT max(id) FROM role_entity));
SELECT setval('user_entity_id_seq', (SELECT max(id) FROM user_entity));