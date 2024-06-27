import { Router } from "express";

import { insertarPrediccionPartido, login, register, selectPartidos } from "../Controllers/Alumno_Controller";

const router = Router();

router.post('/register', register);
router.post('/inicio', login);
router.post('/ingresarPrediccionPartido', insertarPrediccionPartido)
router.get('/getPartidos', selectPartidos)

export default router;