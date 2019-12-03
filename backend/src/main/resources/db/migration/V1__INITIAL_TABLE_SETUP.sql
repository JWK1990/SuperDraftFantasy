CREATE TABLE user_entity (
    id BIGSERIAL,
    username VARCHAR(255) NOT NULL UNIQUE,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    created_on TIMESTAMP NOT NULL,
    updated_on TIMESTAMP NOT NULL,

    CONSTRAINT pk_user_entity PRIMARY KEY(id)
);

CREATE TABLE draft_entity (
    id BIGSERIAL,
    name VARCHAR(255) NOT NULL,
    num_of_teams INT NOT NULL,
    roster_type INT NOT NULL,
    budget INT NOT NULL,
    created_on TIMESTAMP NOT NULL,
    updated_on TIMESTAMP NOT NULL,

    CONSTRAINT pk_draft_entity PRIMARY KEY(id)
);

CREATE TABLE team_entity (
    id BIGSERIAL,
    name VARCHAR(255) NOT NULL,
    budget INT NOT NULL,
    user_id INT NOT NULL,
    draft_id INT NOT NULL,
    created_on DATE NOT NULL,
    updated_on TIMESTAMP NOT NULL,

    CONSTRAINT pk_team_entity PRIMARY KEY(id),
    CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES user_entity(id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_draft_id FOREIGN KEY (draft_id) REFERENCES draft_entity(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE player_entity (
    id BIGSERIAL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    football_team INT,
    average INT,

    CONSTRAINT pk_player_entity PRIMARY KEY(id)
);

CREATE TABLE team_entity_player_entity (
    team_entity_id INT,
    player_entity_id INT,

    CONSTRAINT fk_team_entity_id FOREIGN KEY (team_entity_id) REFERENCES team_entity(id),
    CONSTRAINT fk_player_entity_id FOREIGN KEY (player_entity_id) REFERENCES player_entity(id)
);


