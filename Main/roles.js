const connection = require('../config/connection');

// View all roles
const viewAllRoles = async () => {
    const result = await pool.query(`
      SELECT role.id, role.title, role.salary, department.name AS department
      FROM role
      JOIN department ON role.department_id = department.id
    `);
    console.table(result.rows);
  };
  
  // Add a role
  const addRole = async (title, salary, departmentId) => {
    await pool.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [title, salary, departmentId]);
  };
  
  module.exports = {
    viewAllRoles,
    addRole,
  };