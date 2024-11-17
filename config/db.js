const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rootroot",
  port: 3306,
  database: "blog_db",
});

module.exports = db;
a;

