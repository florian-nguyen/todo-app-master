BEGIN;

CREATE TABLE todo (
    id BIGSERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    completed BOOLEAN NOT NULL
);

INSERT INTO todo(content, completed) VALUES
('Clean the kitchen', 'false'),
('Buy a new knife', 'false'),
('Book a restaurant', 'true');

COMMIT;