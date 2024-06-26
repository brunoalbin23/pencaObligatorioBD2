import { Router } from "express";
import { insertarEquipo, insertarEvento, selectEquipos, selectCarreras, selectTiposPartidos, selectEstadios, selectEventos, selectRanking, insertarEventoEquipo} from "../Controllers/Admin_Controller";
import { insertarPartido } from "../Controllers/German_Controller";

const router = Router();

//router.post('/insertGame', insertarResultadoPartido);
router.post('/insertEvent', insertarEvento);
router.post('/insertTeam', insertarEquipo);
router.post('/insertGame', insertarPartido); //Del controlador German
router.post('/insertarEventoEquipo', insertarEventoEquipo);

router.get('/getEquipos', selectEquipos);
router.get('/getCarreras', selectCarreras);
router.get('/getTiposPartidos', selectTiposPartidos);
router.get('/getEstadios', selectEstadios);
router.get('/getEventos', selectEventos);
router.get('/getRanking', selectRanking)

export default router; // Exportar el router correctamente
