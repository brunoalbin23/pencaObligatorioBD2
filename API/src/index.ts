import express, { Request, Response } from 'express';
import alumnoRoutes from './routes/Alumno_Routes'


import bodyParser from 'body-parser'; //Estos dos luego los borro o comento
import connection from './db';


const app = express();
app.use(bodyParser.json());
app.use(express.json());//middleware

  //npm run dev
  //npm start             este no se porque no me acepta los metodos y el otro si

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server running 123 on port ${PORT}`)
});




//ACA ARRANCA LA PARTE DE SEGURIDAD osea el MIDDLEWARE


const cors = require('cors');

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200,
    methods: "GET, PUT, POST, DELETE"
};





// Función para verificar si el ID de usuario ya existe
const isUserIdTaken = async (id: number): Promise<boolean> => {
  try {
    const conn = await connection;
    const [rows] = await conn.execute('SELECT COUNT(*) AS count FROM Usuario WHERE id = ?', [id]);
    const count = (rows as any)[0].count;
    return count > 0;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('Error desconocido al verificar el ID de usuario');
    }
  }
};

// Función para registrar un nuevo usuario y alumno
const registerUserAndStudent = async (id: number, password: string, nombre: string, apellido: string, fechaNac: string, cedula: number): Promise<void> => {
  const conn = await connection;
  try {
    await conn.beginTransaction();

    // Insertar en la tabla usuario
    await conn.execute('INSERT INTO Usuario (id, contrasenia) VALUES (?, ?)', [id, password]);

    // Insertar en la tabla alumno
    await conn.execute('INSERT INTO Alumno (id, nombre, apellido, fecha_nac, cedula) VALUES (?, ?, ?, ?, ?)', [id, nombre, apellido, fechaNac, cedula]);

    await conn.commit();
  } catch (error) {
    await conn.rollback();
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('Error desconocido al registrar usuario y alumno');
    }
  }
};

// Endpoint para registrar un nuevo usuario y alumno
app.post('/registrar', async (req: Request, res: Response) => {
  const { id, password, nombre, apellido, fechaNac, cedula } = req.body;

  if (!id || !password || !nombre || !apellido || !fechaNac || !cedula) {
    return res.status(400).json({ error: 'Todos los campos son requeridos' });
  }

  try {
    const userIdTaken = await isUserIdTaken(id);
    if (userIdTaken) {
      return res.status(409).json({ error: 'ID de usuario ya en uso' });
    }

    await registerUserAndStudent(id, password, nombre, apellido, fechaNac, cedula);
    return res.status(201).json({ message: 'Usuario y alumno registrados exitosamente' });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    } else {
      return res.status(500).json({ error: 'Error desconocido' });
    }
  }
});



app.use(cors(corsOptions));


app.use('/alumno', alumnoRoutes)

  
