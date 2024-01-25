//alquiler de un vehículo
let valorDia;
let valorAlquiler;
let valorSillaBebe = 1200;
let totalSillaBebe;

function alquilerVehiculo(tipoVehiculo, diasAlquiler,sillaBebe ){
    
    if(tipoVehiculo == 'compacto' && sillaBebe == true){
        valorDia = 14000;
        totalSillaBebe = valorSillaBebe * diasAlquiler;
        valorAlquiler = (valorDia * diasAlquiler)+totalSillaBebe;
        return valorAlquiler
    }else if(tipoVehiculo == 'compacto'){
        valorDia = 14000;
        return valorDia * diasAlquiler
    }
    
    //************************** */

    if(tipoVehiculo == 'mediano' && sillaBebe == true){
        valorDia = 17000;
        totalSillaBebe = valorSillaBebe * diasAlquiler;
        valorAlquiler = (valorDia * diasAlquiler)+totalSillaBebe;
        return valorAlquiler
    }else if(tipoVehiculo == 'mediano'){
        valorDia = 17000;
        return valorDia * diasAlquiler
    }

    //************************************** */
    
    if(tipoVehiculo == 'camioneta' && sillaBebe == true){
        valorDia = 28000;
        totalSillaBebe = valorSillaBebe * diasAlquiler;
        valorAlquiler = (valorDia * diasAlquiler)+totalSillaBebe;
        return valorAlquiler
    }else if(tipoVehiculo == 'camioneta'){
        valorDia = 28000;
        return valorDia * diasAlquiler
    }
 
}

console.log(alquilerVehiculo('mediano', 3, true));