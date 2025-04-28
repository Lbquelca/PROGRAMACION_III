const express = require('express');
const cors = require('cors');
const app = express();
const clienteRoutes = require('./routes/clienteRoutes');

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/clientes', clienteRoutes);

// Iniciar servidor
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
