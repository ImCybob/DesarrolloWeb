const express = require('express');
const router = express.Router();
const consolaController = require('../controllers/consola')

//CRUD (create, read, update, delelte)
//Formulario
router.get('/altaConsola', consolaController.getAltaConsola);

//Procesar Form data
router.post('/altaConsola', consolaController.postAltaConsola);

//Consular datos
router.get('/consultaConsola', consolaController.getConsultaConsola);

module.exports = router