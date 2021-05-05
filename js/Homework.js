/**
 * Ejercicios
 */


/**
 * 1:
 * Pedir al usuario estos 3 datos
 * - Nombre
 * - Peso actual
 * Calcular el peso que tendria esa persona en la luna
 * Imprimirlo en consola
 * ** Opcional -> Crear una función **
 */

const name = window.prompt('Ingresa tu nombre')
const peso = parseInt(window.prompt('ingresa tu peso'))

var operation = peso / 9.81 * 1.622

console.log(`Hola ${name}, Bienvenido`)
console.log(`Tu peso en la luna es: ${operation}`)



/**
 * 2:
 * Pedir al usuario la calificación de un examen ( 0 a 100)  por el prompt
 * Imprimir en consola las equivalencias en letra su calificación, es decir
 * -> si es mayor o igual a 90, imprimir "A"
 * -> si es mayor o igual a 80 y menor que 90 , imprimir "B"
 * -> si es mayor o igual a 70 y menor que 80 , imprimir "C"
 * -> si es mayor o igual a 60 y menor que 70 , imprimir "D"
 * -> si es mayor o igual a 50 y menor que 60 , imprimir "E"
 * -> si es menor 50 , imprimir "F"
 */

 const Calificacion = parseInt(widow.prompt('Cuál fue tu califiación?'))
 if (Calificacion >= 90) {
     console.log('Tu calificación es una A')
 } else if (Calificacion >= 80 && Calificacion < 90) {
     console.log('Tu calificación es una B')
 } else if (Calificacion >= 70 && Calificacion < 80) {
     console.log('Tu calificación es una C')
 } else if (Calificacion >= 60 && Calificacion < 70) {
     console.log('Tu calificación es una D')
 } else if (Calificacion > 50 && Calificacion < 60) {
     console.log('Tu calificación es una E')
 } else {
     console.log('Tu calificación es una F')
 }



/**
 * 3:
 * Pedir al usuario por prompt un numero entre 1 y 100
 * Comparar si ese numero es divisible entre 2, 3 u 11
 * Imprimir en consola un mensaje que indique de que numero(s) es múltiplo
 * p.ej. 6 es multiplo de 2 y de 3
 * p.ej. 22 es multiplo de 2 y de 11
 * p.ej. 21 es multiplo de 3
 * Sino, enviar un mensaje en consola que lo indique
 */


/**
 * 4:
 * Pedir al usuario por prompt un numero entre 1 y 100
 * verificar si es un par o impar
 * imprimir en resultado en consola
 * Máximo de lineas para este ejercicio, 2 lineas de código
 * Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */

/**
 * 5:
 * Pedir al usuario el dia de la semana 
 * p.ej. lunes, martes, ...
 * Imprimir en consola el número del dia de la semana equivalente
 * es decir:
 * domingo -> 1, lunes -> 2, martes -> 3, etc...
 */

const diaDeSemana = window.prompt('Qué día de la semana es hoy?').toLowerCase()

if (dayOfWeek === 'lunes') {
    console.log(`El ${diaDeSemana} es el día 1 de la semana`);
} else if (dayOfWeek === 'martes') {
    console.log(`El ${diaDeSemana} es el día 2 de la semana`);
} else if (dayOfWeek === 'miercoles' || diaDeSemana === 'miércoles') {
    console.log(`El ${diaDeSemana} es el día 3 de la semana`);
} else if (dayOfWeek === 'jueves') {
    console.log(`El ${diaDeSemana} es el día 4 de la semana`);
} else if (dayOfWeek === 'viernes') {
    console.log(`El ${diaDeSemana} es el día 5 de la semana`);
} else if (diaDeSemana === 'sábado' || diaDeSemana === 'sabado') {
    console.log(`El ${diaDeSemana} es el día 6 de la semana`);
} else if (dayOfWeek === 'domingo') {
    console.log(`El ${diaDeSemana} es el día 7 de la semana`);
} else {
    console.log(`${diaDeSemana} no es un día de la semana`);
}


/**
 * 6:
 * Pedir al usuario 2 numeros 
 * Imprimir en consola cual es el menor de los 2
 * Imprimir en consola cual es el mayor de los 2
 */

 const numberOne = parseInt(window.prompt('¿Dame un numero?'))
 const numberTwo = parseInt(window.prompt('¿Dame otro numero?'))
 
 if (numberOne > numberTwo) {
     console.log(`El ${numberOne} es mayor que ${numberTwo}`)
 
 } else if (numberOne === numberTwo) {
     console.log(`El ${numberOne} es igual al ${numberTwo}`)
 
 } else {
     console.log(`El ${numberTwo} es mayor que ${numberOne}`)
 }