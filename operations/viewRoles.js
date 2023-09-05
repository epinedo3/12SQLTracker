const {printTable} = require("console-table-printer")
    function viewAllRoles (connection, startApp) {
    const statement = connection.query("select * from roles", (err,data) => {
    printTable(data)
    startApp()
    })
    }
module.exports = viewAllRoles;