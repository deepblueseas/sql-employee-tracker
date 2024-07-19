# SQL Employee Tracker

## Description
This application uses **Node.js**, **Inquirer**, and **PostgreSQL** render a CMS or content management system for a company's employee database.  This application utilizes the command-line.

## Table of Contents
I. [User Story](#user-story-from-the-cwru-prompt) <br>
II. [Acceptance Criteria](#acceptance-criteria-adapted-from-the-cwru-prompt) <br>
III. [Image of Working App] <br>
IV. [Walkthrough Video Link] <br>

### User Story (from the CWRU prompt)
As a business owner, I want to be able to view and manage the departments, roles and employees in my company so that I can organize and plan my business.


### Acceptance Criteria (adapted from the CWRU prompt)
> - GIVEN a command line application that accepts user input
> - When I start the application
>   - I am presented with these **options**: <br>
>        a. view all departments <br>
>        b. view all roles <br>
>        c. view all employees <br>
>        d. add a department <br>
>        e. add a role <br>
>        f. add an employee <br>
>        g. updated an employee role <br>
> - When I choose **view all departments**
>    - I am prestended with a table showing department names and ids
> - When I choose **view all roles**
>   - I am presented with job title, role id, department role belongs to, and salary for that role
> - When I choose **view all employees**
>    - I am presented with a formatted table showing employee data: 
>        - ids, first names, last names, job titles, deparmtents, salaries, and the managers employees report to
> - When I choose **add a department**
>    - I am prompted to enter the name of the department and then that department is added to the database
> - When I choose **add a role**
>    - I am prompted to enter the name, salary, and department for the role and then that role is added to the database
> - When I choose **add an employee**
>    - I am prompted to enter the employee’s first name, last name, role, and manager, and then that employee is added to the database
> - When I chose to **update an employee role**
>   - I am prompted to select an employee to update and their new role and then this information is updated in the database
