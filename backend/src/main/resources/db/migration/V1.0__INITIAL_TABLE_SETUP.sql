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
    def SMALLINT,
    mid SMALLINT,
    ruc SMALLINT,
    fwd SMALLINT,
    bench SMALLINT
);

CREATE TABLE draft_status_enum (
    id SERIAL PRIMARY KEY,
    status VARCHAR(255) NOT NULL
);

CREATE TABLE draft_entity (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    num_of_teams INT NOT NULL,
    roster_id INT NOT NULL,
    budget INT NOT NULL,
    on_the_block_timer INT NOT NULL,
    bid_timer INT NOT NULL,
    status_id INT NOT NULL,
    created_on TIMESTAMP NOT NULL,
    updated_on TIMESTAMP NOT NULL,

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
    id SERIAL PRIMARY KEY,
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

    CONSTRAINT fk_team_type_id FOREIGN KEY(type_id) REFERENCES team_type_enum(id),
    CONSTRAINT fk_team_user_id FOREIGN KEY(user_id) REFERENCES user_entity(id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_team_draft_id FOREIGN KEY(draft_id) REFERENCES draft_entity(id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_team_status_id FOREIGN KEY(status_id) REFERENCES team_status_enum(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE afl_teams_enum (
    id SERIAL PRIMARY KEY,
    afl_team varchar NOT NULL
);

CREATE TABLE position_entity (
    id SERIAL PRIMARY KEY,
    type varchar NOT NULL
);

CREATE TABLE player_entity (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    date_of_birth DATE,
    age SMALLINT,
    career_games SMALLINT,
    sc_standard_price INT,
    afl_team_id SMALLINT,
    jumper_number SMALLINT,
    height SMALLINT,
    weight SMALLINT,
    rooster_rating SMALLINT,
    moneyball_price SMALLINT,
    price_2016 SMALLINT,
    price_2017 SMALLINT,
    price_2018 SMALLINT,
    price_2019 SMALLINT,
    price_2020 SMALLINT,
    ps_average SMALLINT,
    sc_average SMALLINT,
    rooster_rating_2021 SMALLINT,
    price_2021 SMALLINT,
    sd_team_id_2021 SMALLINT,
    is_active BOOLEAN,
    rank SMALLINT,

    CONSTRAINT fk_afl_team_id FOREIGN KEY (afl_team_id) REFERENCES afl_teams_enum(id)
);

CREATE TABLE player_draft_entity (
    player_id INT PRIMARY KEY,
    origin VARCHAR(255),
    round SMALLINT,
    pick SMALLINT,
    year SMALLINT,
    type VARCHAR(255),
    drafting_team_id SMALLINT,

    CONSTRAINT fk_player_id FOREIGN KEY (player_id) REFERENCES player_entity(id),
    CONSTRAINT fk_drafting_team_id FOREIGN KEY (drafting_team_id) REFERENCES afl_teams_enum(id)
);

CREATE TABLE player_position_join (
    player_id INT,
    position_id INT,

    CONSTRAINT fk_player_id FOREIGN KEY (player_id) REFERENCES player_entity(id),
    CONSTRAINT fk_position_id FOREIGN KEY (position_id) REFERENCES position_entity(id)
);

CREATE TABLE team_player_join_entity (
     id SERIAL PRIMARY KEY,
     team_id INT,
     player_id INT,
     price SMALLINT,
     my_team_position_id SMALLINT,
     purchase_review_rating VARCHAR(255),
     price_difference SMALLINT,
     slot_id VARCHAR(255),

     CONSTRAINT fk_team_id FOREIGN KEY (team_id) REFERENCES team_entity(id),
     CONSTRAINT fk_player_id FOREIGN KEY (player_id) REFERENCES player_entity(id),
     CONSTRAINT fk_my_team_position_id FOREIGN KEY (my_team_position_id) REFERENCES position_entity(id)
);

CREATE TABLE season_summary_entity (
     id SERIAL PRIMARY KEY,
     player_id SMALLINT,
     afl_team_id SMALLINT,
     year SMALLINT,
     games SMALLINT,
     average SMALLINT,
     kicks SMALLINT,
     handballs SMALLINT,
     disposals SMALLINT,
     marks SMALLINT,
     goals DECIMAL(4,1),
     behinds DECIMAL(4,1),
     tackles SMALLINT,
     hitouts SMALLINT,
     goal_assists DECIMAL(4,1),
     inside_fiftys SMALLINT,
     clearances SMALLINT,
     clangers SMALLINT,
     rebound_fiftys SMALLINT,
     frees_for DECIMAL(4,1),
     frees_against DECIMAL(4,1),
     dream_team SMALLINT,
     contested_possessions SMALLINT,
     uncontested_possessions SMALLINT,
     effective_disposals SMALLINT,
     disposal_efficiency SMALLINT,
     contested_marks DECIMAL(4,1),
     marks_inside_fifty DECIMAL(4,1),
     one_percenters SMALLINT,
     bounces DECIMAL(4,1),
     center_clearances DECIMAL(4,1),
     stoppage_clearances DECIMAL(4,1),
     score_involvements SMALLINT,
     meters_gained SMALLINT,
     turnovers SMALLINT,
     intercepts SMALLINT,
     tackles_inside_fifty DECIMAL(4,1),
     time_on_ground SMALLINT,
     hardness_rating SMALLINT,
     frees_ratio DECIMAL(4,1),

     CONSTRAINT fk_player_id FOREIGN KEY (player_id) REFERENCES player_entity(id),
     CONSTRAINT fk_afl_team_id FOREIGN KEY (afl_team_id) REFERENCES afl_teams_enum(id)
);

CREATE TABLE game_entity (
    id SERIAL PRIMARY KEY,
    player_id SMALLINT,
    year SMALLINT,
    afl_team_id SMALLINT,
    round SMALLINT,
    opponent_afl_team_id SMALLINT,
    result VARCHAR(255),
    kicks SMALLINT,
    handballs SMALLINT,
    disposals SMALLINT,
    marks SMALLINT,
    goals SMALLINT,
    behinds SMALLINT,
    tackles SMALLINT,
    hitouts SMALLINT,
    clearances SMALLINT,
    clangers SMALLINT,
    rebound_fiftys SMALLINT,
    inside_fiftys SMALLINT,
    dream_team SMALLINT,
    average SMALLINT,
    contested_possessions SMALLINT,
    uncontested_possessions SMALLINT,
    disposal_efficiency SMALLINT,
    center_clearances SMALLINT,
    meters_gained SMALLINT,
    turnovers SMALLINT,
    intercepts SMALLINT,
    time_on_ground SMALLINT,
    hardness_rating SMALLINT,

    CONSTRAINT fk_player_id FOREIGN KEY (player_id) REFERENCES player_entity(id),
    CONSTRAINT fk_afl_team_id FOREIGN KEY (afl_team_id) REFERENCES afl_teams_enum(id),
    CONSTRAINT fk_opponent_afl_team_id FOREIGN KEY (opponent_afl_team_id) REFERENCES afl_teams_enum(id)
);

CREATE TABLE watchlist_join_entity (
     id SERIAL PRIMARY KEY,
     team_id INT,
     player_id INT,

     CONSTRAINT fk_team_id FOREIGN KEY (team_id) REFERENCES team_entity(id),
     CONSTRAINT fk_player_id FOREIGN KEY (player_id) REFERENCES player_entity(id)
);

