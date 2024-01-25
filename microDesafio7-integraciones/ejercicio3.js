
let cursosPrecios = [["html5","css3","javascript","react","nodejs"],[4000,5000,10000,7000,15000]]

let cursosElegidos = ["HTML5","CSS3"]

let sumatoriaPago = 0;

let cursosSeleccionados = ""

for (let i = 0; i < cursosElegidos.length; i++) {
    let indiceCursoElegido = cursosPrecios[0].indexOf(cursosElegidos[i].toLowerCase())
    if (indiceCursoElegido > -1) {
        sumatoriaPago += cursosPrecios[1][indiceCursoElegido]
        cursosSeleccionados += "\n\n"+ (i+1) + ".  - "+ cursosElegidos[i] 
    }
}

console.log(cursosSeleccionados)

console.log("\nEl costo total de los cursos es: "+sumatoriaPago)