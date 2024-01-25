let fs = require('fs');

function importarArchivoBicicletas(){
    //importo el archivo .json y se lee al invocar la funcion
    let datosBicicletas = fs.readFileSync(__dirname + '/bicicletas.json', 'utf8');
    //convertimos el objeto json a tipo array con parse
    let listadoBicicletas = JSON.parse(datosBicicletas);
    return listadoBicicletas
}

//console.log(importarArchivoBicicletas())

module.exports = importarArchivoBicicletas;