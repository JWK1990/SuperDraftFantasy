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
SELECT setval('team_player_join_entity_id_seq', (SELECT max(id) FROM team_player_join_entity));

-- INSERT INITIAL TEST DATA.
INSERT INTO user_entity
(id, username, first_name, last_name, email, "password", created_on, updated_on)
VALUES(1, 'Sam W', 'Sam', 'W', '5318008@gmail.com', '$2a$10$zAslZL1zop1PcWkCrdIU0u5r7yR/0twEyTmt/ut4qIj2tyFKcxTLi', '2022-02-02 10:18:56.636', '2022-02-02 10:18:56.637')
ON CONFLICT DO NOTHING;
INSERT INTO user_entity
(id, username, first_name, last_name, email, "password", created_on, updated_on)
VALUES(2, 'Thomas M', 'Thomas', 'M', 'MazMissesRicho@gmail.com', '$2a$10$zAslZL1zop1PcWkCrdIU0u5r7yR/0twEyTmt/ut4qIj2tyFKcxTLi', '2022-02-03 18:34:05.366', '2022-02-03 18:34:05.367')
ON CONFLICT DO NOTHING;
INSERT INTO user_entity
(id, username, first_name, last_name, email, "password", created_on, updated_on)
VALUES(3, 'George P', 'George', 'P', 'TheBackPockets@gmail.com', '$2a$10$zAslZL1zop1PcWkCrdIU0u5r7yR/0twEyTmt/ut4qIj2tyFKcxTLi', '2022-02-08 18:07:02.892', '2022-02-08 18:07:02.892')
ON CONFLICT DO NOTHING;
INSERT INTO user_entity
(id, username, first_name, last_name, email, "password", created_on, updated_on)
VALUES(4, 'Alistair P', 'Alistair', 'P', 'TheSituation@gmail.com', '$2a$10$zAslZL1zop1PcWkCrdIU0u5r7yR/0twEyTmt/ut4qIj2tyFKcxTLi', '2022-02-08 18:07:39.718', '2022-02-08 18:07:39.718')
ON CONFLICT DO NOTHING;
INSERT INTO user_entity
(id, username, first_name, last_name, email, "password", created_on, updated_on)
VALUES(5, 'Ben B', 'Ben', 'B', 'Silverbacks@gmail.com', '$2a$10$zAslZL1zop1PcWkCrdIU0u5r7yR/0twEyTmt/ut4qIj2tyFKcxTLi', '2022-02-08 18:08:06.829', '2022-02-08 18:08:06.829')
ON CONFLICT DO NOTHING;
INSERT INTO user_entity
(id, username, first_name, last_name, email, "password", created_on, updated_on)
VALUES(6, 'Hayden M', 'Hayden', 'M', 'Juddstar@gmail.com', '$2a$10$5yMa2AAGwXGCGY5VsShKf.nMLAQ/P2jkzcMGdkDApEnjiCS/umTFO', '2022-02-08 18:08:40.485', '2022-02-08 18:08:40.485')
ON CONFLICT DO NOTHING;
INSERT INTO user_entity
(id, username, first_name, last_name, email, "password", created_on, updated_on)
VALUES(7, 'Tom P', 'Tom', 'P', 'TreeOfLife@gmail.com', '$2a$10$zAslZL1zop1PcWkCrdIU0u5r7yR/0twEyTmt/ut4qIj2tyFKcxTLi', '2022-02-08 18:09:10.375', '2022-02-08 18:09:10.375')
ON CONFLICT DO NOTHING;
INSERT INTO user_entity
(id, username, first_name, last_name, email, "password", created_on, updated_on)
VALUES(8, 'Jarrod M', 'Jarrod', 'M', 'SuperMaalioBros@gmail.com', '$2a$10$zAslZL1zop1PcWkCrdIU0u5r7yR/0twEyTmt/ut4qIj2tyFKcxTLi', '2022-02-08 18:09:32.889', '2022-02-08 18:09:32.889')
ON CONFLICT DO NOTHING;
INSERT INTO user_entity
(id, username, first_name, last_name, email, "password", created_on, updated_on)
VALUES(9, 'Alec B', 'Alec', 'B', 'DonTheSash@gmail.com', '$2a$10$zAslZL1zop1PcWkCrdIU0u5r7yR/0twEyTmt/ut4qIj2tyFKcxTLi', '2022-02-08 18:09:53.430', '2022-02-08 18:09:53.430')
ON CONFLICT DO NOTHING;
INSERT INTO user_entity
(id, username, first_name, last_name, email, "password", created_on, updated_on)
VALUES(10, 'Josh K', 'Josh', 'K', 'ThePeptidePimps@gmail.com', '$2a$10$zAslZL1zop1PcWkCrdIU0u5r7yR/0twEyTmt/ut4qIj2tyFKcxTLi', '2022-02-08 18:10:15.147', '2022-02-08 18:10:15.147')
ON CONFLICT DO NOTHING;
INSERT INTO user_entity
(id, username, first_name, last_name, email, "password", created_on, updated_on)
VALUES(11, 'Lachlan M', 'Lachlan', 'M', 'Lachtioneers@gmail.com', '$2a$10$zAslZL1zop1PcWkCrdIU0u5r7yR/0twEyTmt/ut4qIj2tyFKcxTLi', '2022-02-08 18:10:15.147', '2022-02-08 18:10:15.147')
ON CONFLICT DO NOTHING;
INSERT INTO user_entity
(id, username, first_name, last_name, email, "password", created_on, updated_on)
VALUES(12, 'Mark H', 'Mark', 'H', 'GiftsOfGirth@gmail.com', '$2a$10$zAslZL1zop1PcWkCrdIU0u5r7yR/0twEyTmt/ut4qIj2tyFKcxTLi', '2022-02-08 18:10:15.147', '2022-02-08 18:10:15.147')
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
VALUES(1, 'WAFL X', 10, 1, 300, 20, 10, 3, '2022-02-06 19:39:59.195', '2022-02-16 13:03:49.265')
ON CONFLICT DO NOTHING;
INSERT INTO draft_entity
(id, "name", num_of_teams, roster_id, budget, on_the_block_timer, bid_timer, status_id, created_on, updated_on)
VALUES(2, 'Draft To Hold Additional Teams', 2, 1, 300, 20, 10, 1, '2022-02-06 19:39:59.195', '2022-02-16 13:03:49.265')
ON CONFLICT DO NOTHING;
INSERT INTO draft_entity
(id, "name", num_of_teams, roster_id, budget, on_the_block_timer, bid_timer, status_id, created_on, updated_on)
VALUES(3, 'WAFL X - Test', 10, 1, 300, 20, 10, 3, '2022-02-06 19:39:59.195', '2022-02-16 13:03:49.265')
ON CONFLICT DO NOTHING;

