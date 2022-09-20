//imports
const express = require('express');
const path = require('path');
const consolaRoutes = require('./routes/consola')
const palindromeRoutes = require('./routes/palindrome')
const efeRoutes = require ('./routes/efe')

const bodyParser = require("body-parser")

const app = express();

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')));
app.use('/consola', consolaRoutes);
app.use('/palindrome', palindromeRoutes);
app.use('/efe', efeRoutes);

app.use(bodyParser.urlencoded({
    extended:true
}));

//Definición de la aplicación
app.get('/jacky', (request,response)=> {
    console.log('Wenas mundo'); //en la consola del servidor
    response.send('<h1>wenas mundo</h1>'); //en el front end
});

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get('/home', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views', 'pagina1.html'))
})

//Tarea 1
app.get('/tarea1', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views', 'tarea1.html'))
})

//prueba query
app.get('/prueba1', (req,res)=>{
    console.log(req.query);
    res.send("Datos query: " + req.query.name);
})

//prueba params
app.get('/prueba2/:name/:age', (req,res)=>{
    console.log(req.params);
    res.send("Datos params: " + req.params.name + ", " + req.params.age);
})

//prueba post
app.post('/prueba3', (req,res)=>{
    console.log(req.body);
    res.send("Recibido");
})


//Lanazar app
app.listen(8080, ()=> {  //puerto donde se lanza la app
    console.log("Servidor en linea");
}) ;