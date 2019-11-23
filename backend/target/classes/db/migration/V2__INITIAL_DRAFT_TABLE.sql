CREATE TABLE draft (
    id BIGSERIAL,
    name VARCHAR(255) NOT NULL,
    num_of_teams INT NOT NULL,
    roster_type INT NOT NULL,
    budget INT NOT NULL,
    created_on DATE NOT NULL,

    CONSTRAINT pk_draft PRIMARY KEY(id)
);