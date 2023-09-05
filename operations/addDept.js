const { printTable } = require("console-table-printer")
const inquirer = require("inquirer")
function addADepartment(connection, startApp) {
    inquirer.prompt([{
        type: "input",
        message: "enter new dept.",
        name: "department"
    }])
        .then(answer => {
            const statement = connection.query("insert into departments (name) values(?)",[answer.department], (err, data) => {
                startApp()
            })
        })
}
module.exports = addADepartment;