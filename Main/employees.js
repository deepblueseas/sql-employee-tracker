const { pool } = require('../config/connection');

// View all employees
// POOL is a mmethod used with sql specifically
// this pool connects with our db through the connection.js
const viewAllEmployees = async () => {
  const result = await pool.query(`
    SELECT employee.id, employee.first_name, employee.last_name, job_role.title AS role, department_name AS department, job_role.salary, manager.first_name AS manager
    FROM employee
    JOIN job_role ON employee.job_id = job_role.id
    JOIN department ON job_role.department_id = department.id
    LEFT JOIN employee manager ON employee.manager_id = manager.id
  `);
  console.table(result.rows);
};

// Add an employee
const addEmployee = async (firstName, lastName, roleId, managerId) => {
  // insert into is postgres speak, we are going to add to the employee table here!
  await pool.query('INSERT INTO employee (first_name, last_name, job_id, manager_id) VALUES ($1, $2, $3, $4)', [firstName, lastName, roleId, managerId]);
};

// Update employee role
const updateEmployeeRole = async (employeeId, newRoleId) => {
  // Similarly the set, $1, and WHERE are sql language checking 
  // to make sure the correct id is being updated!
  await pool.query('UPDATE employee SET job_role_id = $1 WHERE id = $2', [newRoleId, employeeId]);
};

module.exports = {
  viewAllEmployees,
  addEmployee,
  updateEmployeeRole,
};