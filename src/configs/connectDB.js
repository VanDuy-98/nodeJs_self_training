// get the client
import mysql from 'mysql2'

// create the connection to database
const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'nodejsbasic'
});

// simple query
// connection.query(
//     'SELECT * FROM `users`',
//     function(err, results, fields) {
//         console.log('>>> check mysql')
//         console.log(results); // results contains rows returned by server
//         let rows = results.map()
//         console.log(results[0]); // fields contains extra meta data about results, if available
//     }
// );

export default connection