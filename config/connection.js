var mysql = require("mysql");
require("dotenv").config();
var connection;

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
    connection = mysql.createConnection({
    host: "localhost",
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "burgers"
});
}

connection.connect(function(err){
    if (err){
        console.log("Error connecting to DB: " + err.stack);
        return;
    }
    console.log("Connected to DB as id: " + connection.threadId);
});

module.exports = connection;