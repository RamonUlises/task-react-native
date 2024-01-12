CREATE DATABASE task_db;

USE task_db;

CREATE TABLE tasks(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(255) NOT NULL
);

INSERT INTO tasks (title, description) VALUES 
    ("Task 1", "Some description 1"),
    ("Task 2", "Some description 2");