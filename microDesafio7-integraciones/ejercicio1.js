//facturacion 

//       c->0         c->1
//f->0  html(0,0)   4000(0,1)
//f->1  css3(1,0)   5000(1,1)
//f->2  js(2,0)     10000(2,1)
//f->3  react(3,0)  7000(3,1)
//f->4  node(4,0)   15000(4,1)

//let cursosDisponibles = [["html", 4000], ["css3", 5000], ["javascript", 10000], ["react", 7000], ["nodejs", 15000]]

//let cursosDeseados = ["HTML","CSS3", "JAVASCRIPT", "NODEJS"];

//let contador = 0;

//for( let i = 0; i<nombresPrecios.length; i++){

//    for(let j = 0; j<cursosDeseados.length; j++){
        //en nombrePrecios itera la fila y la columna se queda quieta en posicion 0, para hacer la comparacion del nombre con el otro array
//        if(nombresPrecios[i][0].toUpperCase() == cursosDeseados[j]){
            //nombrePrecios[i][1] itera la fila y la columna 1 queda estatica porque se esta sacando el precio por curso
            //console.log("el curso deseado: " + cursosDeseados[j] + " se encuentra y su valor es: " + nombresPrecios[i][1])
//            contador= contador + nombresPrecios[i][1]
//        }
//    }

//}
//console.log(contador)

let cursosDisponiblesIngresados = [["html", 4000], ["css3", 5000], ["javascript", 10000], ["react", 7000], ["nodejs", 15000]]
let cursosDeseadosSeleccionados = ["HTML","CSS3", "JAVASCRIPT", "NODEJS"];

//funcion callback
function calculaMontoPagar (cursosDisponibles, cursosDeseados){
    let contador = 0;
    let cursosSeleccionadosDisponibles = "";
    //recorre el primer array
    for( let i = 0; i<cursosDisponibles.length; i++){

        for(let j = 0; j<cursosDeseados.length; j++){
            //en cursosDeseados itera la fila y la columna se queda quieta en posicion 0, para hacer la comparacion del nombre con el otro array
            if(cursosDisponibles[i][0].toUpperCase() == cursosDeseados[j]){
                //cursosDeseados[i][1] itera la fila y la columna 1 queda estatica porque se esta sacando el precio por curso
                cursosSeleccionadosDisponibles += "\n\n"+ (i+1) + ".- "+ cursosDeseados[j] 
                //console.log("el curso deseado: " + cursosDeseados[j] + " se encuentra y su valor es: " + cursosDisponibles[i][1])
                contador = contador + cursosDisponibles[i][1]
             }
        }

    }    
        return {cursosSeleccionadosDisponibles, contador}; 
}

//console.log(calculaMontoPagar(nombresPrecios, cursosDeseados))

function imprimeDatos(nombre, apellido, cursosDisponibles, cursosDeseados, callbackMontoPagar){

    let reporte = callbackMontoPagar(cursosDisponibles, cursosDeseados)
    return "Estimado " + nombre + " " + apellido + " en funcion de los cursos seleccionados son:" + reporte.cursosSeleccionadosDisponibles + " \n\n" +"El monto total a pagar es: $" + reporte.contador + " \n\n" +"Bienvenido a la gran aventura Digital House" + "\n"
}

console.log(imprimeDatos("Luis", "Fuentes", cursosDisponiblesIngresados, cursosDeseadosSeleccionados, calculaMontoPagar))