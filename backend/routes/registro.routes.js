const express = require('express');
const router = express.Router();
const registroController = require('../controllers/registro.controller');

// Ruta para registrar usuario
router.post('/registro', registroController.registrarUsuario);

module.exports = router;
