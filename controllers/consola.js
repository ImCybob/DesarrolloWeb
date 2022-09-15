const path = require("path")

// proceso cuando se llame a la ruta
exports.getAltaConsola= (req, res)=>{
    //res.send('<h1> Formulario de Consola </h1>');
    res.sendFile(path.join(__dirname,'..', 'views', 'formulario.html'))
}

exports.postAltaConsola = (req, res)=>{
    console.log(req.body);
    res.json({estado:"exitosoooo"});
}

exports.getConsultaConsola = (req, res) => {
    res.send('<h1> Datos de la consola </h1>');

}