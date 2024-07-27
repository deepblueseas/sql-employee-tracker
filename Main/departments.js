const { pool } = require('../config/connection');

// View all departments
const viewAllDepartments = async () => {
    const result = await pool.query('SELECT * FROM department');
    console.table(result.rows);
  };
  
  // Add a department
  const addDepartment = async (name) => {
    await pool.query('INSERT INTO department (name) VALUES ($1)', [name]);
  };
  
  module.exports = {
    viewAllDepartments,
    addDepartment,
  };