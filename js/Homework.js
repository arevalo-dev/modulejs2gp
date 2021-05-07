/**
 * 1:
 * Pedir al usuario estos 2 datos
 * - Nombre
 * - Peso actual
 * Calcular el peso que tendria esa persona en la luna
 * Imprimirlo en consola
 * ** Opcional -> Crear una función **
 */

 function weightInMoon(nameA, weight) {
    let weight_in_moon = (weight / 9.81) * 1.622
    let resultTwo = `Hola ${nameA}, Tu peso en la luna es: ${weight_in_moon} kg`
    return resultTwo
}


/**
 * Pedir al usuario la calificación de un examen ( 0 a 100)  por el prompt
 * Imprimir en consola las equivalencias en letra su calificación, es decir
 * -> si es mayor o igual a 90, imprimir "A"
 * -> si es mayor o igual a 80 y menor que 90 , imprimir "B"
 * -> si es mayor o igual a 70 y menor que 80 , imprimir "C"
 * -> si es mayor o igual a 60 y menor que 70 , imprimir "D"
 * -> si es mayor o igual a 50 y menor que 60 , imprimir "E"
 * -> si es menor 50 , imprimir "F"
 */

 function scoreExam (score){
 if (score >= 90) {
     console.log('Tu calificación es una A')
 } else if (score >= 80 && score < 90) {
     console.log('Tu calificación es una B')
 } else if (score >= 70 && score < 80) {
     console.log('Tu calificación es una C')
 } else if (score >= 60 && score < 70) {
     console.log('Tu calificación es una D')
 } else if (score >= 50 && score < 60) {
     console.log('Tu calificación es una E')
 } else {
     console.log('Tu calificación es una F')
 }
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


function numberToDivide (numberUnoCien){
if (numberUnoCien % 2 === 0 || numberUnoCien % 3 === 0 || numberUnoCien % 11 === 0) {
    if (numberUnoCien % 2 === 0 && numberUnoCien % 3 === 0 && numberUnoCien % 11 === 0) {
        console.log(`${numberUnoCien} es divisible entre 2, 3 y 11 `);
    } else if (numberUnoCien % 2 === 0 && numberUnoCien % 3 === 0) {
        console.log(`${numberUnoCien} es divisible entre 2 y 3 `);
    } else if (numberUnoCien % 2 === 0 && numberUnoCien % 11 === 0) {
        console.log(`${numberUnoCien} es divisible entre 2 y 11 `);
    } else if (numberUnoCien % 3 === 0 && numberUnoCien % 11 === 0) {
        console.log(`${numberUnoCien} es divisible entre 3 y 11`);
    } else if (numberUnoCien % 11 === 0) {
        console.log(`${numberUnoCien} es divisible 11`);
    } else if (numberUnoCien % 3 === 0) {
        console.log(`${numberUnoCien} es divisible 3`);
    } else if (numberUnoCien % 2 === 0) {
        console.log(`${numberUnoCien} es divisible 2`);
    }
} else {
    console.log(`${numberUnoCien} no es divisible entre 2, 3 u 11`);
}
}


/**
 * 4:
 * Pedir al usuario por prompt un numero entre 1 y 100
 * verificar si es un par o impar
 * imprimir en resultado en consola
 * Máximo de lineas para este ejercicio, 2 lineas de código
 * Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */


function parImpar (numberUnoACien){
    numberUnoACien % 2 === 0 ? console.log(`${numberUnoACien} es par`) : console.log(`${numberUnoACien} es impar`)
}


/**
 * 5:
 * Pedir al usuario el dia de la semana 
 * p.ej. lunes, martes, ...
 * Imprimir en consola el número del dia de la semana equivalente
 * es decir:
 * domingo -> 1, lunes -> 2, martes -> 3, etc...
 */

function dayOfWeek (day){
   dayWeek = day.toLowerCase()
if (dayWeek === 'domingo') {
    console.log(`El ${dayWeek} es el día 1 de la semana`);
} else if (dayWeek === 'martes') {
    console.log(`El ${dayWeek} es el día 2 de la semana`);
} else if (dayWeek === 'miercoles' || dayWeek === 'miércoles') {
    console.log(`El ${dayWeek} es el día 3 de la semana`);
} else if (dayWeek === 'jueves') {
    console.log(`El ${dayWeek} es el día 4 de la semana`);
} else if (dayWeek === 'viernes') {
    console.log(`El ${dayWeek} es el día 5 de la semana`);
} else if (dayWeek === 'sábado' || dayWeek === 'sabado') {
    console.log(`El ${dayWeek} es el día 6 de la semana`);
} else if (dayWeek === 'domingo') {
    console.log(`El ${dayWeek} es el día 7 de la semana`);
} else {
    console.log(`El ${dayWeek} no es un día de la semana`);
}
}


// Investigar como pasar parametros opcionales?????

// Hacer 5 ejercicios mas adicionales de los ya vistos en clase.

// Hacer un ejercicio que reciba parametros por defecto.