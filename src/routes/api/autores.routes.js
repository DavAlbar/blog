const express = require('express');
const router = express.Router();
const autoresController = require('../../controllers/autores.controller');

// Obtener todos los autores
router.get('/', autoresController.getAutores);

// Crear un nuevo autor
router.post('/', autoresController.createAutor);

module.exports = router;
