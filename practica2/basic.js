
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',        // pon tu contraseña si usas una
  database: 'comercio' // ahora usamos la nueva base de datos
});

console.time('basic');

connection.connect((err) => {
  if (err) {
    console.error('Error de conexión:', err);
    return;
  }

  console.log('Conexión exitosa (básica)');

  connection.query('SELECT * FROM cliente', (err, results) => {
    if (err) throw err;

    console.log('Clientes encontrados:');
    console.table(results);

    console.timeEnd('basic');
    connection.end();
  });
});
