-- update the sequences
SELECT setval('user_entity_id_seq', (SELECT max(id) FROM user_entity));
SELECT setval('draft_entity_id_seq', (SELECT max(id) FROM draft_entity));
SELECT setval('team_entity_id_seq', (SELECT max(id) FROM team_entity));
SELECT setval('player_entity_id_seq', (SELECT max(id) FROM player_entity));
SELECT setval('role_type_enum_id_seq', (SELECT max(id) FROM role_type_enum));
SELECT setval('role_entity_id_seq', (SELECT max(id) FROM role_entity));