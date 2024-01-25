//string en minúscula

let palabraParaConvertir = "hola mundo";

function convertidorPalabra(palabra){
    return palabra.toUpperCase();
}

console.log(convertidorPalabra(palabraParaConvertir));

//tipo de dato

let numero = 3;

function tipoDato(dato){
    return typeof(dato);
}

console.log(tipoDato(numero));

//edad perros
let edadToby =12;

function edadPerros(edad){
    return edad*7;
}

console.log(edadPerros(edadToby));

//hoja de trabajo

let salario = 200;
let dias = 30;
let horasAlDia = 8;

function valorHora(salarioMes, diasTrabajados, horasPorDia){
    let valorDia = salarioMes/diasTrabajados;
    let valorHora= valorDia/horasPorDia;
    return "el valor de una hora de trabajo es: "+ valorHora;
}

console.log(valorHora(salario, dias, horasAlDia));