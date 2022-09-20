const path = require("path")

// proceso cuando se llame a la ruta

// GET
exports.getHTML= (req, res)=>{
    //res.send('<h1> Formulario de Consola </h1>');
    res.sendFile(path.join(__dirname,'..', 'views', 'palindromeForm.html'))
}

// POST
exports.isPalindrome = (req, res)=>{
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
}