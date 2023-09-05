const {printTable} = require("console-table-printer")
    function viewAllEmployees (connection, startApp) {
    const statement = connection.query("select * from employees", (err,data) => {
    printTable(data)
    startApp()
    })
    }
module.exports = viewAllEmployees;