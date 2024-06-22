import mysql from 'mysql2/promise';

// Definir una interfaz para la configuración de la conexión
interface DBConfig {
  host: string;
  user: string;
  password: string;
  database: string;
  port: number;
}

// Configuración de la base de datos
const dbConfig: DBConfig = {
  host: 'localhost',  // Cambia esto si tu base de datos está en otro servidor
  user: 'root',
  password: 'obl_bd2',
  database: 'Obligatorio',
  port: 3306  // Cambia esto si tu base de datos está en otro puerto
};

async function createConnection() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log('Conectado a la base de datos');
    return connection;
  } catch (err) {
    console.error('Error conectando a la base de datos:', err);
    throw err;
  }
}

const connection = createConnection();

export default connection;