INSERT INTO team_entity
(id, "name", type_id, budget, on_the_block, order_index, user_id, draft_id, status_id, created_on, updated_on)
VALUES(1, '5318008', 1, 300, true, 4, 1, 1, 0, '2022-02-06 19:39:59.211', '2022-02-16 12:37:32.193')
ON CONFLICT DO NOTHING;
INSERT INTO team_entity
(id, "name", type_id, budget, on_the_block, order_index, user_id, draft_id, status_id, created_on, updated_on)
VALUES(2, 'Maz Misses Richo', 1, 299, false, 2, 2, 1, 0, '2022-02-08 18:06:41.409', '2022-02-16 12:37:31.684')
ON CONFLICT DO NOTHING;
INSERT INTO team_entity
(id, "name", type_id, budget, on_the_block, order_index, user_id, draft_id, status_id, created_on, updated_on)
VALUES(3, 'The Back Pockets', 1, 294, false, 1, 3, 1, 0, '2022-02-08 18:07:10.032', '2022-02-16 12:37:31.859')
ON CONFLICT DO NOTHING;
INSERT INTO team_entity
(id, "name", type_id, budget, on_the_block, order_index, user_id, draft_id, status_id, created_on, updated_on)
VALUES(4, 'The Situation', 1, 297, false, 3, 4, 1, 0, '2022-02-08 18:07:47.322', '2022-02-16 12:37:32.070')
ON CONFLICT DO NOTHING;
INSERT INTO team_entity
(id, "name", type_id, budget, on_the_block, order_index, user_id, draft_id, status_id, created_on, updated_on)
VALUES(5, 'Silverbacks', 1, 300, false, 5, 5, 1, 0, '2022-02-08 18:08:14.516', '2022-02-16 12:37:32.209')
ON CONFLICT DO NOTHING;
INSERT INTO team_entity
(id, "name", type_id, budget, on_the_block, order_index, user_id, draft_id, status_id, created_on, updated_on)
VALUES(6, 'Juddstar', 1, 300, false, 6, 6, 1, 0, '2022-02-08 18:08:49.248', '2022-02-16 12:42:24.981')
ON CONFLICT DO NOTHING;
INSERT INTO team_entity
(id, "name", type_id, budget, on_the_block, order_index, user_id, draft_id, status_id, created_on, updated_on)
VALUES(7, 'Tree Of Life', 1, 287, false, 0, 7, 1, 0, '2022-02-08 18:09:17.195', '2022-02-16 12:43:05.050')
ON CONFLICT DO NOTHING;
INSERT INTO team_entity
(id, "name", type_id, budget, on_the_block, order_index, user_id, draft_id, status_id, created_on, updated_on)
VALUES(8, 'Super Maalio Bros', 1, 300, false, 7, 8, 1, 0, '2022-02-08 18:09:38.771', '2022-02-16 12:43:05.056')
ON CONFLICT DO NOTHING;
INSERT INTO team_entity
(id, "name", type_id, budget, on_the_block, order_index, user_id, draft_id, status_id, created_on, updated_on)
VALUES(9, 'Don The Sash', 1, 300, false, 8, 9, 1, 0, '2022-02-08 18:09:59.508', '2022-02-16 12:37:31.407')
ON CONFLICT DO NOTHING;
INSERT INTO team_entity
(id, "name", type_id, budget, on_the_block, order_index, user_id, draft_id, status_id, created_on, updated_on)
VALUES(10, 'The Peptide Pimps', 0, 300, false, 9, 10, 1, 0, '2022-02-08 18:10:20.413', '2022-02-16 12:37:31.477')
ON CONFLICT DO NOTHING;

