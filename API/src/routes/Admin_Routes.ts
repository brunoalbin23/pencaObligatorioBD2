import { Router } from "express";
import { insertarResultadoPartido, selectCountriesFromEquipos } from "../Controllers/Admin_Controller";

const router = Router();

router.post('/insertGame', insertarResultadoPartido);

router.get('/getEquipos', selectCountriesFromEquipos);

export default router; // Exportar el router correctamente
