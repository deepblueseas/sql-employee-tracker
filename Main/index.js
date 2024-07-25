const inquirer = require('inquirer');
const { promptAddEmployee } = require('./cli');
const departments = require('./departments');
const roles = require('./roles');
const employees = require('./employees');


const mainMenu = async () => {
    const answers = await inquirer.prompt({
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit',
      ],
    });
  

        switch (answers.action) {
            case 'View all departments':
              await viewAllDepartments();
              break;
            case 'View all roles':
              await viewAllRoles();
              break;
            case 'View all employees':
              await viewAllEmployees();
              break;
            case 'Add a department':
              const { departmentName } = await inquirer.prompt({
                type: 'input',
                name: 'departmentName',
                message: 'Enter the name of the department:',
              });
              await addDepartment(departmentName);
              break;
            case 'Add a role':
              const { roleTitle, roleSalary, roleDepartmentId } = await inquirer.prompt([
                { type: 'input', name: 'roleTitle', message: 'Enter the role title:' },
                { type: 'input', name: 'roleSalary', message: 'Enter the role salary:' },
                { type: 'input', name: 'roleDepartmentId', message: 'Enter the department ID for this role:' },
              ]);
              await addRole(roleTitle, roleSalary, roleDepartmentId);
              break;
            case 'Add an employee':
              const { employeeFirstName, employeeLastName, employeeRoleId, employeeManagerId } = await inquirer.prompt([
                { type: 'input', name: 'employeeFirstName', message: 'Enter the employee’s first name:' },
                { type: 'input', name: 'employeeLastName', message: 'Enter the employee’s last name:' },
                { type: 'input', name: 'employeeRoleId', message: 'Enter the role ID for this employee:' },
                { type: 'input', name: 'employeeManagerId', message: 'Enter the manager’s ID (leave blank if none):' },
              ]);
              await addEmployee(employeeFirstName, employeeLastName, employeeRoleId, employeeManagerId || null);
              break;
            case 'Update an employee role':
              const { employeeId, newRoleId } = await inquirer.prompt([
                { type: 'input', name: 'employeeId', message: 'Enter the employee ID:' },
                { type: 'input', name: 'newRoleId', message: 'Enter the new role ID:' },
              ]);
              await updateEmployeeRole(employeeId, newRoleId);
              break;
            case 'Exit':
              process.exit();
              break;
          }
        
          mainMenu(); // Show the menu again after an action
        };
        
        mainMenu();