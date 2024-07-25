const inquirer = require('inquirer');
const { addEmployee } = require('./employees.js');
const db = require('../config/connection.js');

// similar to the previous inquirer set ups!

async function promptAddEmployee() {
  try {
    const employeeData = await inquirer.prompt([
      {
        type: 'input',
        name: 'first_name',
        message: "Enter employee's first name:",
      },
      {
        type: 'input',
        name: 'last_name',
        message: "Enter employee's last name:",
      },
      {
        type: 'input',
        name: 'role_id',
        message: "Enter employee's role ID:",
      },
      {
        type: 'input',
        name: 'manager_id',
        message: "Enter employee's manager ID (optional, leave empty if none):",
      },
    ]);

    const { first_name, last_name, role_id, manager_id } = employeeData;
    const newEmployee = await addEmployee(first_name, last_name, role_id, manager_id || null);
    console.log('Employee added successfully:');
    console.log(newEmployee);
  } catch (error) {
    console.error('Error adding employee:', error.message);
  } finally {
    db.close();
  }
}

promptAddEmployee();

module.exports = {
    promptAddEmployee
  };