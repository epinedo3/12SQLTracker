const { printTable } = require("console-table-printer")
const inquirer = require("inquirer")
function addAnEmployee (connection, startApp) {
    inquirer.prompt([{
        type: "input",
        message: "enter new employee first name",
        name: "first_name"
    }, {
        type: "input",
        message: "enter new employee last name",
        name: "last_name"
    }, {
        type: "input",
        message: "new employee role",
        name: "role_id"
    }, {
        type: "input",
        message: "enter new employee manager id",
        name: "manager_id"
    }])
        .then(answer => {
            const statement = connection.query("insert into employees (first_name, last_name, role_id, manager_id) values(?,?,?,?)",[answer.first_name, answer.last_name, answer.role_id, answer.manager_id], (err, data) => {
                startApp()
            })
        })

}
module.exports = addAnEmployee;