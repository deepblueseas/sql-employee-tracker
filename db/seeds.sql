-- Insert departments
INSERT INTO department (department_name) VALUES
    ('Sales'),
    ('Marketing'),
    ('Engineering'),
    ('Finance');

-- Insert job roles
INSERT INTO job_role (title, salary, department_id) VALUES
    ('Sales Manager', 100000.01, 1),           
    ('Marketing Specialist', 80000.02, 2),     
    ('Software Engineer', 90000.03, 3),       
    ('Financial Analyst', 95000.04, 4);        -

-- Insert employees
INSERT INTO employee (first_name, last_name, job_id, manager_id) VALUES
    ('Scout', 'Cat', 1, NULL),                 
    ('Daphne', 'Cat', 2, 1),                  
    ('Tess', 'McGovern', 3, 1),             
    ('Stephen', 'King', 4, NULL);           

