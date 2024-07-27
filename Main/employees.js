const { pool } = require('../config/connection');

// View all employees
const viewAllEmployees = async () => {
  const result = await pool.query(`
    SELECT employee.id, employee.first_name, employee.last_name, role.title AS role, department.name AS department, role.salary, manager.first_name AS manager
    FROM employee
    JOIN role ON employee.role_id = role.id
    JOIN department ON role.department_id = department.id
    LEFT JOIN employee manager ON employee.manager_id = manager.id
  `);
  console.table(result.rows);
};

// Add an employee
const addEmployee = async (firstName, lastName, roleId, managerId) => {
  await pool.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [firstName, lastName, roleId, managerId]);
};

// Update employee role
const updateEmployeeRole = async (employeeId, newRoleId) => {
  await pool.query('UPDATE employee SET role_id = $1 WHERE id = $2', [newRoleId, employeeId]);
};

module.exports = {
  viewAllEmployees,
  addEmployee,
  updateEmployeeRole,
};