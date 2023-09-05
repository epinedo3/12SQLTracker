const { printTable } = require("console-table-printer")
const inquirer = require("inquirer")
function addARole (connection, startApp){
    inquirer.prompt([{
        type: "input",
        message: "enter new role",
        name: "role"
    }])
        .then(answer => {
            const statement = connection.query("insert into role (name) values(?)",[answer.role], (err, data) => {
                startApp()
            })
        })
}
module.exports = addARole;