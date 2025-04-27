const mysql = require('mysql2/promise');

async function main() {
  console.time('promise');

  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'comercio'
    });

    console.log('Conexión exitosa (promesas)');

    const [rows] = await connection.execute('SELECT * FROM cliente');
    console.log('Clientes encontrados:');
    console.table(rows);

    await connection.end();
  } catch (err) {
    console.error('Error en la conexión:', err);
  }

  console.timeEnd('promise');
}

main();
