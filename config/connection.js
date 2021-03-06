// Set up MySQL connection.
var mysql = require("mysql");
require("dotenv").config();

var connection = mysql.createConnection(process.env.JAWSDB_URL);



/*mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "mjbenefiel",
  password: "dur@cell15",
  database: "burgers_db"
}); */

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id: " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;

