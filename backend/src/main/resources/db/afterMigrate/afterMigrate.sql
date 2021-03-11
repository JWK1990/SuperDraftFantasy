/*-- UPDATE THE SEQUENCES.
SELECT setval('afl_teams_enum_id_seq', (SELECT max(id) FROM afl_teams_enum));
SELECT setval('team_entity_id_seq', (SELECT max(id) FROM team_entity));
SELECT setval('team_type_enum_id_seq', (SELECT max(id) FROM team_type_enum));
SELECT setval('draft_entity_id_seq', (SELECT max(id) FROM draft_entity));
SELECT setval('draft_status_enum_id_seq', (SELECT max(id) FROM draft_status_enum));
SELECT setval('player_entity_id_seq', (SELECT max(id) FROM player_entity));
SELECT setval('position_entity_id_seq', (SELECT max(id) FROM position_entity));
SELECT setval('privilege_entity_id_seq', (SELECT max(id) FROM privilege_entity));
SELECT setval('role_entity_id_seq', (SELECT max(id) FROM role_entity));
SELECT setval('user_entity_id_seq', (SELECT max(id) FROM user_entity));

-- INSERT INITIAL TEST DATA.
INSERT INTO user_entity
(id, username, first_name, last_name, email, "password", created_on, updated_on)
VALUES(1, 'username', 'Test', 'User', 'username@gmail.com', '$2a$10$ipEaYYL5Mbym3aoYnOVXrO.Kkdbcbnbu0wtWGPxJ2KfNZpMiUYk0y', '2020-12-01 09:52:29.822', '2020-12-01 09:52:29.822')
ON CONFLICT DO NOTHING;
INSERT INTO user_entity
(id, username, first_name, last_name, email, "password", created_on, updated_on)
VALUES(2, 'username2', 'Test', 'User2', 'username2@gmail.com', '$2a$10$goSlUoe3SkAxJ402fJt3Putfa/1/UVNpaqLj9vxsLMK5JiIwNj4S6', '2020-12-01 09:52:55.757', '2020-12-01 09:52:55.757')
ON CONFLICT DO NOTHING;

INSERT INTO user_role_join
(user_id, role_id)
VALUES(1, 2)
ON CONFLICT DO NOTHING;
INSERT INTO user_role_join
(user_id, role_id)
VALUES(2, 2)
ON CONFLICT DO NOTHING;

INSERT INTO draft_entity
(id, "name", num_of_teams, roster_id, budget, on_the_block_timer, bid_timer, status_id, created_on, updated_on)
VALUES(1, 'Test Draft 1', 2, 1, 100, 10, 10, 1, '2020-12-01 09:52:40.183', '2020-12-01 09:53:01.362')
ON CONFLICT DO NOTHING;

INSERT INTO team_entity
(id, "name", type_id, budget, on_the_block, order_index, user_id, draft_id, status_id, created_on, updated_on)
VALUES(1, 'Team1', 0, 100, true, 0, 1, 1, 0, '2020-12-01 09:52:40.186', '2020-12-01 09:52:40.186')
ON CONFLICT DO NOTHING;
INSERT INTO team_entity
(id, "name", type_id, budget, on_the_block, order_index, user_id, draft_id, status_id, created_on, updated_on)
VALUES(2, 'Team2', 1, 100, false, 1, 2, 1, 0, '2020-12-01 09:53:01.359', '2020-12-01 09:53:01.363')
ON CONFLICT DO NOTHING;
*/
