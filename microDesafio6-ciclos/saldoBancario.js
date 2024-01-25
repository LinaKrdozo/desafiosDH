
let transaccionesBancarias = [5500,-15000];

function calcularSaldos(operaciones) {
    
    let saldoDepositos = 0;
    let saldoRetiros = 0;
    let saldoInicial = 49500;
    let saldoActual =0;

    for(let i = 0; i<operaciones.length; i++){
          
        if(operaciones[i]>0){
            saldoDepositos = saldoDepositos + operaciones[i];
        }else{
            saldoRetiros = saldoRetiros - operaciones[i];
        }
        saldoActual = saldoInicial + saldoDepositos - saldoRetiros;
    }
    

    return {saldoDepositos,saldoRetiros, saldoActual}
  
  }

  //console.log(calcularSaldos(depositos));

  function generarDatos(nombre, apellido, operaciones, callbackSaldos){
    
    let reporte = callbackSaldos(operaciones);
    return'Estimada '+ nombre + ' ' + apellido +':'+ "\n" +'El monto total de los depositos es de: $' + reporte.saldoDepositos  + "\n" +'el monto total de los retiros es de: $' + reporte.saldoRetiros + "\n" +'Por lo tanto, su saldo actual en la cuenta es de: $' + reporte.saldoActual;
    
  }


  console.log(generarDatos('Gloria', 'Medina', transaccionesBancarias,calcularSaldos));

