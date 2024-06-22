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
    
    // Verificar en la tabla Admin que este registrado previamente (las cuentas admin se hardcodean)
    const [rowsAdmin] = await conn.execute('SELECT * FROM Admin WHERE id = ?', [id]);
    
    // Verificar la cantidad de filas devueltas por la consulta SELECT
    if ((rowsAdmin as any).rowCount === 0) {
      return res.status(401).json({ error: 'No tienes permisos de administrador' });
    }

    // Si las credenciales son correctas y es administrador, generar token de acceso qu esperemos que funcione
    const accessToken = generateAccessToken(id); // Suponiendo que el 'id' (en este caso es la cedula) es único, se utiliza como usuario en el token
    return res.status(200).json({ accessToken: accessToken });
  } catch (error) {
    console.error('Error al intentar iniciar sesión:', error);
    return res.status(500).json({ error: 'Error al intentar iniciar sesión' });
  }
};



//INSERTAR EVENTO
export const insertarEvento = async (req: Request, res: Response) => {
    const { nombre, anio } = req.body;
  
    // Verificar que todos los campos necesarios estén presentes
    if (!nombre || !anio) {
      return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }
  
    try {
      const conn = await connection;
      await conn.execute('INSERT INTO Evento (nombre, anio) VALUES (?, ?)', [nombre, anio]);
  
      return res.status(201).json({ message: 'evento registrado exitosamente' });
    } catch (error) {
      console.error('Error al intentar intentar insertar el evento:', error);
      return res.status(500).json({ error: 'Error al intentar insertar el evento' });
    }
  };

//INSERTAR EQUIPO
export const insertarEquipo = async (req: Request, res: Response) => {
  const { nombre} = req.body;

  // Verificar que todos los campos necesarios estén presentes
  if (!nombre) {
    return res.status(400).json({ error: 'Ingrese el nombre del equipo' });
  }

  try {
    const conn = await connection;
    await conn.execute('INSERT INTO Equipo (nombre) VALUE (?)', [nombre]);

    return res.status(201).json({ message: 'equipo registrado exitosamente' });
  } catch (error) {
    console.error('Error al intentar intentar insertar el equipo:', error);
    return res.status(500).json({ error: 'Error al intentar insertar el equipo' });
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



export const selectCountriesFromEquipos = async (): Promise<string[]> => {
    try {
        const conn = await connection;
        const [rows] = await conn.execute('SELECT DISTINCT nombre FROM Equipo');
        
        const countries: string[] = Object.values(rows).map((row: any) => row.nombre); // Corregido: usar row.nombre

        return countries;
    } catch (error) {
        console.error('Error al seleccionar países de la tabla Equipo:', error);
        throw new Error('Error al seleccionar países de la tabla Equipo');
    }
};
        //FUNCION PARA PROBAR POR CONSOLA QUE DEVUELVE SelectCoutriesFromEquipo (x alguna razon a pesar de parsearlos tiraba undefined)
export const obtenerPaises = async () => {
    try {
        const paises = await selectCountriesFromEquipos();
        console.log('Paises obtenidos:', paises);
    } catch (error) {
        console.error('Error al obtener los países:', error);
    }
};

