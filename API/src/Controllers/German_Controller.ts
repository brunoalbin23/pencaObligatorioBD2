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



export const insertarPartido = async (req: Request, res: Response) => {
    const { nombre_eq1, nombre_eq2, fecha_hora, nombre_ev, anio_ev, estadio, tipo_partido } = req.body;
    // Verificar que todos los campos necesarios estén presentes
    if (!nombre_eq1 || !nombre_eq2 || !fecha_hora || !nombre_ev || !anio_ev || !estadio || !tipo_partido) {
      console.log(req.body);
      return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }
    try {
      const conn = await connection;
  
      // Obtener el ID del estadio a partir del nombre
      const [estadioRows] = await conn.execute('SELECT id FROM Estadio WHERE nombre = ?', [estadio]);
      //console.log('El estadio es: '+{estadioRows});
      if (Object.values(estadioRows).length === 0) {
        return res.status(404).json({ error: 'Estadio no encontrado' });
      }
      const id_estadio = Object.values(estadioRows)[0].id;
  
      // Obtener el ID del tipo de partido a partir del nombre
      const [tipoPartidoRows] = await conn.execute('SELECT id FROM Tipo_Partido WHERE nombre = ?', [tipo_partido]);
      if (Object.values(tipoPartidoRows).length === 0) {
        return res.status(404).json({ error: 'Tipo de partido no encontrado' });
      }
      const id_tipo = Object.values(tipoPartidoRows)[0].id;
  
      // Insertar el resultado del partido
      await conn.execute('INSERT INTO Partido (nombre_eq1, nombre_eq2, fecha_hora, nombre_ev, anio_ev, id_estadio, id_tipo) VALUES (?, ?, ?, ?, ?, ?, ?)', [nombre_eq1, nombre_eq2, fecha_hora, nombre_ev, anio_ev, id_estadio, id_tipo]);
  
      return res.status(201).json({ message: 'Partido insertado exitosamente' });
    } catch (error) {
      console.error('Error al intentar insertar partido:', error);
      return res.status(500).json({ error: 'Error al intentar insertar partido' });
    }
  };
  //AL FIN SALIOOOO LPM!!!!!
  //PARA ACTUALIZAR RESULTADO PRIMERO HAY QUE FILTRAR EN UN METODO POR año y evento en la tabla evento (elegidos con el seleccionar)
  //Luego con otro metodo hay que seleccionar dentro de los partidos de ese evento
  //y una vez seleccionado el partido filtrando por su pk (WHERE PK= blablabla) actualizar los goles
  
  export const  actualizarPartido = async (req: Request, res: Response) => {
    try {
      const {nombre_eq1, nombre_eq2, fecha_hora, g1, g2, nombre_ev, anio_ev} = req.body;
      console.log(req.body);
      if(!nombre_eq1 || !nombre_eq2 || !fecha_hora || !g1 || !g2){
         res.status(400).json({error: 'Falta ingrersar datos'}); //luego le pongo return
      }
        const conn = await connection;
        const query = 'UPDATE Partido SET goles_eq1 = ?, goles_eq2= ? WHERE nombre_eq1 = ? AND nombre_eq2 = ? AND fecha_hora = ?;'
             
        await conn.execute(query, [g1, g2, nombre_eq1, nombre_eq2, fecha_hora]);

        await conn.execute('UPDATE Prediccion_Partido opp JOIN Partido p ON opp.nombre_eq1 = p.nombre_eq1 AND opp.nombre_eq2 = p.nombre_eq2 AND opp.fecha_hora_partido = p.fecha_hora SET opp.Puntaje = 4 WHERE p.nombre_ev = ? AND p.anio_ev = ? AND opp.prediccion_eq1 = p.goles_eq1 AND opp.prediccion_eq2 = p.goles_eq2;',[nombre_ev, anio_ev]);
        await conn.execute('UPDATE Prediccion_Partido opp JOIN Partido p ON opp.nombre_eq1 = p.nombre_eq1 AND opp.nombre_eq2 = p.nombre_eq2 AND opp.fecha_hora_partido = p.fecha_hora SET opp.Puntaje = 2 WHERE p.goles_eq1 IS NOT NULL AND p.nombre_ev = ? AND p.anio_ev = ? AND (((opp.prediccion_eq1 > opp.prediccion_eq2 AND p.goles_eq1 > p.goles_eq2) OR (opp.prediccion_eq1 = opp.prediccion_eq2 AND p.goles_eq1 = p.goles_eq2) OR (opp.prediccion_eq1 < opp.prediccion_eq2 AND p.goles_eq1 < p.goles_eq2) ) AND (opp.prediccion_eq1 <> p.goles_eq1 OR opp.prediccion_eq2 <> p.goles_eq2));',[nombre_ev, anio_ev]);
        await conn.execute('UPDATE Prediccion_Partido opp JOIN Partido p ON opp.nombre_eq1 = p.nombre_eq1 AND opp.nombre_eq2 = p.nombre_eq2 AND opp.fecha_hora_partido = p.fecha_hora SET opp.Puntaje = 0 WHERE p.goles_eq1 IS NOT NULL AND p.nombre_ev = ? AND p.anio_ev = ? AND ((opp.prediccion_eq1 > opp.prediccion_eq2 AND p.goles_eq1 < p.goles_eq2) OR (opp.prediccion_eq1 < opp.prediccion_eq2 AND p.goles_eq1 > p.goles_eq2) OR (opp.prediccion_eq1 = opp.prediccion_eq2 AND p.goles_eq1 <> p.goles_eq2) OR (opp.prediccion_eq1 <> opp.prediccion_eq2 AND p.goles_eq1 = p.goles_eq2));',[nombre_ev, anio_ev]);
        await conn.execute('UPDATE Prediccion_Evento_Equipo ope JOIN Evento_Equipo ev_eq ON ope.nombre_ev = ev_eq.nombre_ev AND ope.anio_ev = ev_eq.anio_ev AND ope.nombre_eq = ev_eq.nombre_eq SET puntaje = 10 WHERE ev_eq.nombre_ev = ? AND ev_eq.anio_ev = ?  AND ope.prediccion = 1 AND ope.prediccion = ev_eq.posicion;',[nombre_ev, anio_ev]);
        await conn.execute('UPDATE Prediccion_Evento_Equipo ope JOIN Evento_Equipo ev_eq ON ope.nombre_ev = ev_eq.nombre_ev AND ope.anio_ev = ev_eq.anio_ev AND ope.nombre_eq = ev_eq.nombre_eq SET puntaje = 5 WHERE ev_eq.nombre_ev = ? AND ev_eq.anio_ev = ?  AND ope.prediccion = 2 AND ope.prediccion = ev_eq.posicion;',[nombre_ev, anio_ev]);
        res.status(200).json({message:'Partido actualizado con exito'});

    } catch (error) {
        console.error('Error al seleccionar carreras de la tabla Carrera:', error);
        res.status(500).send('Error al seleccionar carreras de la tabla Carrera');
    }
  }