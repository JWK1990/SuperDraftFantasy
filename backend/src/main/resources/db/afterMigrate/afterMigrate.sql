/* UPDATE THE SEQUENCES. */
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
VALUES(1, 'TestUser', 'Test', 'User', 'TestUser@gmail.com', '$2a$10$N4pMHtlWz4W7MoEEGlWOL.BxHEVjzbnJxs4j0oolaeWApbUb8U1tG', '2022-02-02 10:18:56.636', '2022-02-02 10:18:56.637')
ON CONFLICT DO NOTHING;
INSERT INTO user_entity
(id, username, first_name, last_name, email, "password", created_on, updated_on)
VALUES(2, 'TestUser2', 'Test', 'User', 'TestUser2@gmail.com', '$2a$10$ZMDac9rt273eDq7QbEGdhuW2zt1AeB.PuArxiYaEWXX6oHA0oq6PG', '2022-02-03 18:34:05.366', '2022-02-03 18:34:05.367')
ON CONFLICT DO NOTHING;
INSERT INTO user_entity
(id, username, first_name, last_name, email, "password", created_on, updated_on)
VALUES(3, 'TestUser3', 'Test', 'User', 'TestUser3@gmail.com', '$2a$10$m721PDd.ZFPLPLQEJN/miOagiEia2MUV6KFMc8wsQK5u128gOcTri', '2022-02-08 18:07:02.892', '2022-02-08 18:07:02.892')
ON CONFLICT DO NOTHING;
INSERT INTO user_entity
(id, username, first_name, last_name, email, "password", created_on, updated_on)
VALUES(4, 'TestUser4', 'Test', 'User', 'TestUser4@gmail.com', '$2a$10$MZh2oTwn7sh10LNmkhR8v.boC3sZjMcUDlAxXuvMHkee3igHqaMOW', '2022-02-08 18:07:39.718', '2022-02-08 18:07:39.718')
ON CONFLICT DO NOTHING;
INSERT INTO user_entity
(id, username, first_name, last_name, email, "password", created_on, updated_on)
VALUES(5, 'TestUser5', 'Test', 'User', 'TestUser5@gmail.com', '$2a$10$g004jOef6QnnDv7qz2kzxO18wvpOOA8ODbBn7BTpi07ZoRFDmVYEi', '2022-02-08 18:08:06.829', '2022-02-08 18:08:06.829')
ON CONFLICT DO NOTHING;
INSERT INTO user_entity
(id, username, first_name, last_name, email, "password", created_on, updated_on)
VALUES(6, 'TestUser6', 'Test', 'User', 'TestUser6@gmail.com', '$2a$10$5yMa2AAGwXGCGY5VsShKf.nMLAQ/P2jkzcMGdkDApEnjiCS/umTFO', '2022-02-08 18:08:40.485', '2022-02-08 18:08:40.485')
ON CONFLICT DO NOTHING;
INSERT INTO user_entity
(id, username, first_name, last_name, email, "password", created_on, updated_on)
VALUES(7, 'TestUser7', 'Test', 'User', 'TestUser7@gmail.com', '$2a$10$Ebix2Z96MvskJXOpeG5yoeqm8hLbu7OfilyT5YZLCdDFP9922G.UG', '2022-02-08 18:09:10.375', '2022-02-08 18:09:10.375')
ON CONFLICT DO NOTHING;
INSERT INTO user_entity
(id, username, first_name, last_name, email, "password", created_on, updated_on)
VALUES(8, 'TestUser8', 'Test', 'User', 'TestUser8@gmail.com', '$2a$10$rN4gcfzEkSwDP9Oket/PvOH.vzHqD096KE4cbKe74sKgjpMW3qOuq', '2022-02-08 18:09:32.889', '2022-02-08 18:09:32.889')
ON CONFLICT DO NOTHING;
INSERT INTO user_entity
(id, username, first_name, last_name, email, "password", created_on, updated_on)
VALUES(9, 'TestUser9', 'Test', 'User', 'TestUser9@gmail.com', '$2a$10$DSpnxIMenCQswTAsaGfLl.IlcU7NYfoV/uBag4VyIvGE.sXMiy7j6', '2022-02-08 18:09:53.430', '2022-02-08 18:09:53.430')
ON CONFLICT DO NOTHING;
INSERT INTO user_entity
(id, username, first_name, last_name, email, "password", created_on, updated_on)
VALUES(10, 'TestUser10', 'Test', 'User', 'TestUser10@gmail.com', '$2a$10$jxD45dnxieN4nVLefWKGWOXKbLOzbKr2QS6ucy06p7XZFACak5Aki', '2022-02-08 18:10:15.147', '2022-02-08 18:10:15.147')
ON CONFLICT DO NOTHING;

