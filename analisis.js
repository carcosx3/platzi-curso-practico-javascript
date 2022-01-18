// Mediana General
const salariosCol = colombia.map((elemento) => {
    return elemento.salary
})

const salariosColSort = salariosCol.sort(( salaryA, salaryB ) => { return salaryA - salaryB })

// Calculadora de mediana
function medianaSalary( lista ) {
    const mitad = Math.floor( lista.length / 2 )
    let mediana

    if( esPar(lista.length) ){
        return mediana = (lista[mitad] + lista[mitad - 1]) / 2  
    }else{
        return mediana = lista[mitad - 1]
    }
}

// Helpers
function esPar( lengthArray ){
    return (lengthArray % 2 == 0)
} 

function calcularMediaArimetica(lista){
    const sumaLista = lista.reduce(function(valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento
    })

    promedioLista = sumaLista / lista.length

    return promedioLista
}

const medianaGeneralCol = medianaSalary(salariosColSort)

// Mediana Top 10%
const spliceStart = ( salariosColSort.length * 90 ) / 100
const spliceCount = salariosColSort.length - spliceStart

const salariosColTop10 = salariosColSort.splice(spliceStart, spliceCount)
const medianaTop10Col = medianaSalary(salariosColTop10)

console.log({
    medianaGeneralCol,
    medianaTop10Col
})
