import express from 'express'
import IAlumno from '../Interfaces/IAlumno'

const router = express.Router();
const alumnos: IAlumno[] = [];

//Logear alumno
router.post('/logear', (req, res) => {

    const nuevoAlumno: IAlumno = {
        nombre: req.body.Nombre,
        apellido: req.body.Apellido,
        fecha_nac: req.body.Date,
        ci: req.body.CI,
        carrera: req.body.Carrera,
        password: req.body.Password
    };

    // Verificar si el número de cédula ya está en uso porque lo vamos a usar como ID (creo)
    const ciEnUso = alumnos.some(alumno => alumno.ci === nuevoAlumno.ci);

    if (ciEnUso) {
        res.status(400).send("La cédula ya está en uso");
    } else {
        // Si la cédula no está en uso, agregamos el nuevo alumno a la lista (aunque luego va a ser a la BD)
        alumnos.push(nuevoAlumno);
        res.status(200).send("Usuario creado exitosamente");
    }
});

//Iniciar sesion alumno
router.post('/inicio', (req, res) => {
    let cuenta: string[] = [];
    cuenta.push(req.body.CI);
    cuenta.push(req.body.Password);
    let cuentaEncontrada: boolean = false;

    alumnos.forEach(element => {
        if (cuenta[0] == element.ci && cuenta[1] == element.password) {
            cuentaEncontrada = true;
        }
    });

    if (cuentaEncontrada) {
        res.status(200).send('Iniciando sesión');
    } else {
        res.status(400).send('Cuenta no encontrada');
    }
    console.log("Datos del primer alumno:", alumnos[0]);
    console.log("Los 2 primeros valores del array cuenta:", cuenta[0], cuenta[1]);
});



export default router;