INSERT INTO user_role_join
(user_id, role_id)
VALUES(1, 2)
ON CONFLICT DO NOTHING;
INSERT INTO user_role_join
(user_id, role_id)
VALUES(2, 2)
ON CONFLICT DO NOTHING;
INSERT INTO user_role_join
(user_id, role_id)
VALUES(3, 2)
ON CONFLICT DO NOTHING;
INSERT INTO user_role_join
(user_id, role_id)
VALUES(4, 2)
ON CONFLICT DO NOTHING;
INSERT INTO user_role_join
(user_id, role_id)
VALUES(5, 2)
ON CONFLICT DO NOTHING;
INSERT INTO user_role_join
(user_id, role_id)
VALUES(6, 2)
ON CONFLICT DO NOTHING;
INSERT INTO user_role_join
(user_id, role_id)
VALUES(7, 2)
ON CONFLICT DO NOTHING;
INSERT INTO user_role_join
(user_id, role_id)
VALUES(8, 2)
ON CONFLICT DO NOTHING;
INSERT INTO user_role_join
(user_id, role_id)
VALUES(9, 2)
ON CONFLICT DO NOTHING;
INSERT INTO user_role_join
(user_id, role_id)
VALUES(10, 2)
ON CONFLICT DO NOTHING;

INSERT INTO draft_entity
(id, "name", num_of_teams, roster_id, budget, on_the_block_timer, bid_timer, status_id, created_on, updated_on)
VALUES(1, 'Test Draft', 10, 1, 100, 20, 20, 3, '2022-02-06 19:39:59.195', '2022-02-16 13:03:49.265')
ON CONFLICT DO NOTHING;

INSERT INTO team_entity
(id, "name", type_id, budget, on_the_block, order_index, user_id, draft_id, status_id, created_on, updated_on)
VALUES(1, 'Test Team', 0, 100, true, 0, 1, 1, 0, '2022-02-06 19:39:59.211', '2022-02-16 12:37:32.193')
ON CONFLICT DO NOTHING;
INSERT INTO team_entity
(id, "name", type_id, budget, on_the_block, order_index, user_id, draft_id, status_id, created_on, updated_on)
VALUES(2, 'TestTeam2', 1, 100, false, 1, 2, 1, 0, '2022-02-08 18:06:41.409', '2022-02-16 12:37:31.684')
ON CONFLICT DO NOTHING;
INSERT INTO team_entity
(id, "name", type_id, budget, on_the_block, order_index, user_id, draft_id, status_id, created_on, updated_on)
VALUES(3, 'TestTeam3', 1, 100, false, 2, 3, 1, 0, '2022-02-08 18:07:10.032', '2022-02-16 12:37:31.859')
ON CONFLICT DO NOTHING;
INSERT INTO team_entity
(id, "name", type_id, budget, on_the_block, order_index, user_id, draft_id, status_id, created_on, updated_on)
VALUES(4, 'TestTeam4', 1, 100, false, 3, 4, 1, 0, '2022-02-08 18:07:47.322', '2022-02-16 12:37:32.070')
ON CONFLICT DO NOTHING;
INSERT INTO team_entity
(id, "name", type_id, budget, on_the_block, order_index, user_id, draft_id, status_id, created_on, updated_on)
VALUES(5, 'TestTeam5', 1, 100, false, 4, 5, 1, 0, '2022-02-08 18:08:14.516', '2022-02-16 12:37:32.209')
ON CONFLICT DO NOTHING;
INSERT INTO team_entity
(id, "name", type_id, budget, on_the_block, order_index, user_id, draft_id, status_id, created_on, updated_on)
VALUES(6, 'TestTeam6', 1, 100, false, 5, 6, 1, 0, '2022-02-08 18:08:49.248', '2022-02-16 12:42:24.981')
ON CONFLICT DO NOTHING;
INSERT INTO team_entity
(id, "name", type_id, budget, on_the_block, order_index, user_id, draft_id, status_id, created_on, updated_on)
VALUES(7, 'TestTeam7', 1, 100, false, 6, 7, 1, 0, '2022-02-08 18:09:17.195', '2022-02-16 12:43:05.050')
ON CONFLICT DO NOTHING;
INSERT INTO team_entity
(id, "name", type_id, budget, on_the_block, order_index, user_id, draft_id, status_id, created_on, updated_on)
VALUES(8, 'TestTeam8', 1, 100, false, 7, 8, 1, 0, '2022-02-08 18:09:38.771', '2022-02-16 12:43:05.056')
ON CONFLICT DO NOTHING;
INSERT INTO team_entity
(id, "name", type_id, budget, on_the_block, order_index, user_id, draft_id, status_id, created_on, updated_on)
VALUES(9, 'TestTeam9', 1, 100, false, 8, 9, 1, 0, '2022-02-08 18:09:59.508', '2022-02-16 12:37:31.407')
ON CONFLICT DO NOTHING;
INSERT INTO team_entity
(id, "name", type_id, budget, on_the_block, order_index, user_id, draft_id, status_id, created_on, updated_on)
VALUES(10, 'TestTeam10', 1, 100, false, 9, 10, 1, 0, '2022-02-08 18:10:20.413', '2022-02-16 12:37:31.477')
ON CONFLICT DO NOTHING;
