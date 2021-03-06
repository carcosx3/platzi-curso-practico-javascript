// const lista1 = [ 1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1 ]

function moda(modaArray) {
    let lista1Count = {}

    modaArray.map((elemento) => {
        if( lista1Count[elemento] ){
            lista1Count[elemento] += 1
        } else {
            lista1Count[elemento] = 1
        }
    })
    
    const lista1Array = Object.entries(lista1Count).sort((elementoA, elementoB) => {
        return elementoA[1] - elementoB[1]
    })
    
    const moda = lista1Array[lista1Array.length - 1]

    return moda
}