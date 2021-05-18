/** 
 * Teniendo como base este array de objetos
 * Crear las funciones que :
 * Ordene el array de objetos de acuerdo al titulo
 * Ordene el array de objetos de acuerdo al autor
 * Ordene el array de objetos de acuerdo al "readingStatus"
 * Filtre los libros que estan ocupados
 */  

// let library = [ 
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title:  'Mockingjay: The Final Book of The Hunger Games', 
//         readingStatus: false
//     }
// ]
// console.log("Objeto Completo")
// console.table(library)

// const compareTitle = array=> array.sort((title1,title2)=> (title1.title < title2.title) ? -1 :1)
// console.log("Objeto Ordenado por title")
// console.table(compareTitle(library))

// const compareAuthor = array=> array.sort((author1,author2)=> (author1.author < author2.author) ? -1 :1)
// console.log("Objeto Ordenado por Author")
// console.table(compareAuthor(library))

// const compareReadingStatus = array=> array.sort((status1,status2)=> (status1.readingStatus < status2.readingStatus) ? -1 :1)
// console.log("Objeto Ordenado por Status")
// console.table(compareReadingStatus(library))

// const ocupado = array => array.filter(cv=>cv.readingStatus === false ? cv: '')
// console.log("Objeto Filtrado solo ocupados")
// console.table(ocupado(library))


/**
 * Dado un string
 * crear una funcion que sustitya cada caracter del string
 * con la letra siguiente del abecedario
 **/

const moveCharsForward = (str) =>{
    // code here
    return str.map((value)=>{
        return value * 1
    })
}  

console.log(moveCharsForward('abcde'))

// // -> 'bcdef'





/**
 * Dado un array con objetos que tienen la propiedad de fecha de nacimiento
 * convertir las fechas de formato yyyy/mm/dd
 * al formato dd/mm/yyyy
 * console.log(moveCharsForward( [{ name:'Jorge', birthdate: '1991/05/12' }] ))
// -> [{ name:'Jorge', birthdate: '05/12/1991' }, ...]
 * */

// let arrayDate = [
//     {
//         name:'Jorge',
//         birthdate: '1991/05/12'
//     },
//     {
//         name:'luis',
//         birthdate: '1991/02/12'
//     },
//     {
//         name:'mario',
//         birthdate: '1991/04/12'
//     },
//     {
//         name:'victor',
//         birthdate: '1991/09/12'
//     }
// ]

// const convertBirthdates = (arr) =>{
    
// }  
// console.log(moveCharsForward( [{ name:'Jorge', birthdate: '1991/05/12' }] ))
// -> [{ name:'Jorge', birthdate: '05/12/1991' }, ...]
