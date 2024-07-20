-- Insert departments
INSERT INTO department (department_name) VALUES
    ('Sales'),
    ('Marketing'),
    ('Engineering'),
    ('Finance');

-- Insert job roles
INSERT INTO job_role (title, salary, department_id) VALUES
    ('Sales Manager', 100000.01, 1),           -- Department: Sales
    ('Marketing Specialist', 80000.02, 2),     -- Department: Marketing
    ('Software Engineer', 90000.03, 3),        -- Department: Engineering
    ('Financial Analyst', 95000.04, 4);        -- Department: Finance

-- Insert employees
INSERT INTO employee (first_name, last_name, job_id, manager_id) VALUES
    ('John', 'Doe', 1, NULL),                 -- John Doe, Sales Manager
    ('Jane', 'Smith', 2, 1),                  -- Jane Smith, Marketing Specialist (Reports to John Doe)
    ('Michael', 'Johnson', 3, 1),             -- Michael Johnson, Software Engineer (Reports to John Doe)
    ('Emily', 'Williams', 4, NULL);           -- Emily Williams, Financial Analyst

-- Additional inserts as needed