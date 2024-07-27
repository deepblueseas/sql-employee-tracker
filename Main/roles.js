const { pool } = require('../config/connection');

// View all roles
const viewAllRoles = async () => {
    const result = await pool.query(`
      SELECT job_role.id, job_role.title, job_role.salary, department_name AS department
      FROM job_role
      JOIN department ON job_role.department_id = department.id
    `);
    console.table(result.rows);
  };
  
  // Add a role
  const addRole = async (title, salary, departmentId) => {
    await pool.query('INSERT INTO job_role (title, salary, department_id) VALUES ($1, $2, $3)', [title, salary, departmentId]);
  };
  
  module.exports = {
    viewAllRoles,
    addRole,
  };