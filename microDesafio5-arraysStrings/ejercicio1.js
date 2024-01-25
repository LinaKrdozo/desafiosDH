//conjunto de seis (6) productos de electrodomésticos.

let electrodomesticos =['televisor', 'nevera', 'lavadora','horno', 'secadora','calefactor' ]

//Acceder de manera arbitraria a diferentes elementos del array.

console.log(electrodomesticos[0])
console.log(electrodomesticos[1])
console.log(electrodomesticos[2])
console.log(electrodomesticos[3])
console.log(electrodomesticos[4])
console.log(electrodomesticos[5])

//Extraer el primer elemento del array y agregarlo al final del mismo

let primerElemento = electrodomesticos.shift();
let insercion = electrodomesticos.push(primerElemento);
console.log(electrodomesticos);

//Agregar al final del array dos (2) nuevos productos.

let nuevosElectrodomesticos = electrodomesticos.push('ventilador', 'aspiradora')
console.log(electrodomesticos);

//Mostrar por la consola la cantidad de elementos que contiene el array.

console.log(electrodomesticos.length);

//Buscar un elemento del array y crear una condición responsable de establecer si
//existe o no el producto dentro del array.

let electrodomesticoBuscar = 'nevera';

if(electrodomesticos.indexOf(electrodomesticoBuscar) >= 0){
    console.log('Producto encontrado');
}else{
    console.log('El producto buscado no existe');
}

//Unificar todos los elementos del array en una cadena de texto (string), separando los
//elementos por espacios en blanco.

let separadosPorComa = electrodomesticos.join();
console.log(separadosPorComa);

//Determinar la cantidad de elementos que posee la cadena de texto obtenida.

let numeroElementosCadena = separadosPorComa.length;
console.log(numeroElementosCadena);

//Cambiar el nombre de algún producto de la cadena de texto por otro, valiéndose de la
//función adecuada para ello.

let cambioProductos = separadosPorComa.replace('nevera', 'freidora');
console.log(cambioProductos)

//Con la cadena de texto obtenida generar un nuevo array con cada una de las palabras
//de la cadena de texto. Tener en cuenta que los elementos deben estar separados por
//una coma.

let arrNuevo = cambioProductos.split(',');;


console.log(arrNuevo);