INSERT INTO team_entity
(id, "name", type_id, budget, on_the_block, order_index, user_id, draft_id, status_id, created_on, updated_on)
VALUES(11, 'Lachtioneers', 1, 300, true, 0, 11, 2, 0, '2022-02-08 18:09:59.508', '2022-02-16 12:37:31.407')
ON CONFLICT DO NOTHING;
INSERT INTO team_entity
(id, "name", type_id, budget, on_the_block, order_index, user_id, draft_id, status_id, created_on, updated_on)
VALUES(12, 'Gifts Of Girth', 0, 300, false, 1, 12, 2, 0, '2022-02-08 18:10:20.413', '2022-02-16 12:37:31.477')
ON CONFLICT DO NOTHING;

INSERT INTO team_entity
(id, "name", type_id, budget, on_the_block, order_index, user_id, draft_id, status_id, created_on, updated_on)
VALUES(13, '5318008', 1, 300, true, 4, 1, 3, 0, '2022-02-06 19:39:59.211', '2022-02-16 12:37:32.193')
ON CONFLICT DO NOTHING;
INSERT INTO team_entity
(id, "name", type_id, budget, on_the_block, order_index, user_id, draft_id, status_id, created_on, updated_on)
VALUES(14, 'Maz Misses Richo', 1, 299, false, 2, 2, 3, 0, '2022-02-08 18:06:41.409', '2022-02-16 12:37:31.684')
ON CONFLICT DO NOTHING;
INSERT INTO team_entity
(id, "name", type_id, budget, on_the_block, order_index, user_id, draft_id, status_id, created_on, updated_on)
VALUES(15, 'The Back Pockets', 1, 294, false, 1, 3, 3, 0, '2022-02-08 18:07:10.032', '2022-02-16 12:37:31.859')
ON CONFLICT DO NOTHING;
INSERT INTO team_entity
(id, "name", type_id, budget, on_the_block, order_index, user_id, draft_id, status_id, created_on, updated_on)
VALUES(16, 'The Situation', 1, 297, false, 3, 4, 3, 0, '2022-02-08 18:07:47.322', '2022-02-16 12:37:32.070')
ON CONFLICT DO NOTHING;
INSERT INTO team_entity
(id, "name", type_id, budget, on_the_block, order_index, user_id, draft_id, status_id, created_on, updated_on)
VALUES(17, 'Silverbacks', 1, 300, false, 5, 5, 3, 0, '2022-02-08 18:08:14.516', '2022-02-16 12:37:32.209')
ON CONFLICT DO NOTHING;
INSERT INTO team_entity
(id, "name", type_id, budget, on_the_block, order_index, user_id, draft_id, status_id, created_on, updated_on)
VALUES(18, 'Juddstar', 1, 300, false, 6, 6, 3, 0, '2022-02-08 18:08:49.248', '2022-02-16 12:42:24.981')
ON CONFLICT DO NOTHING;
INSERT INTO team_entity
(id, "name", type_id, budget, on_the_block, order_index, user_id, draft_id, status_id, created_on, updated_on)
VALUES(19, 'Tree Of Life', 1, 287, false, 0, 7, 3, 0, '2022-02-08 18:09:17.195', '2022-02-16 12:43:05.050')
ON CONFLICT DO NOTHING;
INSERT INTO team_entity
(id, "name", type_id, budget, on_the_block, order_index, user_id, draft_id, status_id, created_on, updated_on)
VALUES(20, 'Super Maalio Bros', 1, 300, false, 7, 8, 3, 0, '2022-02-08 18:09:38.771', '2022-02-16 12:43:05.056')
ON CONFLICT DO NOTHING;
INSERT INTO team_entity
(id, "name", type_id, budget, on_the_block, order_index, user_id, draft_id, status_id, created_on, updated_on)
VALUES(21, 'Don The Sash', 1, 300, false, 8, 9, 3, 0, '2022-02-08 18:09:59.508', '2022-02-16 12:37:31.407')
ON CONFLICT DO NOTHING;
INSERT INTO team_entity
(id, "name", type_id, budget, on_the_block, order_index, user_id, draft_id, status_id, created_on, updated_on)
VALUES(22, 'The Peptide Pimps', 0, 300, false, 9, 10, 3, 0, '2022-02-08 18:10:20.413', '2022-02-16 12:37:31.477')
ON CONFLICT DO NOTHING;

