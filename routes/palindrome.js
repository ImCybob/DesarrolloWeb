const express = require('express');
const router = express.Router();
const palindromeController = require('../controllers/palindrome')

//CRUD (create, read, update, delelte)
//Formulario
router.get('/get', palindromeController.getHTML);

//Procesar Form data
router.post('/post', palindromeController.isPalindrome);

module.exports = router