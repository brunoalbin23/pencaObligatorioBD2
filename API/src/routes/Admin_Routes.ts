import { Router } from "express";
import { insertarEquipos,insertarEquipo, insertarEvento, selectEquipos, selectCarreras, selectTiposPartidos, selectEstadios, selectEventos, selectRanking, insertarEventoEquipo} from "../Controllers/Admin_Controller";
import { actualizarPartido} from "../Controllers/German_Controller";

const router = Router();

//router.post('/insertGame', insertarResultadoPartido);
router.post('/insertEvent', insertarEvento);
router.post('/insertTeam', insertarEquipo);
router.post('/insertTeams', insertarEquipos);
router.post('/insertGame',  ); //Del controlador German
router.post('/insertarEventoEquipo', insertarEventoEquipo); 
router.post('/actualizarPartido', actualizarPartido);

router.get('/getEquipos', selectEquipos);
router.get('/getCarreras', selectCarreras);
router.get('/getTiposPartidos', selectTiposPartidos);
router.get('/getEstadios', selectEstadios);
router.get('/getEventos', selectEventos);
router.get('/getRanking', selectRanking)


export default router; // Exportar el router correctamente
