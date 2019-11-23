CREATE TABLE team (
    id BIGSERIAL,
    name VARCHAR(255) NOT NULL,
    budget INT NOT NULL,
    created_on DATE NOT NULL,
    sd_user INT NOT NULL,
    draft INT NOT NULL,

    CONSTRAINT pk_team PRIMARY KEY(id)
);