import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import connection from '../db';
import { generateAccessToken } from './Seguridad';
import { EventoObject } from '../Interfaces/EventoObject';
import { EstadioObject } from '../Interfaces/EstadioObject';
import { TipoPartidoObject } from '../Interfaces/TipoPartidoObject';

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
  const { nombre_eq1, nombre_eq2, fecha_hora, goles_eq1, goles_eq2, nombre_ev, anio_ev, id_estadio, tipo_partido } = req.body;

  // Verificar que todos los campos necesarios estén presentes
  if (!nombre_eq1 || !nombre_eq2 || !fecha_hora || !nombre_ev || !anio_ev || !id_estadio || !tipo_partido) {
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

export const selectEventos = async (req: Request, res: Response) => {
  try {
      const conn = await connection;
      const [rows] = await conn.execute('SELECT nombre, anio FROM Evento');
      
      const eventos: EventoObject[] = Object.values(rows).map((row: any) => new EventoObject(row.nombre, row.anio)); 

      res.status(200).send({'eventos': eventos});
  } catch (error) {
      console.error('Error al seleccionar eventos de la tabla Eventos:', error);
      res.status(500).send('Error al seleccionar eventos de la tabla Eventos');
  }
}

export const selectEquipos = async (req: Request, res: Response) => {
    try {
        var query = 'SELECT nombre FROM Equipo';
        if (req.query.nombre && req.query.anio) {
          query += ' JOIN Evento_Equipo ON Equipo.nombre = Evento_Equipo.nombre_eq WHERE nombre_ev = "' + req.query.nombre + '" AND anio_ev = ' + req.query.anio + ';';
        }
        const conn = await connection;
        const [rows] = await conn.execute(query);
        
        const countries: string[] = Object.values(rows).map((row: any) => row.nombre); // Corregido: usar row.nombre

        res.status(200).send({'equipos': countries});
    } catch (error) {
        console.error('Error al seleccionar países de la tabla Equipo:', error);
        res.status(500).send('Error al seleccionar países de la tabla Equipo');
    }
  }

  export const selectCarreras = async (req: Request, res: Response) => {
    try {
        const conn = await connection;
        const [rows] = await conn.execute('SELECT nombre FROM Carrera');
        
        const countries: string[] = Object.values(rows).map((row: any) => row.nombre); 

        res.status(200).send({'carreras': countries});
    } catch (error) {
        console.error('Error al seleccionar carreras de la tabla Carrera:', error);
        res.status(500).send('Error al seleccionar carreras de la tabla Carrera');
    }
  }

  export const selectTiposPartidos = async (req: Request, res: Response) => {
    try {
        const conn = await connection;
        const [rows] = await conn.execute('SELECT id, nombre FROM Tipo_Partido');
        
        const tiposPartidos: TipoPartidoObject[] = Object.values(rows).map((row: any) => new TipoPartidoObject(row.id, row.nombre)); 

        res.status(200).send({'tiposPartidos': tiposPartidos});
    } catch (error) {
        console.error('Error al seleccionar tipoPartidos de la tabla Tipo_Partido:', error);
        res.status(500).send('Error al seleccionar tipoPartidos de la tabla Tipo_Partido');
    }
  }

  export const selectEstadios = async (req: Request, res: Response) => {
    try {
        const conn = await connection;
        const [rows] = await conn.execute('SELECT id, nombre FROM Estadio');
        
        const estadios: EstadioObject[] = Object.values(rows).map((row: any) => new EstadioObject(row.id, row.nombre)); 

        res.status(200).send({'estadios': estadios});
    } catch (error) {
        console.error('Error al seleccionar estadios de la tabla Estadios:', error);
        res.status(500).send('Error al seleccionar estadios de la tabla Estadios');
    }
  }