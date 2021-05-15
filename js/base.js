
// .map()

// funcion que dado un array
// genere un nuevo array con los mismos numeros como strings
// function stringItUp(arr) {
//     // sentences
// }
//console.log(stringItUp([2, 5, 100]));
// ["2", "5", "100"]


// function capitalizeNames(arr) {
//     // sentences
// }
//console.log(capitalizeNames(["jorge", "antOnio", "jUan", "victor"]))
// ["Jorge", "Antonio", "Juan", "Victor"]


// Dados 2 arrays
// array de nombres
// array de apellidos
// Crear una funcion que reciba los 2 arrays, 
// y retorne un array con los nombres completos


const joinNames = (arrNames, arrSurnames) => {
    return arrNames.map((value, index)=>`${value} ${arrSurnames[index]}`)
}

let name = ["jorge", "luis"]
let lastName = ["camarillo", "cristobal"]
let fullName = joinNames(name, lastName)
console.log (fullName)

//console.log( joinNames( ["jorge", "luis"], ['camarillo', 'cristobal'] ) )
// ["jorge camarillo ", "luis cristobal"]

// .reduce()

const totalAverage = arr => {
    return arr.reduce((acumulador, currentValue) =>{
        return acumulador + currentValue
    }, 0)
}

let array = [1,2,3]
console.log(totalAverage(array))


// function stringConcat(arr) {
//     return arr.reduce((acc, cv) => { 
//         return acc + cv
//     },'')
// }

const stringConcat = arr => arr.reduce((acc,cv) => acc+cv,'')

let myArray = [1,2,3]
console.log(stringConcat(myArray))

//console.log(stringConcat([1, 2, 3])); // "123"



// function totalShoppingCart(arr) {
//     return arr.reduce((acc, cv)=>{
//         return acc + cv[1]
//     }, 0)
// }

const totalShoppingCart = arr => arr.reduce( (acc,cv)=> acc+cv[1],0 )
let arr = [ ["Reloj", 500], ["Reloj", 300], ["Reloj", 1200] ] 
const totalAPagar = totalShoppingCart(arr)
console.log(`Total a pagar: ${totalAPagar}`)
// 2000