// const lista1 = [ 100, 200, 300, 500, 40000000000000 ]

function esPar(numero) {
    if( numero % 2 == 0 ){
        return true
    }

    return false
}

function mediana(lista) {
    let mitadLista = lista.length / 2
    let listaSuma = 0
    let mediana
    
    const listaOrdenada = [...lista]

    listaOrdenada.sort((a,b)=>a-b)

    console.log(lista)
    console.log(listaOrdenada)

    if( esPar(listaOrdenada.length) ){
        listaSuma = ( listaOrdenada[mitadLista - 1] + listaOrdenada[mitadLista] ) / 2 
    
        return listaSuma
    }else{
        mediana = listaOrdenada[Math.floor(mitadLista)]
    
        return mediana
    }

}