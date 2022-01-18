const lista1 = [ 100, 200, 300, 500 ]

console.log(promedioLista1)

function calcularMediaArimetica(lista){
    // let sumaLista = 0
    // let promedioLista

    // for(let i = 0 ; i < lista1.length ; i++){
    //     sumaLista += lista1[i]
    // }

    const sumaLista = lista.reduce(function(valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento
    })

    promedioLista = sumaLista / lista.length

    return promedioLista
}