import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import connection from '../db';
import { generateAccessToken } from './Seguridad';

const app = express();
app.use(bodyParser.json());

export const Adminlogin = async (req: Request, res: Response) => {
  const { id, password } = req.body;

  if (!id || !password) {
    return res.status(400).json({ error: 'ID de usuario y contraseña son requeridos' });
  }

  try {
    const conn = await connection;

    // Verificar en la tabla Usuario
    const [rowsUsuario] = await conn.execute('SELECT * FROM Usuario WHERE id = ? AND contrasenia = ?', [id, password]);
    
    // Verificar la cantidad de filas devueltas por la consulta SELECT
    if ((rowsUsuario as any).rowCount === 0) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }
    
    // Verificar en la tabla Admin
    const [rowsAdmin] = await conn.execute('SELECT * FROM Admin WHERE id = ?', [id]);
    
    // Verificar la cantidad de filas devueltas por la consulta SELECT
    if ((rowsAdmin as any).rowCount === 0) {
      return res.status(401).json({ error: 'No tienes permisos de administrador' });
    }

    // Si las credenciales son correctas y es administrador, generar token de acceso
    const accessToken = generateAccessToken(id); // Suponiendo que 'id' es único y se utiliza como usuario en el token
    return res.status(200).json({ accessToken: accessToken });
  } catch (error) {
    console.error('Error al intentar iniciar sesión:', error);
    return res.status(500).json({ error: 'Error al intentar iniciar sesión' });
  }
};




export const insertarResultadoPartido = async (req: Request, res: Response) => {
  const { nombre_eq1, nombre_eq2, fecha_hora, goles_eq1, goles_eq2, nombre_ev, anio_ev, id_estadio } = req.body;

  // Verificar que todos los campos necesarios estén presentes
  if (!nombre_eq1 || !nombre_eq2 || !fecha_hora || !nombre_ev || !anio_ev || !id_estadio) {
    return res.status(400).json({ error: 'Todos los campos son requeridos' });
  }

  try {
    const conn = await connection;

    // Verificar si el partido ya existe
    const [existingPartidos] = await conn.execute('SELECT * FROM Partido WHERE nombre_eq1 = ? AND nombre_eq2 = ? AND fecha_hora = ?', [nombre_eq1, nombre_eq2, fecha_hora]);
    if (Object.values(existingPartidos).length > 0) {
      return res.status(409).json({ error: 'El resultado de este partido ya ha sido registrado' });
    }

    // Insertar el resultado del partido
    await conn.execute('INSERT INTO Partido (nombre_eq1, nombre_eq2, fecha_hora, goles_eq1, goles_eq2, nombre_ev, anio_ev, id_estadio) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [nombre_eq1, nombre_eq2, fecha_hora, goles_eq1, goles_eq2, nombre_ev, anio_ev, id_estadio]);

    return res.status(201).json({ message: 'Resultado del partido registrado exitosamente' });
  } catch (error) {
    console.error('Error al intentar insertar el resultado del partido:', error);
    return res.status(500).json({ error: 'Error al intentar insertar el resultado del partido' });
  }
};
