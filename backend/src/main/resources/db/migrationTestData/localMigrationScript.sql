INSERT INTO user_entity
(id, first_name, last_name, email, username, password, created_on, updated_on)
    VALUES(1, 'First', 'User', 'firstuser@gmail.com', 'firstuser', 'password', '2019-12-09 13:14:39.007', '2019-12-09 13:14:39.009');

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
SELECT setval('user_entity_id_seq', (SELECT max(id) FROM user_entity));
SELECT setval('draft_entity_id_seq', (SELECT max(id) FROM draft_entity));
SELECT setval('player_entity_id_seq', (SELECT max(id) FROM player_entity));
SELECT setval('coach_type_enum_id_seq', (SELECT max(id) FROM coach_type_enum));
SELECT setval('coach_entity_id_seq', (SELECT max(id) FROM coach_entity));