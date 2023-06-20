const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'db'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
    // let makeCowListSql = "CREATE TABLE cowList (id INT AUTO_INCREMENT PRIMARY KEY, cowName VARCHAR(255), cowDesc VARCHAR(255));";
    // connection.query(makeCowListSql, function (err, result) {
    //   if (err) throw err;
    //   console.log("cowList table created")
    // })
  }
});

// Your Database Queries Here!!

let addCow = (cowName, cowDesc, callback) => {
  connection.query(`INSERT INTO cowList (cowName, cowDesc) VALUES ('${cowName}', '${cowDesc}');`, callback)
};

let getCowList = (callback) => {
  connection.query('SELECT * FROM cowList;', callback)
};

let deleteCow = (id, callback) => {
  connection.query(`DELETE FROM cowList WHERE id = '${id}';`, callback)
};


// Don't forget to export your functions!

module.exports.getCowList = getCowList;
module.exports.addCow = addCow;
module.exports.deleteCow = deleteCow;
