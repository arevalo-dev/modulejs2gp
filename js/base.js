console.log ('Metodos de Array')

let arrFor = [1,2,3,4] 

for(let i = 0; i <= 3; i ++){
    console.log(arrFor[i])
}

// .forEach

arrFor.forEach( (currentValue, index, arr) => {
    console.log(index, currentValue, arr)
    //currentValue => devuelve el valor contenido en el indice
    //index => devuelve la posicion en el array
    //arr => devuelve el array completo
})


// Ejercicio 1 .forEach()
// Dado un array con solo números
// obtener el valor mas alto
// input: [1,4,3,2,5]
// output: -> 5

let arrayNumbers = [1,4,3,2,5]
let numMax = 0
arrayNumbers.forEach( value => {
    if (value >= numMax){
        numMax = value
    }
    return numMax
})

console.log(numMax)


// ejercicio 2 .forEach() o .map() o for()
// función
// convertir todos los elementos numericos de un array
// a strings
// input: [1,2,3,4,5]
// output -> ['1,','2','3','4','5']


var arrElement = [1,2,3,4,5]
var newArray = arrElement.map( value => value.toString() )


// funcion que dados 2 parametros .forEach() o .map() o for()
// p1 = año de inicio
// p2 = año de fin
// y devuelva un array con los años que son bisiestos
// que se encuentran en ese rango
// [1990, 2000, 2001, 2020]
// -> [2000,2020]

const bisiesto = (start, end) => {
    let leadYears = []
    for(let i = start; i <= end; i ++){
        if ( i % 4 == 0 || (i % 4 == 0 && i % 100 == 0 && i % 400 == 0)){
            leadYears.push(i)
        }
    }
    return leadYears
}


// .filter()

const filtrarPares = (arrayAFiltrar) => {
    let arrFilter = arrayAFiltrar.filter( (currentValue) => {
        if (currentValue % 2 === 0 ){
            return currentValue
        }
    })
    return arrFilter
}

const filtrarPares = (arrayAFiltrar) => {
    return arrayAFiltrar.filter( (currentValue) => {
        if (currentValue % 2 === 0 ){
            return currentValue
        }
    })
    //se elimino esta linea y se pasa a la linea 80
}

//aplicando reduccion
const filtrarPares = arr => arr.filter( currenteValue => currentValue % 2 === 0 ? currentValue : '')

//reduccion con ternario
const filtrarPares = arr => arr.filter( cv => cv % 2 === 0 ? cv : '')

//reduccion con ternario y valor de retorno por default
const filtrarPares = arr => arr.filter( cv => cv % 2 === 0)


// .map()
INVESTIGAR 

// .reduce()