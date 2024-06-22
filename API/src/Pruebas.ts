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







/*import IAlumno from "../Interfaces/IAlumno"
import { Request, Response } from 'express';
import { generateAccessToken } from "./Seguridad";

const alumnos: IAlumno[] = [];

//METODO DE REGISTRO
export const register = (req:Request , res: Response)=>
{
    const nuevoAlumno: IAlumno = 
    {
        nombre: req.body.Nombre,
        apellido: req.body.Apellido,
        fecha_nac: req.body.Date,
        ci: req.body.CI,
        carrera: req.body.Carrera,
        password: req.body.Password
    };

    // Verificar si el número de cédula ya está en uso porque lo vamos a usar como ID (creo)
    const ciEnUso = alumnos.some(alumno => alumno.ci === nuevoAlumno.ci);

    if (ciEnUso) 
    {
       return res.status(400).send("La cédula ya está en uso");
    } else 
    {
        // Si la cédula no está en uso, agregamos el nuevo alumno a la lista (aunque luego va a ser a la BD)
        alumnos.push(nuevoAlumno);
        return res.status(200).send("Usuario creado exitosamente");
    }
}

//INICIAR SESION METODO
export const inicio = (req:Request , res: Response)=>{
    let cuenta: string[] = [];
    cuenta.push(req.body.CI);
    cuenta.push(req.body.Password);
    let cuentaEncontrada: boolean = false;

    alumnos.forEach(element => {
        if (cuenta[0] == element.ci && cuenta[1] == element.password) {
            cuentaEncontrada = true;
        }
    });
    const token = generateAccessToken(req.body.CI);

    if (cuentaEncontrada) {
        res.status(200).send({ token: token });
    } else {
        res.status(400).send('Cuenta no encontrada');
    }
    console.log("Datos del primer alumno:", alumnos[0]);
    console.log("Los 2 primeros valores del array cuenta:", cuenta[0], cuenta[1]);
}


/*
import express from 'express'

const router= express.Router();

import IAlumno from "../Interfaces/IAlumno"

const alumnos: IAlumno[] = [];

router.post((req, res)=>{
const alumno: IAlumno = {
        nombre: req.body.Nombre,
        apellido: req.body.Apellido,
        fecha_nac: req.body.Date,
        ci: req.body.CI,
        carrera: req.body.Carrera
    } 
    alumnos.push(alumno);
    res.status(200).send("Usuario Creado")
})
*/
