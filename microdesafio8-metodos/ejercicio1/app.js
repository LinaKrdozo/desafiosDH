let importarArchivoBicicletas = require('./datosBici');

let bicicletasImportadas = importarArchivoBicicletas()

let dhBici = {
    bicicletas: bicicletasImportadas,
    //esta funcion no puede ser arrow por el contexto del objeto 
    buscarBici: function(idBicicletaIngresado){
        //esta funcion filter se puede usar arrow
        //el resultado de este filter es un array con el objeto que coincida con el id ingresado y el id del objeto
        let bicicletasFiltradas = this.bicicletas.filter(function(bicicleta){
            //console.log(bicicleta.id == idBicicletaIngresado)
            return bicicleta.id == idBicicletaIngresado
            
        });
        //si no coinciden los id, me va mandar un array vacio cuyo tamaño seria cero
        if (bicicletasFiltradas.length == 0) {
            return null
        }
       
        return bicicletasFiltradas
    },
    venderBici: function(idBicicletaIngresado){
        //invoco la funcion anterior comparando con el id ingresado
        let resultadoBicicletasVendidas = this.buscarBici(idBicicletaIngresado)
        //si me devuelve array vacio simplemente indica que no encontro la bicicleta
            if (resultadoBicicletasVendidas == null) {
             return "Bicicleta no encontrada"
            }
        //me sirve el for si estoy pasando por parametro varios id
        for (let i = 0; i < resultadoBicicletasVendidas.length; i++) {
            resultadoBicicletasVendidas[i].vendida ='si'
        }
        /*
        resultadoBicicletasVendidas.forEach(function(bicicleta){
            bicicleta.vendida = 'si'
        })*/
        //devuelve el objeto dentro del array, si es que el id existe 
        return resultadoBicicletasVendidas;
    },
    biciParaLaVenta: function(){
        //filtro en el array de bicicletas las que tengan en la propiedad vendidas no
        let bicicletasNoVendidas = this.bicicletas.filter(function(bicicleta){
            return bicicleta.vendida == 'no'
        })
        return bicicletasNoVendidas;
    },
    totalDeVentas: function(){
        //el resultado de este filter es un array con el objeto que coincida con el id ingresado y el id del objeto
        let bicicletasFiltradas = this.bicicletas.filter(function(bicicleta){
            return bicicleta.vendida == 'si'
        });
        //tengo que especificarle a la funcion que inicie desde el valor inicial cero para que me sume todos los precios desde el elemento cero 
        //en adelante
        let bicicletasVendidas = bicicletasFiltradas.reduce(function(contador, bicicletaFiltrada){
            return  contador + bicicletaFiltrada.precio
        },0)
        //si no le indico el valor inicial va a tomar solo el ultimo elemento y ese es el precio que va a tomar
        return "El total de las ventas fue: " + bicicletasVendidas
    },
    aumentoBici: function(porcentajeIncremento){
        let bicicletasConIncremento = this.bicicletas.map(function(bicicleta){
            let incremento = bicicleta.precio * (porcentajeIncremento/100)
            bicicleta.precio = bicicleta.precio + incremento;
            return bicicleta
        })
        //console.log(bicicletasImportadas);
        return bicicletasConIncremento
    },
    biciPorRodado: function(numeroRodadoIngresado){
        //el resultado de este filter es un array con el objeto que coincida con el numero de rodado ingresado y el valor de rodado del objeto
        let bicicletasPorRodado = this.bicicletas.filter(function(bicicleta){
            return bicicleta.rodado == numeroRodadoIngresado
        });
        //si no coinciden los valores de rodado ingresados, me va mandar un array vacio cuyo tamaño seria cero
        if (bicicletasPorRodado.length == 0) {
            return "el valor ingresado de rodado no existe"
        }
        return bicicletasPorRodado
    },
    listarTodasLasBici: function(){
        let todasLaBicicletas = this.bicicletas.forEach(function(bicicleta){
            console.log(bicicleta)
        })
        return todasLaBicicletas
    }
    //con for..of
    /*listarTodasLasBici: function(){
        for (const bicicleta of this.bicicletas) {
            console.log(bicicleta)
        }
    }*/
}
console.log("---------------------------------")
console.log("PRIMERA FUNCION");
console.log("---------------------------------")
console.log(dhBici.buscarBici(2))
console.log("---------------------------------")
//se invoco la funcion para cambiar la propiedad de vendidas de los objetos del array que correspondan
// a los id 1,2 y3
console.log("SEGUNDA FUNCION");
console.log("---------------------------------")
console.log(dhBici.venderBici(1));
console.log(dhBici.venderBici(2));
console.log(dhBici.venderBici(3));
console.log("---------------------------------")
console.log("TERCERA FUNCION");
console.log("---------------------------------")
console.log(dhBici.biciParaLaVenta())
console.log("CUARTA FUNCION");
console.log("---------------------------------")
console.log(dhBici.totalDeVentas())
console.log("FUNCIONES ADICIONALES");
console.log("---------------------------------")
console.log(dhBici.aumentoBici(20));
console.log("FUNCIONES DE RODADO");
console.log("---------------------------------")
console.log(dhBici.biciPorRodado(29));
console.log("LISTADO DE TODAS LAS BICICLETAS");
console.log("---------------------------------")
dhBici.listarTodasLasBici();