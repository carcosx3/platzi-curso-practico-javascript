'use strict'

// Cuadrado
const ladoCuadrado = 5
const perimetroCuadrado = ladoCuadrado * 4
const areaCuadrado = Math.pow(ladoCuadrado, 2)

console.group("Cuadrados")

    console.log(`Los lados del cuadrado miden ${ladoCuadrado}cm`)
    console.log(`El perimetro del cuadrado es ${perimetroCuadrado}cm`)
    console.log(`El area del cuadrado es ${areaCuadrado}cm^2`)

console.groupEnd()

// Triangulo
const ladoTriangulo1 = 6
const ladoTriangulo2 = 6
const baseTriagulo = 4
const alturaTriangulo = 5.5

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriagulo

const areaTriangulo = (baseTriagulo * alturaTriangulo) / 2

console.group("Triangulo")

    console.log(`Los lados del triangulo miden ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriagulo}cm`)
    console.log(`El perimetro del triangulo es ${perimetroTriangulo}cm`)
    console.log(`El area del triangulo es ${areaTriangulo}cm^2`)
    
console.groupEnd()

// Circulo
const radio = 4
const diametro = radio * 2
const pi = Math.PI

const circunferencia = diametro * pi

const areaCirculo = pi * (Math.pow(radio, 2))

console.group("Circulo")

    console.log(`El radio del circulo es ${radio}cm`)
    console.log(`El diametro del circulo es ${diametro}cm`)
    console.log(`La circunferencia del circulo es ${circunferencia}cm`)
    console.log(`El area del circulo es ${areaCirculo}cm^2`)

console.groupEnd()