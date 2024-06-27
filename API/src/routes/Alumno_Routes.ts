import { Router } from "express";

<<<<<<< HEAD
import { insertarPrediccionPartido, login, register, selectPartidos, selectPartidosAdmin } from "../Controllers/Alumno_Controller";
=======
import { insertarPrediccionPartido, login, register, selectPartidos, selectPartidosPasados } from "../Controllers/Alumno_Controller";
import { selectEventoTerminados } from "../Controllers/German_Controller";
>>>>>>> cc70b77a094e1cf752f7e76e82ed32f1bfb5c8ae

const router = Router();

router.post('/register', register);
router.post('/inicio', login);
<<<<<<< HEAD
router.post('/ingresarPrediccionPartido', insertarPrediccionPartido)
router.get('/getPartidos', selectPartidos)
router.get('/getPartidosAdmin', selectPartidosAdmin)
=======
router.post('/ingresarPrediccionPartido', insertarPrediccionPartido);
router.get('/getPartidos', selectPartidos);
router.get('/eventosTerminados', selectEventoTerminados);
router.get('/getPartidosPasados', selectPartidosPasados)
>>>>>>> cc70b77a094e1cf752f7e76e82ed32f1bfb5c8ae

export default router;