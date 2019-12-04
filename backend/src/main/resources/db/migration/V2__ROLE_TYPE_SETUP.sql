



/* Set up role_type_enum table. */
CREATE TABLE role_type_enum (
    id BIGSERIAL PRIMARY KEY,
    type varchar NULL
);
INSERT INTO role_type_enum(id, type)
VALUES  (0, 'COACH'),
        (1, 'COMMISSIONER'),
        (2, 'ADMIN');


/* Set up user_role table. */
CREATE TABLE user_role_join (
    id BIGSERIAL,
    user_id INT,
    role_id INT,

    CONSTRAINT pk_user_role PRIMARY KEY (id),
    CONSTRAINT u_user_role UNIQUE (user_id, role_id),
    CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES user_entity(id),
    CONSTRAINT fk_role_id FOREIGN KEY (role_id) REFERENCES role_type_enum(id)
);

