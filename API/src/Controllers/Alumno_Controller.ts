//import IAlumno from "../Interfaces/IAlumno"
import express, { Request, Response } from 'express';
//import { generateAccessToken } from "./Seguridad";
import bodyParser from "body-parser";
import connection from "../db";
import { generateAccessToken } from './Seguridad';
import { IPartido } from '../Interfaces/IPartido';
import { IPartidoPasado } from '../Interfaces/IPartidoPasado';

const app = express();
app.use(bodyParser.json());
app.use(express.json());//middleware, aunque este no se si es necesario

// Función para verificar si el ID de usuario ya existe
const isUserIdTaken = async (ci: number): Promise<boolean> => {
    try {
      const conn = await connection;
      const [rows] = await conn.execute('SELECT COUNT(*) AS count FROM Usuario WHERE id = ?', [ci]);
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
  const registerUserAndStudent = async (ci: number, password: string, nombre: string, apellido: string, fechaNac: string, id_carrera: number, fecha_ini: String): Promise<void> => {
    const conn = await connection;
    try {
      await conn.beginTransaction();
  
      // Insertar en la tabla usuario
      await conn.execute('INSERT INTO Usuario (id, contrasenia) VALUES (?, ?)', [ci, password]);
  
      // Insertar en la tabla alumno
      await conn.execute('INSERT INTO Alumno (CI, nombre, apellido, fecha_nac) VALUES (?, ?, ?, ?)', [ci, nombre, apellido, fechaNac]);

      // Insertar tabla carrera_alumno
      await conn.execute('INSERT INTO Alumno_Carrera (id_carrera, CI, fecha_ini, fecha_ult_act) VALUES (?, ?, ?, ?)', [id_carrera, ci, fecha_ini, fecha_ini]);
      //Aca no le mando una respesta porque se la adjunto luego en register cuando uso este metodo y IsUserIdTaken juntos
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
    const { ci, password, nombre, apellido, fechaNac, id_carrera, fecha_ini } = req.body;
    if (!ci || !password || !nombre || !apellido || !fechaNac || !id_carrera || !fecha_ini) {
      return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }
  
    try {
      const userIdTaken = await isUserIdTaken(ci);
      if (userIdTaken) {
        return res.status(409).json({ error: 'ID de usuario ya en uso' });
      }
  
      await registerUserAndStudent(ci, password, nombre, apellido, fechaNac, id_carrera, fecha_ini);
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
    const { id, password } = req.body; //seria cedula pero lo dejo con id porque es representativo de usuario

    if (!id || !password) {
      return res.status(400).json({ error: 'Cédula de usuario y contraseña son requeridos' });
    }
  
    try {
      const conn = await connection;
      const [rows] = await conn.execute('SELECT id FROM Usuario WHERE id = ? AND contrasenia = ?', [id, password]);
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

  export const insertarPrediccionPartido = async (req: Request, res: Response) => {
    const { ci, nombre_eq1, nombre_eq2, prediccion_eq1, prediccion_eq2, fecha_hora } = req.body;
    // Verificar que todos los campos necesarios estén presentes
    if (!ci || !nombre_eq1 || !nombre_eq2 || !prediccion_eq1 || !prediccion_eq2 || !fecha_hora) {
      return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }
  
    try {
      const conn = await connection;

      var [rows] = await conn.execute('SELECT 1 as existe FROM Prediccion_Partido WHERE CI = ? AND nombre_eq1 = ? AND nombre_eq2 = ? AND fecha_hora_partido = ?', [ci, nombre_eq1, nombre_eq2, fecha_hora]);
      const check = Object.values(rows).map((row: any) => row.existe);
      if (check[0] != 1) {
        [rows] = await conn.execute('SELECT fecha_ini FROM Alumno_Carrera WHERE CI = ? ORDER BY fecha_ini DESC LIMIT 1;', [ci])

        const result: String[] = Object.values(rows).map((row: any) => row.fecha_ini)
        await conn.execute('INSERT INTO Prediccion_Partido (CI, fecha_ini_car, nombre_eq1, nombre_eq2, fecha_hora_partido, prediccion_eq1, prediccion_eq2) VALUE (?, ?, ?, ?, ?, ?, ?);', [ci, result[0], nombre_eq1, nombre_eq2, fecha_hora, prediccion_eq1, prediccion_eq2]);
      } else {
        await conn.execute('UPDATE Prediccion_Partido SET prediccion_eq1 = ?, prediccion_eq2 = ? WHERE nombre_eq1 = ? AND nombre_eq2 = ? AND CI = ? AND fecha_hora_partido = ?;', [prediccion_eq1, prediccion_eq2, nombre_eq1, nombre_eq2, ci, fecha_hora])
      }
  
      return res.status(201).json({ message: 'prediccion de partido registrada exitosamente' });
    } catch (error) {
      console.error('Error al intentar insertar predicción de partido:', error);
      return res.status(500).json({ error: 'Error al intentar insertar la predicción de partido' });
    }
  };

  export const selectPartidos = async (req: Request, res: Response) => {
    try {
        var query = 'SELECT nombre_eq1, nombre_eq2, fecha_hora, id_tipo, id_estadio FROM Partido';
        if (req.query.nombre && req.query.anio) {
          query += ' WHERE nombre_ev = "' + req.query.nombre + '" AND anio_ev = ' + req.query.anio + ' AND DATE_SUB(fecha_hora, INTERVAL 1 HOUR) > NOW();';
        }
        const conn = await connection;
        const [rows] = await conn.execute(query);
        
        const partidos: IPartido[] = Object.values(rows).map((row: any) => new IPartido(row.nombre_eq1, row.nombre_eq2, row.fecha_hora, row.id_tipo, row.id_estadio)); // Corregido: usar row.nombre

        res.status(200).send({'partidos': partidos});
    } catch (error) {
        console.error('Error al seleccionar países de la tabla Equipo:', error);
        res.status(500).send('Error al seleccionar países de la tabla Equipo');
    }
  }

  export const selectPartidosPasados = async (req: Request, res: Response) => {
    try {
        var query = 'SELECT pp.nombre_eq1, pp.nombre_eq2, p.fecha_hora, pp.puntaje FROM Prediccion_Partido';
        if (req.query.nombre && req.query.anio && req.query.ci) {
          query += ' pp JOIN Partido p ON pp.nombre_eq1 = p.nombre_eq1 AND pp.nombre_eq2 = p.nombre_eq2 AND pp.fecha_hora_partido = p.fecha_hora WHERE puntaje IS NOT NULL AND CI = ' + req.query.ci + ' AND nombre_ev = "' + req.query.nombre + '" AND anio_ev = ' + req.query.anio + ';';
        }
        const conn = await connection;
        const [rows] = await conn.execute(query);
        
        const partidos: IPartidoPasado [] = Object.values(rows).map((row: any) => new IPartidoPasado(row.nombre_eq1, row.nombre_eq2, row.fecha_hora, row.puntaje)); // Corregido: usar row.nombre

        res.status(200).send({'partidos': partidos});
    } catch (error) {
        console.error('Error al seleccionar países de la tabla Equipo:', error);
        res.status(500).send('Error al seleccionar países de la tabla Equipo');
    }
  }