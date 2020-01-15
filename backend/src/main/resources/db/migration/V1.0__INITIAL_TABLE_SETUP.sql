CREATE TABLE user_entity (
    id BIGSERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_on TIMESTAMP NOT NULL,
    updated_on TIMESTAMP NOT NULL
);

CREATE TABLE role_entity (
    id BIGSERIAL PRIMARY KEY,
    type VARCHAR(255) NOT NULL
);

CREATE TABLE privilege_entity (
    id BIGSERIAL PRIMARY KEY,
    type VARCHAR(255) NOT NULL
);

CREATE TABLE role_privilege_join (
    role_id INT,
    privilege_id INT,

    CONSTRAINT fk_role_id FOREIGN KEY (role_id) REFERENCES role_entity(id),
    CONSTRAINT fk_privilege_id FOREIGN KEY (privilege_id) REFERENCES privilege_entity(id)
);

CREATE TABLE user_role_join (
    user_id INT,
    role_id INT,

    CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES user_entity(id),
    CONSTRAINT fk_role_id FOREIGN KEY (role_id) REFERENCES role_entity(id)
);

CREATE TABLE draft_entity (
    id BIGSERIAL,
    name VARCHAR(255) NOT NULL,
    num_of_teams INT NOT NULL,
    roster_type VARCHAR(255) NOT NULL,
    budget INT NOT NULL,
    created_on TIMESTAMP NOT NULL,
    updated_on TIMESTAMP NOT NULL,

    CONSTRAINT pk_draft_entity PRIMARY KEY(id)
);

CREATE TABLE coach_type_enum (
    id BIGSERIAL PRIMARY KEY,
    type varchar NOT NULL
);

CREATE TABLE coach_entity (
    id BIGSERIAL,
    type_id INT NOT NULL,
    user_id INT NOT NULL,
    draft_id INT,
    created_on TIMESTAMP NOT NULL,
    updated_on TIMESTAMP NOT NULL,

    CONSTRAINT pk_coach_entity PRIMARY KEY(id),
    CONSTRAINT fk_type_id FOREIGN KEY(type_id) REFERENCES coach_type_enum(id),
    CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES user_entity(id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_draft_id FOREIGN KEY (draft_id) REFERENCES draft_entity(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE team_entity (
    coach_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    budget INT NOT NULL,
    created_on TIMESTAMP NOT NULL,
    updated_on TIMESTAMP NOT NULL,

    CONSTRAINT pk_team_entity PRIMARY KEY(coach_id),
    CONSTRAINT fk_team_entity FOREIGN KEY (coach_id) REFERENCES coach_entity(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE afl_teams_enum (
    id BIGSERIAL PRIMARY KEY,
    aflTeam varchar NOT NULL
);

CREATE TABLE player_entity (
    id BIGSERIAL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    afl_team_id INT,
    average INT,

    CONSTRAINT pk_player_entity PRIMARY KEY(id),
    CONSTRAINT fk_afl_team_id FOREIGN KEY (afl_team_id) REFERENCES afl_teams_enum(id)
);

CREATE TABLE team_entity_player_entity (
    team_entity_id INT,
    player_entity_id INT,

    CONSTRAINT fk_team_entity_id FOREIGN KEY (team_entity_id) REFERENCES team_entity(coach_id),
    CONSTRAINT fk_player_entity_id FOREIGN KEY (player_entity_id) REFERENCES player_entity(id)
);


