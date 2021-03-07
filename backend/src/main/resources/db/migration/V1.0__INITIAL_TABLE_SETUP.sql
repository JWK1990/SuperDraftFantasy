CREATE TABLE user_entity (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_on TIMESTAMP NOT NULL,
    updated_on TIMESTAMP NOT NULL
);

CREATE TABLE role_entity (
    id SERIAL PRIMARY KEY,
    type VARCHAR(255) NOT NULL
);

CREATE TABLE privilege_entity (
    id SERIAL PRIMARY KEY,
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
    id SMALLINT PRIMARY KEY,
    type VARCHAR(255) NOT NULL,
    DEF SMALLINT,
    MID SMALLINT,
    RUC SMALLINT,
    FWD SMALLINT,
    BENCH SMALLINT
);

CREATE TABLE draft_status_enum (
    id SERIAL PRIMARY KEY,
    status VARCHAR(255) NOT NULL
);

CREATE TABLE draft_entity (
    id SERIAL,
    name VARCHAR(255) NOT NULL,
    num_of_teams INT NOT NULL,
    roster_id INT NOT NULL,
    budget INT NOT NULL,
    on_the_block_timer INT NOT NULL,
    bid_timer INT NOT NULL,
    status_id INT NOT NULL,
    created_on TIMESTAMP NOT NULL,
    updated_on TIMESTAMP NOT NULL,

    CONSTRAINT pk_draft_entity PRIMARY KEY(id),
    CONSTRAINT fk_roster_id FOREIGN KEY(roster_id) REFERENCES roster_entity(id),
    CONSTRAINT fk_status_id FOREIGN KEY(status_id) REFERENCES draft_status_enum(id)
);

CREATE TABLE team_type_enum (
    id SERIAL PRIMARY KEY,
    type varchar NOT NULL
);

CREATE TABLE team_status_enum (
    id SERIAL PRIMARY KEY,
    status varchar NOT NULL
);

CREATE TABLE team_entity (
    id SERIAL,
    name VARCHAR(255) NOT NULL,
    type_id SMALLINT NOT NULL,
    budget SMALLINT NOT NULL,
    on_the_block BOOLEAN NOT NULL,
    order_index SMALLINT NOT NULL,
    user_id INT NOT NULL,
    draft_id INT,
    status_id SMALLINT NOT NULL,
    created_on TIMESTAMP NOT NULL,
    updated_on TIMESTAMP NOT NULL,

    CONSTRAINT pk_team_entity PRIMARY KEY(id),
    CONSTRAINT fk_team_type_id FOREIGN KEY(type_id) REFERENCES team_type_enum(id),
    CONSTRAINT fk_team_user_id FOREIGN KEY(user_id) REFERENCES user_entity(id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_team_draft_id FOREIGN KEY(draft_id) REFERENCES draft_entity(id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_team_status_id FOREIGN KEY(status_id) REFERENCES team_status_enum(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE afl_teams_enum (
    id SERIAL PRIMARY KEY,
    aflTeam varchar NOT NULL
);

CREATE TABLE position_entity (
    id SERIAL PRIMARY KEY,
    type varchar NOT NULL
);

CREATE TABLE player_entity (
    id SERIAL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,

    CONSTRAINT pk_player_entity PRIMARY KEY(id)
);

CREATE TABLE player_position_join (
    player_id INT,
    position_id SMALLINT,

    CONSTRAINT fk_player_id FOREIGN KEY (player_id) REFERENCES player_entity(id),
    CONSTRAINT fk_position_id FOREIGN KEY (position_id) REFERENCES position_entity(id)
);

CREATE TABLE season_summary_entity (
     id SERIAL,
     player_id SMALLINT,
     afl_team_id SMALLINT,
     year SMALLINT,
     games SMALLINT,
     average DECIMAL(4,1),
     kicks DECIMAL(4,1),
     handballs DECIMAL(4,1),
     marks DECIMAL(4,1),
     goals DECIMAL(4,1),
     behinds DECIMAL(4,1),
     tackles DECIMAL(4,1),
     hitouts DECIMAL(4,1),
     goal_assists DECIMAL(4,1),
     inside_fiftys DECIMAL(4,1),
     clearances DECIMAL(4,1),
     clangers DECIMAL(4,1),
     rebound_fiftys DECIMAL(4,1),
     frees_for DECIMAL(4,1),
     frees_against DECIMAL(4,1),
     dream_team DECIMAL(4,1),
     contested_possessions DECIMAL(4,1),
     uncontested_possessions DECIMAL(4,1),
     effective_disposals DECIMAL(4,1),
     contested_marks DECIMAL(4,1),
     marks_inside_fifty DECIMAL(4,1),
     one_percenters DECIMAL(4,1),
     bounces DECIMAL(4,1),
     center_clearances DECIMAL(4,1),
     stoppage_clearances DECIMAL(4,1),
     score_involvements DECIMAL(4,1),
     meters_gained DECIMAL(4,1),
     turnovers DECIMAL(4,1),
     intercepts DECIMAL(4,1),
     tackles_inside_fifty DECIMAL(4,1),
     time_on_ground DECIMAL(4,1),

     CONSTRAINT fk_player_id FOREIGN KEY (player_id) REFERENCES player_entity(id),
     CONSTRAINT fk_afl_team_id FOREIGN KEY (afl_team_id) REFERENCES afl_teams_enum(id)
);

CREATE TABLE team_player_join_entity (
    id SERIAL,
    team_id INT,
    player_id INT,
    price SMALLINT,
    my_team_position_id SMALLINT,

    CONSTRAINT fk_team_id FOREIGN KEY (team_id) REFERENCES team_entity(id),
    CONSTRAINT fk_player_id FOREIGN KEY (player_id) REFERENCES player_entity(id),
    CONSTRAINT fk_my_team_position_id FOREIGN KEY (my_team_position_id) REFERENCES position_entity(id)
);


