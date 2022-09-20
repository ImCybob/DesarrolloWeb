const path = require("path")

// proceso cuando se llame a la ruta

// GET
exports.getHTML= (req, res)=>{
    res.sendFile(path.join(__dirname,'..', 'views', 'efeForm.html'))
}

// POST
exports.isEfe = (req, res)=>{
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
}