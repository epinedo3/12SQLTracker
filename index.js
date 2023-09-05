const mysql = require("mysql2");
const inquirer = require("inquirer");
const viewAllDepartments = require("./operations/viewDept");
const viewAllRoles = require("./operations/viewRoles");
const viewAllEmployees = require("./operations/viewEmployees");
const addADepartment = require("./operations/addDept");
const addARole = require("./operations/addRole");
const addAnEmployee = require("./operations/addEmployee");
const updateAnEmployeeRole = require("./operations/updateRole")
// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Chimur@zo01",
  database: "employees_db",
});

connection.connect(()=>{
    startApp()
});

// Function to start the application
function startApp() {
  // Prompt the user for the action they want to perform
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
          "Exit",
        ],
      },
    ])
    .then((answers) => {
      const { action } = answers;

      // Perform the selected action based on user input
      switch (action) {
        case "View all departments":
        
          viewAllDepartments(connection, startApp);
          break;
        case "View all roles":
          viewAllRoles(connection, startApp);
          break;
        case "View all employees":
          viewAllEmployees(connection, startApp);
          break;
        case "Add a department":
          addADepartment(connection, startApp);
          break;
        case "Add a role":
          addARole(connection, startApp);
          break;
        case "Add an employee":
          addAnEmployee(connection, startApp);
          break;
        case "Update an employee role":
          updateAnEmployeeRole(connection, startApp);
          break;
        case "Exit":
          console.log("Exiting the application");
          connection.end(); // Close the database connection
          break;
      }
    })
    .catch((err) => {
      console.error("Error occurred:", err);
      connection.end(); // Close the database connection in case of an error
    });
}
