let collect = require('./collectives')

let hotToys = collect.importar('Hot toys')
let bandai= collect.importar("Bandai")
let starWars = collect.importar("Star Wars")

let unifiedCollectibles = [...hotToys,...bandai,...starWars]

//console.log(unifiedCollectibles);

collectives ={
    figuras:unifiedCollectibles,
    listFigures: function(){
         this.figuras.forEach(function(figura){
            console.log(figura);
        })
    },
    figuresByBrand: function(marcaFigura){
        let figurasPorMarca = this.figuras.filter(function(figura){
            return (marcaFigura.toLowerCase()) == ((figura.marca).toLowerCase())
        })
        return figurasPorMarca
    }

}

//collectives.listFigures()
console.log(collectives.figuresByBrand("BANDAI"));