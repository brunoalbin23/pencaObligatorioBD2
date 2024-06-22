import { Router } from "express";
import { insertarResultadoPartido } from "../Controllers/Admin_Controller";

const router = Router();

router.post('/insertGame', insertarResultadoPartido);

export default router; // Exportar el router correctamente
