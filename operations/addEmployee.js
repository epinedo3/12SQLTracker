const { printTable } = require("console-table-printer")
const inquirer = require("inquirer")
function addAnEmployee (connection, startApp) {
    inquirer.prompt([{
        type: "input",
        message: "enter new employee",
        name: "employee"
    }])
        .then(answer => {
            const statement = connection.query("insert into employee (name) values(?)",[answer.employee], (err, data) => {
                startApp()
            })
        })

}
module.exports = addAnEmployee;