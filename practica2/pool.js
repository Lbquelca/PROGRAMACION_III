const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'comercio',
  waitForConnections: true,
  connectionLimit: 10,  // Número máximo de conexiones al mismo tiempo
  queueLimit: 0
});

async function main() {
  console.time('pool');

  try {
    const [rows] = await pool.query('SELECT * FROM cliente');
    console.log('Clientes encontrados (pool):');
    console.table(rows);
  } catch (err) {
    console.error('Error al consultar:', err);
  }

  console.timeEnd('pool');
  await pool.end(); // Cierra el pool
}

main();
