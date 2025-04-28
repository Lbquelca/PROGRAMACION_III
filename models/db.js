const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // normalmente vacío en XAMPP
    database: 'crudmvc'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Base de datos conectada');
});

module.exports = connection;
