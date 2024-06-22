/*import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import connection from './db';

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Función para verificar si el nombre de usuario ya existe
const isUsernameTaken = async (username: string): Promise<boolean> => {
  try {
    const conn = await connection;
    const [rows] = await conn.execute('SELECT COUNT(*) AS count FROM usuario WHERE username = ?', [username]);
    const count = (rows as any)[0].count;
    return count > 0;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('Error desconocido al verificar el nombre de usuario');
    }
  }
};

// Función para insertar un nuevo usuario
const createUser = async (username: string, password: string): Promise<void> => {
  try {
    const conn = await connection;
    await conn.execute('INSERT INTO usuario (username, password) VALUES (?, ?)', [username, password]);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('Error desconocido al crear el usuario');
    }
  }
};

// Endpoint para crear un nuevo usuario
app.post('/usuarios', async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  try {
    const usernameTaken = await isUsernameTaken(username);
    if (usernameTaken) {
      return res.status(409).json({ error: 'Username already in use' });
    }

    await createUser(username, password);
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error' });
    }
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});*/
