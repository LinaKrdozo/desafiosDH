//calcular el nuevo sueldo a un trabajador

let nombre = "Lina";
let apellido = "cardozo";
let sueldoActual = 20000;
let porcentajeAumento = 25;
let calculoAumento = ((sueldoActual * porcentajeAumento)/ 100);

let nuevoSueldo = sueldoActual + calculoAumento;

console.log("hola, estimad@ " + nombre + " " + apellido)
console.log("En base a su sueldo actual: ")
console.log( "$"+sueldoActual )
console.log("Ha recibido un aumento del 25%: ")
console.log( "$"+calculoAumento )
console.log("y su nuevo sueldo es de: " + "$"+ nuevoSueldo )



