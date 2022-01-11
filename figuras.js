'use strict'

// Cuadrado
function perimetroCuadrado(lado){
    return lado * 4
}

function areaCuadrado(lado){
    return Math.pow(lado, 2)
}

/*console.group("Cuadrados")

    console.log(`Los lados del cuadrado miden ${ladoCuadrado}cm`)
    console.log(`El perimetro del cuadrado es ${perimetroCuadrado}cm`)
    console.log(`El area del cuadrado es ${areaCuadrado}cm^2`)

console.groupEnd()*/

// Triangulo
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2
}

/*console.group("Triangulo")

    console.log(`Los lados del triangulo miden ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriagulo}cm`)
    console.log(`El perimetro del triangulo es ${perimetroTriangulo}cm`)
    console.log(`El area del triangulo es ${areaTriangulo}cm^2`)
    
console.groupEnd()*/

// Circulo
const pi = Math.PI

function diamentroCirculo(radio) {
    return radio * 2
}

function circunferenciaCirculo(radio) {
    const diametro = diamentroCirculo(radio)

    return diametro * pi
}

function areaCirculo(radio) {
    return pi * ( Math.pow(radio, 2) )
}

/*console.group("Circulo")

    console.log(`El radio del circulo es ${radio}cm`)
    console.log(`El diametro del circulo es ${diametro}cm`)
    console.log(`La circunferencia del circulo es ${circunferencia}cm`)
    console.log(`El area del circulo es ${areaCirculo}cm^2`)

console.groupEnd()*/

// Interaccion con HTML

// Cuadrado
function calcularPerimetroCuadrado() {
    const lado = document.getElementById("inputCuadrado").value

    alert( `El perimetro del cuadrado es: ${perimetroCuadrado(lado)}` )
}

function calcularAreaCuadrado(){
    const lado = document.getElementById("inputCuadrado").value

    alert( `El area del cuadrado es: ${areaCuadrado(lado)}` )
}

// Triangulo
function calcularPerimetroTriangulo() {
    const lado1 = Number(document.getElementById("inputTrianguloLado1").value)
    const lado2 = Number(document.getElementById("inputTrianguloLado2").value)
    const base = Number(document.getElementById("inputTrianguloBase").value)

    const resultado = perimetroTriangulo(lado1, lado2, base)

    alert( `El perimetro del triangulo es: ${ resultado }` )
}

function calcularAreaTriangulo() {
    const base = document.getElementById("inputTrianguloBase").value
    const altura = document.getElementById("inputTrianguloAltura").value

    alert( `El area del triangulo es: ${areaTriangulo(base, altura)}` )
}

// Circulo
function calcularPerimetroCirculo(){
    const radio = document.getElementById("inputCirculoRadio").value

    alert( `La circunferencia del circulo es: ${circunferenciaCirculo(radio)}` )    
}

function calcularAreaCirculo() {
    const radio = document.getElementById("inputCirculoRadio").value

    alert( `El area del circulo es: ${areaCirculo(radio)}` )    

}

// Calcular altura triangulo isoceles
function alturaTriangulo(lado1, lado2, base) {
    let altura

    if(lado1 === lado2){
        altura = Math.sqrt( Math.pow(lado1, 2) - ( Math.pow(base, 2) / 4 ) )

        console.log(altura)
    }else{
        console.log("Este no es un triangulo isoceles")
    }
}