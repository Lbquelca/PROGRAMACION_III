const mysql = require('mysql2');

// Conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Cambiar si tienes otro usuario
  password: '', // Cambiar si tienes contraseña
  database: 'pract4RyN' // Tu nueva base de datos
});

db.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

module.exports = db;
