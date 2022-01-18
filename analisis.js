const salariosCol = colombia.map((elemento) => {
    return elemento.salary
})

const salariosColSort = salariosCol.sort(( salaryA, salaryB ) => { return salaryA - salaryB })

function esPar( lengthArray ){
    return (lengthArray % 2 == 0)
} 

function medianaSalary( lista ) {
    const mitad = Math.floor( lista.length / 2 )
    let mediana

    if( esPar(lista.length) ){
        return mediana = (lista[mitad] + lista[mitad - 1]) / 2  
    }else{
        return mediana = lista[mitad - 1]
    }
}

console.log(medianaSalary(salariosColSort))