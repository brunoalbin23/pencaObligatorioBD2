import { Router } from "express";
import { login, register } from "../Controllers/Alumno_Controller";

const router = Router();

router.post('/register', register);
router.post('/inicio', login);

export default router;