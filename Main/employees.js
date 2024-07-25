const connection = require('../config/connection');

async function addEmployee(firstName, lastName, roleId, managerId) {
  try {
    const query = `
      INSERT INTO employees (first_name, last_name, role_id, manager_id)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const { rows } = await db.query(query, [firstName, lastName, roleId, managerId]);
    return rows[0];
  } catch (error) {
    throw new Error(`Error adding employee: ${error.message}`);
  }
}

module.exports = {
  addEmployee,
};