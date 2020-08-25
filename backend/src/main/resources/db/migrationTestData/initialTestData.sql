INSERT INTO user_entity
(id, username, first_name, last_name, email, "password", created_on, updated_on)
VALUES(1, 'username', 'First', 'User', 'testuser1@gmail.com', '$2a$10$vTLOnz3AMO6hY6.mDDAOFOZniD237VrzRaUuAhSRyOJL/SWBjPEXy', '2020-08-25 10:06:07.380', '2020-08-25 10:06:07.382');

INSERT INTO user_role_join
(user_id, role_id)
VALUES(1, 2);

INSERT INTO team_entity
(id, "name", type_id, budget, on_the_block, user_id, draft_id, created_on, updated_on)
VALUES(1, 'Default Name', 0, 100, false, 1, 1, '2020-08-25 10:06:35.091', '2020-08-25 10:06:35.091');

INSERT INTO draft_entity
(id, "name", num_of_teams, roster_id, budget, on_the_block_timer, bid_timer, status_id, created_on, updated_on)
VALUES(1, 'Test Draft 14', 5, 2, 100, 10, 5, 0, '2020-08-25 10:06:35.088', '2020-08-25 10:06:35.088');
