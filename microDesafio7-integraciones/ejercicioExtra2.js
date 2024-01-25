let cursosDePagoIngresados = [["html","css3", "javascript", "react", "nodejs"],[4000,5000, 10000, 7000, 15000]]
let cursosDeseadosIngresados = ["HTML", "JAVASCRIPT", "CSS3", "NODEJS"]
let precioTotal=0;
let cursosMayuscula = []
let cursosSeleccionados = ""


function calculaMontoDePago(cursosDePago, cursosDeseados){
    //convirtiendo el primer elemento del array cursosPago a mayusculas
    for (let j = 0; j < cursosDePago[0].length; j++) {
        cursosMayuscula.push(cursosDePago[0][j].toUpperCase())
    }
    console.log(cursosMayuscula)
    let contador = 0;
    //haciendo la comparacion con el array de cursos deseados
    for(let i = 0; i<cursosDeseados.length; i++){
        
        let indicesCursosDeseados = cursosMayuscula.indexOf(cursosDeseados[i])
    
        if(indicesCursosDeseados > -1){
             contador ++;
             precioTotal = precioTotal + cursosDePago[1][indicesCursosDeseados];
             cursosSeleccionados += "\n\n"+ (contador) + ".- "+ cursosMayuscula[indicesCursosDeseados]  
        }   
    }
    return {cursosSeleccionados,precioTotal}
}

//console.log(calculaMontoDePago(cursosDePagoIngresados, cursosDeseadosIngresados))

function imprimirDatos(nombre, apellido, cursosDePago, cursosDeseados, callbackMontoDePago){
    let reporteDatos = callbackMontoDePago(cursosDePago, cursosDeseados);
    return "Estimado " + nombre + " " + apellido + ", en funcion de los cursos seleccionados"+"\n"+ reporteDatos.cursosSeleccionados + "\n\n" + "El monto total a pagar es de: $" + reporteDatos.precioTotal + "\n\n" + "Bienvenido a la gran aventura Digital House."
}

console.log(imprimirDatos("Luis", "Fuentes",cursosDePagoIngresados,cursosDeseadosIngresados,calculaMontoDePago))