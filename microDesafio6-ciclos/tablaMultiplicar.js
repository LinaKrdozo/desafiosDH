//tabla de multiplicar

function generarTablaDeMuliplicar(){
    let multiplicacion = 0;
    for(let i = 1 ; i<=10; i++){

        console.log("--------------------")

        for(let j=1; j<=10; j++){

            multiplicacion = i*j   
            console.log( i + " * " + j + " = " + multiplicacion );
            
        }
     
    }
    console.log("---------------------")
}

generarTablaDeMuliplicar();