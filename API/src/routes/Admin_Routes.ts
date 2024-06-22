import { Router } from "express";
import { insertarResultadoPartido, selectEquipos, selectEvent } from "../Controllers/Admin_Controller";

const router = Router();

router.post('/insertGame', insertarResultadoPartido);
router.post('/insertEvent', insertarEvento);
router.post('/insertTeam', insertarEquipo);

router.get('/getEquipos', selectEquipos);

router.get('/getEventos', selectEvent);

export default router; // Exportar el router correctamente
