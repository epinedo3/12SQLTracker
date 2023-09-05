const {printTable} = require("console-table-printer")
function viewAllDepartments (connection, startApp) {
    console.log("viewDepts")
const statement = connection.query("select * from departments", (err,data) => {
printTable(data)
startApp()
})
}
module.exports = viewAllDepartments;