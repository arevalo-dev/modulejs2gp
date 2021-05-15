// /**
//  * 
//  * Ejercicio 1
 
// Dado el array [ ["jorge", false] , ["luis", true] , ["Victor", false] ] 
// Calcular el numero de personas que si votaron
// Output -> 1
// Nota: las personas que si votaron tiene true
// */

// const totalVoters = (arr) => {
//     // your code here
//     return arr.reduce((cv,index) =>{
//         if(cv[1] === true){
//             return cv
//         }
//     },0).length
   
// }
 
// let votos = [ ["jorge",false], ["luis",true], ["Victor",false], ['pepito',true], ['pepito',true], ]
 
// console.log(totalVoters(votos))
// // -> 1


// /**
//  * 
//  * Ejercicio 2
 
//     Dado un array con pedidos de un restaurant
//     la estructura por cada pedido es 
//     ['entrada','principal','postre','precio'],
//     */
//     let pedidos = [
//         ['ensalada de pepinos','paella','platano', '100'],
//         ['ensalada de tomates','pescado','helado', 120],
//         ['ensalada simple','paella','yogurt', 80],
//         ['ensalada simple','enchiladas','yogurt', 80],
//         ['ensalada cesar','salmón','platano', 100],
//     ]

// /*
//     Funcion que devuelve el total de pedidos que tienen como plato principal "paella"
//     Funcion que devuelve los pedidos que tienen como postre "platano" o "helado" 
//     Funcion que devuelve los pedidos que tengen un precio superior a 90 
//     Funcion que devuelve los pedidos que tengen un precio superior a 90 
// */


// const response = pedidos.filter( (cv, index, arr)=> {
//     if(cv[1] === 'paella'){
//         return cv
//     }
// }, 0).length

// const response = pedidos.reduce( (acc, cv)=> {
//     if(cv[1] === 'paella'){
//        return  acc = acc + 1
//     } else {
//         return acc
//     }
// }, 0)


/**
 * Ejercicio 3:
 * Estudiar el tema de Objetos y métodos de Objetos
 */

let koder = {
    name: 'rose',
    lastName: 'ortega',
    gender: 'F',
    age: 20,
    getFullName : function(){
        return `${this.name} ${this.lastName}`
    }
}

console.log(koder)

let koder2 = new Object()
koder2.name = 'rose'
koder2.lastName = 'ortega'
koder2.gender = 'F'
koder2.age = 20
koder2.getFullName = function (){
    return `${this.name} ${this.lastName}`
}
console.log(koder2)