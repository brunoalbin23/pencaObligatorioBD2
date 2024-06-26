import { Router } from "express";
import { register } from "../Controllers/Alumno_Controller";

const router = Router();

router.post('/register', register);

export default router;