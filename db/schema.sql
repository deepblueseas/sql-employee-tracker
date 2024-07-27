DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

\c employees_db;

CREATE TABLE department (
    id SERIAL PRIMARY KEY,
    department_name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE job_role (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER NOT NULL,
    -- a job can belong to a department
    FOREIGN KEY (department_id) REFERENCES department (id)
);


CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    job_id INTEGER NOT NULL,
    manager_id INTEGER,
    -- an employee can have a job and a manager
    FOREIGN KEY (job_id) REFERENCES job_role (id),
    FOREIGN KEY (manager_id) REFERENCES employee (id)
);




-- notes: to open postgres in terminal run  psql -U postgres