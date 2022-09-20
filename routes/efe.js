const express = require('express');
const router = express.Router();
const efeController = require('../controllers/efe')

//CRUD (create, read, update, delelte)
//Formulario
router.get('/get', efeController.getHTML);

//Procesar Form data
router.post('/post', efeController.isEfe);

module.exports = router