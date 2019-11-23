CREATE TABLE sd_user (
    id BIGSERIAL,
    username VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,

    CONSTRAINT pk_sd_user PRIMARY KEY(id)
);
