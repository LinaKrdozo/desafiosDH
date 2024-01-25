//Crear una función que pida un valor por parámetro y muestre los 10 números
//siguientes.

let numeroElegido= 10;
let mostrarNumeros = (numero) =>{
    
    for(let i = 0; i<=10; i++){
        console.log(numero + i);   
    }
}

mostrarNumeros(numeroElegido)
console.log("---------ejercicio 2-----------")

//Imprimir los números entre el 1 y el 57, saltando de tres en tres.
for (let i = 1; i <= 57; i+=3) {
    console.log(i)
    
}

console.log("--------ejercicio 3---------")

//Escribir un programa que muestre la sumatoria de todos los números entre 
//el 0 y el 100.

let suma =0;

for (let i =0; i<=100; i++){
    suma = suma + i;
}
console.log("la suma es: " + suma)

console.log("--------ejercicio 4---------")

//Crear una función que reciba por parámetro una cadena de texto: 
//(‘practicando el uso de los ciclos o bucles’. Tendrá la responsabilidad 
//de mostrar al usuario cada una de las letras de la cadena de texto pero 
//en MAYÚSCULA.

let cadenaDigitada = "practicando el uso de los ciclos o bucles";
let frase;

let convierteEnMayuscula = (cadena) =>{
    for(let i = 0; i<cadena.length; i++){
        frase = (cadena.toUpperCase()).split("");
    }
    return frase;
}

console.log(convierteEnMayuscula(cadenaDigitada));
console.log("--------ejercicio 5---------")

//Crear una función que reciba como parámetro un array de números positivos. Tendrá
//la responsabilidad de retornar un nuevo array pero sólo con los valores pares.

let numerosIngresados = [1,2,3,4,5]


let convierteNumerosPares = (numeros)=>{
    let numerosResultantes = [];
    for(let i = 0; i<numeros.length; i++){
        if(numeros[i] % 2 == 0 ){
            numerosResultantes.push(numeros[i]); 
        }
    }
    return numerosResultantes;
}

console.log(convierteNumerosPares(numerosIngresados));