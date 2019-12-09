/* Set up role_type_enum table. */
CREATE TABLE role_type_enum (
    id BIGSERIAL PRIMARY KEY,
    type varchar NULL
);
INSERT INTO role_type_enum(id, type)
VALUES  (0, 'ADMIN'),
        (1, 'COACH'),
        (2, 'COMMISSIONER');

/* Set up role_entity table. */
CREATE TABLE role_entity (
    id BIGSERIAL,
    type_id INT NOT NULL,
    user_id INT NOT NULL,
    draft_id INT,
    created_on TIMESTAMP NOT NULL,
    updated_on TIMESTAMP NOT NULL,

    CONSTRAINT pk_role_entity PRIMARY KEY(id),
    CONSTRAINT fk_type_id FOREIGN KEY(type_id) REFERENCES role_type_enum(id),
    CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES user_entity(id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_draft_id FOREIGN KEY (draft_id) REFERENCES draft_entity(id) ON DELETE CASCADE ON UPDATE CASCADE
);