/* INSERT KEEPERS. */
INSERT INTO team_player_join_entity
(id, team_id, player_id, price, my_team_position_id, purchase_review_rating, price_difference, slot_id)
VALUES(1, 7, 141, 13, 4, NULL, NULL, 'FWD0')
ON CONFLICT DO NOTHING;
INSERT INTO team_player_join_entity
(id, team_id, player_id, price, my_team_position_id, purchase_review_rating, price_difference, slot_id)
VALUES(2, 3, 108, 6, 2, NULL, NULL, 'MID0')
ON CONFLICT DO NOTHING;
INSERT INTO team_player_join_entity
(id, team_id, player_id, price, my_team_position_id, purchase_review_rating, price_difference, slot_id)
VALUES(3, 2, 175, 1, 1, NULL, NULL, 'DEF0')
ON CONFLICT DO NOTHING;
INSERT INTO team_player_join_entity
(id, team_id, player_id, price, my_team_position_id, purchase_review_rating, price_difference, slot_id)
VALUES(4, 4, 231, 3, 2, NULL, 3, 'MID0')
ON CONFLICT DO NOTHING;

INSERT INTO team_player_join_entity
(id, team_id, player_id, price, my_team_position_id, purchase_review_rating, price_difference, slot_id)
VALUES(5, 19, 141, 13, 4, NULL, NULL, 'FWD0')
ON CONFLICT DO NOTHING;
INSERT INTO team_player_join_entity
(id, team_id, player_id, price, my_team_position_id, purchase_review_rating, price_difference, slot_id)
VALUES(6, 15, 108, 6, 2, NULL, NULL, 'MID0')
ON CONFLICT DO NOTHING;
INSERT INTO team_player_join_entity
(id, team_id, player_id, price, my_team_position_id, purchase_review_rating, price_difference, slot_id)
VALUES(7, 14, 175, 1, 1, NULL, NULL, 'DEF0')
ON CONFLICT DO NOTHING;
INSERT INTO team_player_join_entity
(id, team_id, player_id, price, my_team_position_id, purchase_review_rating, price_difference, slot_id)
VALUES(8, 16, 231, 3, 2, NULL, 3, 'MID0')
ON CONFLICT DO NOTHING;

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
SELECT setval('team_player_join_entity_id_seq', (SELECT max(id) FROM team_player_join_entity));
