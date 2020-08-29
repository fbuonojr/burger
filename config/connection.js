var mysql = require("mysql");
require('dotenv').config();

var connection = mysql.createConnection({
    host: DB_HOST,
    port: 3306,
    user: DB_USER,
    password: DB_PASS,
    database: "burgers_db"
});

//Make connection
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

//Export connection
module.exports = connection;