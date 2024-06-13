import IAlumno from "../Interfaces/IAlumno"

const alumnos: IAlumno[] = [];

const loginAlumno = (req: { body: { Nombre: any; Apellido: any; Date: any; CI: any; Carrera: any; Password: any }; }, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }; }; })=>{
const alumno: IAlumno = {
        nombre: req.body.Nombre,
        apellido: req.body.Apellido,
        fecha_nac: req.body.Date,
        ci: req.body.CI,
        carrera: req.body.Carrera,
        password: req.body.Password
    } 
    alumnos.push(alumno);
    res.status(200).send("Usuario Creado")
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