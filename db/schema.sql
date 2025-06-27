CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    accession VARCHAR(100) UNIQUE,
    title TEXT NOT NULL
);
