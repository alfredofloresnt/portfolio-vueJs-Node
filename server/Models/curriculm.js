const mysql = require('mysql');

// Connectar a BD
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "curriculum"
});

exports.getInfo = (callback) => {
  connection.query("SELECT * FROM information", function (error, results, fields) {
    if (error) throw error;
    callback(results)
  });
}

exports.getExperience = (callback) => {
  connection.query("SELECT * FROM experience", function (error, results, fields) {
    if (error) throw error;
    callback(results)
  });
}

exports.getSkills = (callback) => {
  connection.query("SELECT * FROM skills", function (error, results, fields) {
    if (error) throw error;
    callback(results)
  });
}

exports.getExperience = (callback) => {
  connection.query("SELECT * FROM experience", function (error, results, fields) {
    if (error) throw error;
    callback(results)
  });
}

exports.getProjects = (callback) => {
  connection.query("SELECT * FROM projects", function (error, results, fields) {
    if (error) throw error;
    callback(results)
  });
}

exports.postContact = (email, message, callback) => {
  connection.query("INSERT INTO contact (email, message) VALUES (?,?)", [email, message] , function (error, results, fields) {
    if (error) throw error;
    callback(results)
  });
}