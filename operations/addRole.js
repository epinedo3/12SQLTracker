const { printTable } = require ("console-table-printer")
const inquirer = require("inquirer")
function addARole (connection, startApp){
    inquirer.prompt([{
        type: "input",
        message: "enter new role",
        name: "role"
    },{
        type: "input",
        message: "enter department id",
        name: "department_id"
        
    },{
        type: "input",
        message: "enter salary",
        name: "salary"
    }])
        .then(answer => {
            const statement = connection.query("insert into roles (title, department_id, salary ) values(?,?,?)",[answer.role, answer.department_id, answer.salary],(err, data) => {
                startApp()
            })
        })
}
module.exports = addARole;