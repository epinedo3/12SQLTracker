const { printTable } = require("console-table-printer")
const inquirer = require("inquirer")
function updateAnEmployeeRole (connection, startApp){
    inquirer.prompt([{
        type: "input",
        message: "new employee role",
        name: "role_id"
    }, {
        type: "input",
        message: "enter new employee id",
        name: "employee_id"
    }])
        .then(answer => {
            const statement = connection.query("update employees set role_id=? where id=?",[answer.role_id, answer.employee_id], (err, data) => {
                startApp()
            })
        })

}
module.exports = updateAnEmployeeRole;