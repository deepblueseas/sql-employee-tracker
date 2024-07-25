const inquirer = require('inquirer');
const { promptAddEmployee } = require('./cli');


async function main() {
    try {
        const { action } = await inquirer.prompt([
            {
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
                    'Exit'
                ],
            },
        ]);

        switch (action) {
            case 'View all departments':
                break;
            case 'View all roles':
                break;
            case 'Add a department':
                break;
            case 'Add a role':
                break;
            case 'Add an employee':
                await promptAddEmployee();
                break;
            case 'Update an employee role':
                break;
            case 'Exit':
                console.log('Goodbye!');
                process.exit(0);
        }

        main();
    } catch (error) {
        console.error('Error', error.message);
    }
}

main();