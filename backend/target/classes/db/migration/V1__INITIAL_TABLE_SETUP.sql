CREATE TABLE sd_user (
    id BIGSERIAL,
    username VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,

    CONSTRAINT pk_sd_user PRIMARY KEY(id)
);

CREATE TABLE draft (
    id BIGSERIAL,
    name VARCHAR(255) NOT NULL,
    num_of_teams INT NOT NULL,
    roster_type INT NOT NULL,
    budget INT NOT NULL,
    created_on DATE NOT NULL,

    CONSTRAINT pk_draft PRIMARY KEY(id)
);

CREATE TABLE team (
    id BIGSERIAL,
    name VARCHAR(255) NOT NULL,
    budget INT NOT NULL,
    created_on DATE NOT NULL,
    sd_user INT NOT NULL,
    draft INT NOT NULL,

    CONSTRAINT pk_team PRIMARY KEY(id),
    CONSTRAINT fk_sd_user FOREIGN KEY (sd_user) REFERENCES sd_user(id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_draft FOREIGN KEY (draft) REFERENCES draft(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE player (
    id BIGSERIAL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    football_team INT,
    average INT,

    CONSTRAINT pk_player PRIMARY KEY(id)
);

CREATE TABLE team_player (
    team_id INT,
    player_id INT,

    CONSTRAINT fk_team_id FOREIGN KEY (team_id) REFERENCES team(id),
    CONSTRAINT fk_player_id FOREIGN KEY (player_id) REFERENCES player(id)
);


