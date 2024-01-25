//juego de tropito
let opciones = ["Toma 1" ,"Toma 2","Pon 1", "Pon 2", "Todos ponen", "Toma todo"]

let vueltas= 6;

function juegoDeTrompo(arrayOpciones, vueltas){
    let calculoAleatorio = Math.floor(Math.random() * 5);

    if(vueltas >=2 && vueltas <=6){
        return arrayOpciones[calculoAleatorio]
    }else{
        return "el numero de vueltas ingresado no esta permitido"
    }
        
}

console.log(juegoDeTrompo(opciones, vueltas))