//venta de comida rápida.

function totalPagar(tipoHamburguesa, jamon, queso,salsaDeTomate,mayonesa,mostaza, tomate, lechuga,cebolla){

    let valorHamburguesa;
    let valorFinal;

    if(tipoHamburguesa == "carne"){
        valorHamburguesa = 1800
    }else if(tipoHamburguesa == "pollo"){
        valorHamburguesa = 1500
    }else if(tipoHamburguesa == "vegetariana"){
        valorHamburguesa = 1200
    }

    let valorIngredientes = 0;

    if(jamon){
        valorIngredientes += 30;
    }
    if(queso){
        valorIngredientes += 25; 
    }
    if(salsaDeTomate){
        valorIngredientes += 5;
    }
    if(mayonesa){
        valorIngredientes += 5;
    }
    if(mostaza){
        valorIngredientes += 5;
    }
    if(tomate){
        valorIngredientes += 15;
    }
    if(lechuga){
        valorIngredientes += 10;
    }
    if(cebolla){
        valorIngredientes += 10;
    }
    
    console.log("valor ingredientes: $"+ valorIngredientes)
    valorFinal = valorHamburguesa + valorIngredientes;
    return valorFinal
}

//console.log(totalPagar("carne", true, true,false,true,false,true,true,false));

//se pone total en lugar de callback con el fin de saber ese callback a que funcion se refiere , en este caso se refiere a la unica funcion que hay que es totalPagar
function mensaje(nombre, apellido,tipoHamburguesa, jamon, queso,salsaDeTomate,mayonesa,mostaza, tomate, lechuga,cebolla, total){
    return 'estimado ' + nombre + " " + apellido + " el monto total a pagar es de $" + total(tipoHamburguesa, jamon, queso,salsaDeTomate,mayonesa,mostaza, tomate, lechuga,cebolla)
}

console.log(mensaje('Daniel', 'fuentes', "carne", true, true,true,true,true,true,true,true,totalPagar))