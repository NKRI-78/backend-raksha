const mysql = require("mysql2")
const config = require("./configs")
const conn = mysql.createConnection(config.database_pos.mysql)

module.exports = conn