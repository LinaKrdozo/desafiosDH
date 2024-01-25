//alquiler de un vehículo
let valorDiaVehiculo;
let valorAlquiler;
let valorSillaBebe;
let totalSillaBebe;

function alquilerVehiculo(tipoVehiculo, diasAlquiler,sillaBebe ){
    
    if(tipoVehiculo == 'compacto'){
        valorDiaVehiculo = 14000;
    }else if(tipoVehiculo == 'mediano'){
        valorDiaVehiculo = 17000;
    }else if(tipoVehiculo == 'camioneta'){
        valorDiaVehiculo = 28000;
    }

    let leyendaSilla;

    if(sillaBebe == false){
        valorSillaBebe=0;
        leyendaSilla = " el vehiculo no incluye silla de bebe. "
    }else if(sillaBebe == true){
        valorSillaBebe=1200;
        leyendaSilla = " el vehiculo incluye silla de bebe. " 
    }

    totalSillaBebe = valorSillaBebe * diasAlquiler;
    valorAlquiler = (valorDiaVehiculo * diasAlquiler)+totalSillaBebe;

    return "Estimado cliente: en base al tipo de vehículo "+  tipoVehiculo + " considerando los " + diasAlquiler + 
    " días utilizados, el monto total a pagar es de $" +  valorAlquiler + leyendaSilla;

}

console.log(alquilerVehiculo('mediano', 3, true));