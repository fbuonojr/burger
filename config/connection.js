var mysql = require("mysql");
require('dotenv').config();

var connection = mysql.createConnection({
    host: DB_HOST,
    port: 3306,
    user: DB_USER,
    password: DB_PASS,

})