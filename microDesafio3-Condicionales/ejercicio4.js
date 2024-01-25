//mi primera calculadora

let operacion = "division"
let primerNumero = 5;
let segundoNumero = 6;

switch (operacion) {
    case "":
      console.log("Debe ingresar una operacion");
      break;
    case "sumar":
        let suma = primerNumero + segundoNumero;
        console.log("el resultado de sumar " + primerNumero + " + "+ segundoNumero + " es " +suma);
      break;
    case "restar":
        let resta = primerNumero - segundoNumero;
        console.log("el resultado de restar " + primerNumero + " - "+ segundoNumero + " es " +resta);
      break;
    case "multiplicar":
        let multiplicacion = primerNumero * segundoNumero;
        console.log("el resultado de multiplicar " + primerNumero + " x "+ segundoNumero + " es "  +multiplicacion);
      break;
    case "dividir":
        let division = primerNumero/segundoNumero;
        console.log("el resultado de dividir " + primerNumero + " / "+ segundoNumero + " es " +division);
      break;
    default:
      console.log("Las operaciones aceptadas son: sumar - restar - multiplicar - dividir");
  }