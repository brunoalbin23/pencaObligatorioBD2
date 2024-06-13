import express from "express";
import { ICarrera } from "../Interfaces/ICarrera";

const router = express.Router();
let equipos: string[] =[];

router.post('/equipo', (req, res) => {
    let equipo: string = req.body.equipo;

    // Normalizamos los valores para comparación
    let registrado: boolean = equipos.some((team) => {
        return team.toUpperCase() == equipo.toUpperCase();
    });

    if (registrado) {
        res.status(400).send(`El equipo ${equipo} ya está registrado`);
    } else {
        equipos.push(equipo); // Agregamos el nuevo equipo a la lista
        res.status(200).send(`${equipo} fue registrado`);
    }
});

let carreras:ICarrera[] = [];

router.post('/carrera', (req, res) => {
    let carrera: ICarrera = {
        nombre: req.body.nombre,
        id: req.body.id
    }

    // Normalizamos los valores para comparación
    let registrado: boolean = carreras.some((carreraRegistarada) => {
        return carreraRegistarada.nombre === carrera.nombre
    });

    if (registrado) {
        res.status(400).send(`La carrera ${carrera} ya está registrada`);
    } else {
        carreras.push(carrera); // Agregamos el nuevo carrera a la lista
        res.status(200).send(`La carrera ${carrera} fue registrada`);
    }
});


export default router;