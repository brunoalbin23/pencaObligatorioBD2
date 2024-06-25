import { Router } from "express";
import { insertarEquipo, insertarEvento, selectEquipos, selectEvent } from "../Controllers/Admin_Controller";
import { insertarPartido } from "../Controllers/German_Controller";

const router = Router();

//router.post('/insertGame', insertarResultadoPartido);
router.post('/insertEvent', insertarEvento);
router.post('/insertTeam', insertarEquipo);
router.post('/insertGame', insertarPartido); //Del controlador German

router.get('/getEquipos', selectEquipos);

router.get('/getEventos', selectEvent);

export default router; // Exportar el router correctamente
