-- INSERT INITIAL USERS.
INSERT INTO user_entity
(id, username, first_name, last_name, email, "password", created_on, updated_on)
VALUES(1, 'username', 'First', 'User', 'testuser1@gmail.com', '$2a$10$DUEW07fw.jKmhK4DzmfVJ.m647ISFj2Kbz8WOb7kWRzu1jg1UWw.2', '2020-09-08 18:30:09.822', '2020-09-08 18:30:09.824');
INSERT INTO user_entity
(id, username, first_name, last_name, email, "password", created_on, updated_on)
VALUES(2, 'username2', 'First', 'User', 'testuser2@gmail.com', '$2a$10$q4Yzm52ZlXgk8jiluiODX.R806YMJc.gB7Psd67YynH3pSiOMuC.K', '2020-09-08 18:31:58.963', '2020-09-08 18:31:58.963');
INSERT INTO user_entity
(id, username, first_name, last_name, email, "password", created_on, updated_on)
VALUES(3, 'username3', 'First', 'User', 'testuser3@gmail.com', '$2a$10$/Qp0wy/bn92txrnRdDosjut.OaDvtlglmXhQkuqFO2IR5WPcRI16W', '2020-09-08 18:44:20.690', '2020-09-08 18:44:20.690');
INSERT INTO user_entity
(id, username, first_name, last_name, email, "password", created_on, updated_on)
VALUES(4, 'username4', 'First', 'User', 'testuser4@gmail.com', '$2a$10$FSE4O919f8BfGGBoUyjef.rlAsBnZslpisUKGM4/y7xk9xZWcHw.2', '2020-09-08 18:45:51.060', '2020-09-08 18:45:51.061');
INSERT INTO user_entity
(id, username, first_name, last_name, email, "password", created_on, updated_on)
VALUES(5, 'username5', 'First', 'User', 'testuser5@gmail.com', '$2a$10$1V/mVg0ToRFWDB4FSbgIseTGCSCsjNq3oAM2yMakMiSnX.cS45WCC', '2020-09-11 18:21:38.644', '2020-09-11 18:21:38.644');

-- INSERT INITIAL USER ROLES.
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

-- INSERT INITIAL DRAFT.
INSERT INTO draft_entity
(id, "name", num_of_teams, roster_id, budget, on_the_block_timer, bid_timer, status_id, created_on, updated_on)
VALUES(1, 'Test Draft 1', 5, 2, 100, 10, 10, 0, '2020-09-11 18:19:47.794', '2020-09-11 18:19:47.795');

-- INSERT INITIAL TEAMS.
INSERT INTO team_entity
(id, "name", type_id, budget, on_the_block, order_index, user_id, draft_id, created_on, updated_on)
VALUES(1, 'Default Name', 0, 100, true, 0, 1, 2, '2020-09-11 18:19:47.806', '2020-09-11 18:19:47.806');
INSERT INTO team_entity
(id, "name", type_id, budget, on_the_block, order_index, user_id, draft_id, created_on, updated_on)
VALUES(2, 'username2''s Team', 1, 100, false, 1, 2, 2, '2020-09-11 18:20:40.813', '2020-09-11 18:20:40.813');
INSERT INTO team_entity
(id, "name", type_id, budget, on_the_block, order_index, user_id, draft_id, created_on, updated_on)
VALUES(3, 'username3''s Team', 1, 100, false, 2, 3, 2, '2020-09-11 18:21:03.845', '2020-09-11 18:21:03.845');
INSERT INTO team_entity
(id, "name", type_id, budget, on_the_block, order_index, user_id, draft_id, created_on, updated_on)
VALUES(4, 'username4''s Team', 1, 100, false, 3, 4, 2, '2020-09-11 18:21:22.452', '2020-09-11 18:21:22.452');
INSERT INTO team_entity
(id, "name", type_id, budget, on_the_block, order_index, user_id, draft_id, created_on, updated_on)
VALUES(5, 'username5''s Team', 1, 100, false, 4, 5, 2, '2020-09-11 18:21:50.968', '2020-09-11 18:21:50.969');
