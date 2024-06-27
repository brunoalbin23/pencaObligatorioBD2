import { Router } from "express";

import { insertarPrediccionPartido, login, register, selectPartidos } from "../Controllers/Alumno_Controller";
import { selectEventoTerminados } from "../Controllers/German_Controller";

const router = Router();

router.post('/register', register);
router.post('/inicio', login);
router.post('/ingresarPrediccionPartido', insertarPrediccionPartido);
router.get('/getPartidos', selectPartidos);
router.get('/eventosTerminados', selectEventoTerminados);

export default router;