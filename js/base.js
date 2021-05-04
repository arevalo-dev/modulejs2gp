console.log('First Exercise')

/*
	Ejercicio 1:
	Pedir 2 variables por prompt
	Si a > b dividir a entre b
	Si a < b dividir sumar a más b
	si a == b multiplicar ambos numeros
	Imprimir el resultado en consola
*/

const a = parseInt(window.prompt('Cual es la variable a '))
const b = parseInt(window.prompt('Cual es la variable b '))
let result

if ( a > b){
    result = a / b
}else if (a < b){
    result = a + b
}else {
    result = a * b
}

console.log (result)

/***
	Pedir por el promt un numero, y comprobar si es par o impar
*/

const parOImpar = parseInt(window.prompt("Dame un numero"))
console.log(parOImpar)

if (parOImpar % 2 === 0){
    console.log(`el numero ${parOImpar} es par`)
    // console.log('el numero ' + parOImpar + ' es par')
}else{
    console.log(`el numero ${parOImpar} es impar`)
}

