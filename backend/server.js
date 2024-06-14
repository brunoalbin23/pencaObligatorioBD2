const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const registroRoutes = require('./routes/registro.routes');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api', registroRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
