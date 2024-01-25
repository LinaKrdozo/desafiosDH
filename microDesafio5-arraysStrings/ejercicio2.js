//DH-Movies

let peliculasIniciales = ['turno de dia', '30 noches con mi ex', ' Bestia', 'El monte', 'Top gun maverick',
'Elvis','Thor: amor y trueno']

//console.log(peliculasIniciales);

//************************** */

let peliculaMaVendida = 'Thor: amor y trueno';

function peliculaMayuscula(pelicula){
    return pelicula.toUpperCase()
}
let peliculaMaVendidaMayuscula = peliculaMayuscula(peliculaMaVendida);
peliculasIniciales.pop();
peliculasIniciales.push(peliculaMaVendidaMayuscula);

//console.log('la pelicula mas vendida es: ' + peliculaMayuscula(peliculaMaVendida));

//******************** */

let estrenosPromocion = ['Counter-Strike ', 'NOP ', 'Vértigo ', 'Nick ', 'Avatar ']

let peliculasEstreno = estrenosPromocion.join();

//console.log('las peliculas estreno son: ' + peliculasEstreno);

let videoJuego = estrenosPromocion.shift();

//console.log(videoJuego);
//console.log(estrenosPromocion);
//********************* */

function tiendaPeliculas (peliculas, estrenos){
    return peliculas.concat(estrenos)
}

console.log('todas las peliculas son: ' + tiendaPeliculas(peliculasIniciales,estrenosPromocion));

