//import IAlumno from "../Interfaces/IAlumno"
import express, { Request, Response } from 'express';
//import { generateAccessToken } from "./Seguridad";
import bodyParser from "body-parser";
import connection from "../db";
import { generateAccessToken } from './Seguridad';

const app = express();
app.use(bodyParser.json());
app.use(express.json());//middleware, aunque este no se si es necesario

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
  export const register =  async (req: Request, res: Response) => {
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
  };




  // Función para iniciar sesión
export const login = async (req: Request, res: Response) => {
    const { id, password } = req.body;
  
    if (!id || !password) {
      return res.status(400).json({ error: 'ID de usuario y contraseña son requeridos' });
    }
  
    try {
      const conn = await connection;
      const [rows] = await conn.execute('SELECT * FROM Usuario WHERE id = ? AND contrasenia = ?', [id, password]);
      const count = (rows as any)[0].count;
        
      if (count===0) {
        return res.status(401).json({ error: 'Credenciales incorrectas' });
      }
  
      // Si las credenciales son correctas, generar token de acceso
      const accessToken = generateAccessToken(id); // Suponiendo que 'id' es único y se utiliza como usuario en el token
      return res.status(200).json({ accessToken: accessToken });
    } catch (error) {
      console.error('Error al intentar iniciar sesión:', error);
      return res.status(500).json({ error: 'Error al intentar iniciar sesión' });
    }
  };