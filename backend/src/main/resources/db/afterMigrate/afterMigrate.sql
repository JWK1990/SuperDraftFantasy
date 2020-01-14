-- update the sequences
SELECT setval('user_entity_id_seq', (SELECT max(id) FROM user_entity));
SELECT setval('draft_entity_id_seq', (SELECT max(id) FROM draft_entity));
SELECT setval('player_entity_id_seq', (SELECT max(id) FROM player_entity));
SELECT setval('coach_type_enum_id_seq', (SELECT max(id) FROM coach_type_enum));
SELECT setval('coach_entity_id_seq', (SELECT max(id) FROM coach_entity));