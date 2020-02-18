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

CREATE TABLE roster_entity (
    id INT PRIMARY KEY,
    type VARCHAR(255) NOT NULL,
    defenders INT,
    midfielders INT,
    rucks INT,
    forwards INT,
    bench INT
);

CREATE TABLE draft_status_enum (
    id BIGSERIAL PRIMARY KEY,
    status varchar NOT NULL
);

CREATE TABLE draft_entity (
    id BIGSERIAL,
    name VARCHAR(255) NOT NULL,
    num_of_teams INT NOT NULL,
    roster_id INT NOT NULL,
    budget INT NOT NULL,
    status_id INT NOT NULL,
    created_on TIMESTAMP NOT NULL,
    updated_on TIMESTAMP NOT NULL,

    CONSTRAINT pk_draft_entity PRIMARY KEY(id),
    CONSTRAINT fk_roster_id FOREIGN KEY(roster_id) REFERENCES roster_entity(id),
    CONSTRAINT fk_status_id FOREIGN KEY(status_id) REFERENCES draft_status_enum(id)
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
    CONSTRAINT fk_user_id FOREIGN KEY(user_id) REFERENCES user_entity(id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_draft_id FOREIGN KEY(draft_id) REFERENCES draft_entity(id) ON DELETE CASCADE ON UPDATE CASCADE
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

CREATE TABLE position_entity (
    id BIGSERIAL PRIMARY KEY,
    type varchar NOT NULL
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

CREATE TABLE player_position_join (
    player_id INT,
    position_id INT,

    CONSTRAINT fk_player_id FOREIGN KEY (player_id) REFERENCES player_entity(id),
    CONSTRAINT fk_position_id FOREIGN KEY (position_id) REFERENCES position_entity(id)
);

CREATE TABLE team_player_join (
    team_id INT,
    player_id INT,

    CONSTRAINT fk_team_id FOREIGN KEY (team_id) REFERENCES team_entity(coach_id),
    CONSTRAINT fk_player_id FOREIGN KEY (player_id) REFERENCES player_entity(id)
);


