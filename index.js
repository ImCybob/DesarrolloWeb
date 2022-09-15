//imports
const express = require('express');
const path = require('path');
const consolaRoutes = require('./routes/consola')
const bodyParser = require("body-parser")

const app = express();

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')));
app.use('/consola', consolaRoutes);
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

//tarea 3
//efe
app.get('/efe', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views', 'efeForm.html'))
})

app.post('/efe', (req,res)=>{
    console.log(req.body);
    var inputEfe = String(req.body.inputEfe);
    var lengthE = inputEfe.length;
    var fraseEfe = [];
    var n = 0;
    for(i=0;i<lengthE;i++){
        var letra = inputEfe[i];
        fraseEfe[n] = letra;
        if (letra == 'a' || letra == 'e'|| letra == 'i' ||letra == 'o' || letra == 'u') {
            if(inputEfe[i+1]=='f' && inputEfe[i+2]==letra){
                i+=2;
            }
        }
        n++;
    }
    res.send(fraseEfe.join(''));
})

//palindrome
app.get('/palindrome', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views', 'palindromeForm.html'))
})

app.post('/palindrome', (req,res)=>{
    console.log(req.body);
    var inputPal = String(req.body.inputPal);
    var lengthP = inputPal.length;
    var palindrome = true;

    for(i=0;i<lengthP/2;i++){
        if(inputPal[i] != inputPal[lengthP-i-1]){
            //console.log(inputPal[i] +' '+ inputPal[lengthP-i-1])
            palindrome = false;
            break;
        } else {
            //console.log(inputPal[i] +' '+ inputPal[lengthP-i-1])
        }
    }
    if(palindrome==true){
        res.send("palíndromo")
    } else {
        res.send("no es palíndromo")
    }
    
})

//Lanazar app
app.listen(8080, ()=> {  //puerto donde se lanza la app
    console.log("Servidor en linea");
}) ;