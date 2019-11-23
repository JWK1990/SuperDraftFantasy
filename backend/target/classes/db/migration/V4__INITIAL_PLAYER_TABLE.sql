CREATE TABLE player (
    id BIGSERIAL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    football_team INT,
    average INT,

    CONSTRAINT pk_player PRIMARY KEY(id)
);