//sumatoria pares e impares

let numerosIngresadosPorUsuario = [1,2,3,4,5,6,7,8,9,10]

function sumarParesImpares(numeros){
    let contadorPares = 0;
    let contadorImpares = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 == 0) {
            contadorPares += numeros[i]
        }
        if(numeros[i] % 2==1){
            contadorImpares += numeros[i]
        }
    } 
    return {contadorPares, contadorImpares}
}



console.log(sumarParesImpares(numerosIngresadosPorUsuario));

