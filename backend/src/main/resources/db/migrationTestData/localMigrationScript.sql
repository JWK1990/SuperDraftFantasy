INSERT INTO user_entity
(id, username, first_name, last_name, email, created_on, updated_on)
    VALUES(1, 'firstuser', 'First', 'User', 'firstuser@gmail.com', '2019-12-09 13:14:39.007', '2019-12-09 13:14:39.009');

INSERT INTO draft_entity
(id, "name", num_of_teams, roster_type, budget, created_on, updated_on)
    VALUES(1, 'First Draft', 10, 'DEFAULT', 300, '2019-12-09 14:11:28.906', '2019-12-09 14:11:28.908');

INSERT INTO team_entity
(id, "name", budget, created_on, updated_on)
    VALUES(1, 'First Team', 300, '2019-12-09 14:19:07.362', '2019-12-09 14:19:07.362');

INSERT INTO role_entity
(id, type_id, user_id, draft_id, team, created_on, updated_on)
    VALUES(1, 2, 1, 1, 1, '2019-12-09 14:11:28.971', '2019-12-09 14:11:28.971');

INSERT INTO team_entity_player_entity
(team_entity_id, player_entity_id)
    VALUES(1, 1)