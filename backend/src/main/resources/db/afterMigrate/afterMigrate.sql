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

-- INSERT INITIAL USER DATA.
INSERT INTO user_entity
(id, username, first_name, last_name, email, "password", created_on, updated_on)
VALUES(1, 'admin', 'Admin', 'User', 'admin@gmail.com', '$2a$10$.DRxrd92FaVqXG.QiBu.NuEDfUCDdOEfByiknoHQWhrfeY9ujTzMi', '2020-03-02 11:39:54.788', '2020-03-02 11:39:54.790');
INSERT INTO user_entity
(id, username, first_name, last_name, email, "password", created_on, updated_on)
VALUES(2, 'user2', 'Second', 'User', 'user2@gmail.com', '$2a$10$nCn/mX6u3ptNEQCGiRuKfeWX2Pp29ViXWD/RyFB9dfiV1XuYT0mq2', '2020-03-02 11:40:31.190', '2020-03-02 11:40:31.190');
INSERT INTO user_entity
(id, username, first_name, last_name, email, "password", created_on, updated_on)
VALUES(3, 'user3', 'Third', 'User', 'user3@gmail.com', '$2a$10$QrRY1//EMD/2QS5VuxC8UeG.52azWLn7ps0JeHj0A.7Bi1zrHYN4e', '2020-03-02 11:40:41.235', '2020-03-02 11:40:41.235');
INSERT INTO user_entity
(id, username, first_name, last_name, email, "password", created_on, updated_on)
VALUES(4, 'user4', 'Fourth', 'User', 'user4@gmail.com', '$2a$10$bPZkGwkk.iyqfqdHwLIcK.W0eCnZl9l6Lq22xglCGNv8r9pY5dsQO', '2020-03-02 11:40:49.479', '2020-03-02 11:40:49.479');
INSERT INTO user_entity
(id, username, first_name, last_name, email, "password", created_on, updated_on)
VALUES(5, 'user5', 'Fifth', 'User', 'user5@gmail.com', '$2a$10$XCdCPV72zyDo6HTJ8QILFepk3v1q1ZvfHY.wv/uZu.vWxzwXWeEJ6', '2020-03-02 11:40:59.012', '2020-03-02 11:40:59.012');

-- INSERT INITIAL USER ROLE DATA.
INSERT INTO user_role_join
(user_id, role_id)
VALUES(1, 2);
INSERT INTO user_role_join
(user_id, role_id)
VALUES(2, 2);
INSERT INTO user_role_join
(user_id, role_id)
VALUES(3, 2);
INSERT INTO user_role_join
(user_id, role_id)
VALUES(4, 2);
INSERT INTO user_role_join
(user_id, role_id)
VALUES(5, 2);

-- INSERT INITIAL DRAFT DATA.
INSERT INTO draft_entity
(id, "name", num_of_teams, roster_id, budget, on_the_block_timer, bid_timer, status_id, created_on, updated_on)
VALUES(1, 'Test Draft 1', 5, 2, 20, 10, 5, 0, '2020-03-02 11:42:34.178', '2020-03-02 11:42:34.178');

-- INSERT INITIAL COACH DATA.
INSERT INTO coach_entity
(id, type_id, user_id, draft_id, created_on, updated_on)
VALUES(1, 0, 1, 1, '2020-03-02 11:42:34.181', '2020-03-02 11:42:34.181');
INSERT INTO coach_entity
(id, type_id, user_id, draft_id, created_on, updated_on)
VALUES(2, 1, 2, 1, '2020-03-02 11:43:16.628', '2020-03-02 11:43:16.628');
INSERT INTO coach_entity
(id, type_id, user_id, draft_id, created_on, updated_on)
VALUES(3, 1, 3, 1, '2020-03-02 11:43:38.391', '2020-03-02 11:43:38.391');
INSERT INTO coach_entity
(id, type_id, user_id, draft_id, created_on, updated_on)
VALUES(4, 1, 4, 1, '2020-03-02 11:43:54.932', '2020-03-02 11:43:54.932');
INSERT INTO coach_entity
(id, type_id, user_id, draft_id, created_on, updated_on)
VALUES(5, 1, 5, 1, '2020-03-02 11:44:10.020', '2020-03-02 11:44:10.020');

-- INSERT INITIAL TEAM DATA.
INSERT INTO team_entity
(coach_id, "name", budget, created_on, updated_on)
VALUES(1, 'Default Name', 20, '2020-03-02 11:42:34.187', '2020-03-02 11:42:34.187');
INSERT INTO team_entity
(coach_id, "name", budget, created_on, updated_on)
VALUES(2, 'user2''s Team', 20, '2020-03-02 11:43:16.631', '2020-03-02 11:43:16.632');
INSERT INTO team_entity
(coach_id, "name", budget, created_on, updated_on)
VALUES(3, 'user3''s Team', 20, '2020-03-02 11:43:38.394', '2020-03-02 11:43:38.394');
INSERT INTO team_entity
(coach_id, "name", budget, created_on, updated_on)
VALUES(4, 'user4''s Team', 20, '2020-03-02 11:43:54.941', '2020-03-02 11:43:54.941');
INSERT INTO team_entity
(coach_id, "name", budget, created_on, updated_on)
VALUES(5, 'user5''s Team', 20, '2020-03-02 11:44:10.024', '2020-03-02 11:44:10.024');

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