const mysql = require('mysql2');
const dbConfig = require('../config/db.config');

// Crear una conexión a la base de datos
const connection = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database
});

// Conectar a la base de datos
connection.connect(error => {
  if (error) throw error;
  console.log('Successfully connected to the database.');
});

// Controlador para registrar usuario
exports.registrarUsuario = (req, res) => {
  const { cedula, contrasena } = req.body;

  // Consulta SQL para insertar el usuario
  const query = 'INSERT INTO Usuario (id, contrasenia) VALUES (?, ?)';
  
  // Ejecutar la consulta
  connection.query(query, [cedula, contrasena], (err, result) => {
    if (err) {
      console.error('Error inserting user:', err);
      res.status(500).send({ message: 'Error registering user' });
      return;
    }
    res.send({ message: 'User registered successfully' });
  });
};
