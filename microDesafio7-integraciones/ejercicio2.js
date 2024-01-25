//promedio graduados

let graduadosHtml5= "30 45 25 34 18 23 16 50 72 70";
let graduadosCss3 ="50 45 71 34 23 45 65 75 63 43 74 70";
let graduadosJs= "70 65 58 45 23 57 34 17 72";
let graduadosNodeJS= "45 56 73 34 65 72 70 32";

let html = graduadosHtml5.split(" ");
let css = graduadosCss3.split(" ");
let js = graduadosJs.split(" ");
let nodeJs = graduadosJs.split(" ");
//almacenar los cuatro array en uno solo
let graduadosFinal = [html,css,js,nodeJs]
let numeroIngresado = 5;

function calculaPromedio(graduados, numero){
    let suma = 0;
    let resultado = 0;
    
    if(numero >=1 && numero <=4){
        for(let i = 0; i< graduados.length; i++){
            suma = suma + parseInt(graduados[i]);     
        }
    }
    resultado = suma / graduados.length
    return resultado ;
}

//callback
function imprimeDatos(graduados, numero, callbackCalcularPromedio){
    let reporteDelCalculo = callbackCalcularPromedio(graduados, numero);
    let nombreCurso;

    switch (numero) {
        case 1:
            for (let j = 0; j < graduadosFinal.length; j++) {
                nombreCurso = "HTML"
                return "el promedio por el curso " + nombreCurso + " es: " + reporteDelCalculo
           }
        case 2:
            for (let j = 0; j < graduadosFinal.length; j++) {
                nombreCurso = "CSS"
                return "el promedio por el curso " + nombreCurso + " es: " + reporteDelCalculo
        }
        case 3:
            for (let j = 0; j < graduadosFinal.length; j++) {
                nombreCurso = "JAVASCRIPT"
                return "el promedio por el curso " + nombreCurso + " es: " + reporteDelCalculo
        }
        case 4:
            for (let j = 0; j < graduadosFinal.length; j++) {
                nombreCurso = "NODEJS"
                return "el promedio por el curso " + nombreCurso + " es: " + reporteDelCalculo
        }
        default:
            return "el numero ingresado es incorrecto, digita un numero del 1 al 4"
    }

}

console.log(imprimeDatos(html, 1, calculaPromedio))
console.log(imprimeDatos(css, 2, calculaPromedio))
console.log(imprimeDatos(js, 3, calculaPromedio))
console.log(imprimeDatos(nodeJs, 4, calculaPromedio))