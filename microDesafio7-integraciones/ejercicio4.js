//encontrar el numero

let numerosIngresados = [1,2,3,4,5]
let numeroParaBuscar = 3

function encontrarNumero(numeros, numero){
    
    for (let i = 0; i < numeros.length; i++) {
        
        if(numeros[i]==numero){
            return "El número " + numero +" sí existe en el array"
        }
    }
    return "El valor solicitado no existe"
}

console.log(encontrarNumero(numerosIngresados, numeroParaBuscar))


