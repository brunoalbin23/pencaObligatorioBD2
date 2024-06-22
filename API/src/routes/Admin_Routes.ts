import { Router } from "express";
import { insertarResultadoPartido, insertarEvento, insertarEquipo } from "../Controllers/Admin_Controller";

const router = Router();

router.post('/insertGame', insertarResultadoPartido);
router.post('/insertEvent', insertarEvento);
router.post('/insertTeam', insertarEquipo);

export default router; // Exportar el router correctamente
