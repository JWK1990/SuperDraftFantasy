-- UPDATE THE SEQUENCES.
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
