let fs = require('fs');

function cargarArchivo(archivo){
    let lecturaDeArchivo = fs.readFileSync(__dirname + '/' + archivo, 'utf8')
    let  archivoArray= JSON.parse(lecturaDeArchivo)    
    return archivoArray
}

    
function importar(marca) {
    let arrayElementos1 = cargarArchivo('datos/figuras1.json')
    let arrayElementos2 = cargarArchivo('datos/figuras2.json')
    let arrayElementos3 = cargarArchivo('datos/figuras3.json')

    let arrayElementos = [...arrayElementos1, ...arrayElementos2, ...arrayElementos3]

    let atributo = arrayElementos.filter((elemento) => elemento.marca == marca )

    return atributo
}

 
console.log(importar());
//console.log(fs.readdirSync(__dirname + '/datos'))

module.exports = {importar};