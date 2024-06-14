import express from "express";

const router = express.Router();

let empresas: any[] = [];

router.post('/postEmpresa', (req, res)=> {
    const empresasPorNombre = empresas.filter((e) => e.nombre === req.body.nombre);
    if (empresasPorNombre.length === 0) {
        const empresa: any = {
            nombre: req.body.nombre,
            sitioWeb: req.body.sitioWeb,
            notas: req.body.Carrera
        }
        empresas.push(empresa);
        res.status(200).send("Empresa creada");
    } else {
        res.status(400).send({ message: 'Empresa no añadida. Cambie el nombre.' })
    }
})