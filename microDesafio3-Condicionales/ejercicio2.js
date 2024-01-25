//Ajuste tarifario de energía eléctrica

let pagoMes = 12000;
let consumoKWH = 150;
let incremento = 0.20;
let incrementoMes = pagoMes * 0.20;

let ajusteTarifario = consumoKWH > 300 ? pagoMes + incrementoMes : pagoMes;

if(consumoKWH > 300){
    console.log("Debido a que su hogar tuvo un consumo de " + consumoKWH + ", en base al ajuste tarifario");
    console.log("(hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%),");
    console.log("cumplimos con informarle que se ha ajustado el total a pagar, que será de; $"+ajusteTarifario);
} else{
    console.log("no hay ningun aumento, su pago es: $" + pagoMes);
}


