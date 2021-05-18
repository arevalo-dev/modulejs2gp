console.log("Objetos")

let koder = {
    name: 'rose',
    lastName: 'ortega',
    gender: 'F',
    age: 20,
    getFullName : function(){
        return `${this.name} ${this.lastName}`
    }
}

let fullNamekoder = koder.getFullName()
let ageKoder = koder.age

console.log(fullNamekoder, ageKoder)

// convertir un array de arrays 
// a un array de objetos
// [
//     ['entrada','principal','postre','precio']
// ]
// [
//     {
//         entrada: "value",
//         principal: "value",
//         postre: "value",
//         precio: value
//     }
// ]

let pedidos= [
    {
        entrada:'ensalada de pepinos',
        principal:'paella',
        postre:'platano',
        precio:100
    },
    {
        entrada:'ensalada de tomates',
        principal:'pescado',
        postre:'helado',
        precio:120
    },
    {
        entrada:'ensalada simple',
        principal:'paella',
        postre:'yogurt',
        precio:80
    },
    {
        entrada:'ensalada simple',
        principal:'enchiladas',
        postre:'yogurt',
        precio:80
    },
    {
        entrada:'ensalada cesar',
        principal:'salmón',
        postre:'platano',
        precio:100
    }
]

// Se imprimen todos los pedidos
// pedidos.forEach((value)=>{
//     console.log(value)
// })

// Se imprimen solo los precios
// pedidos.forEach((value)=>{
//     //tomo la propiedad precio del objeto iterado
//     console.log(value.precio)
// })



//     Funcion que devuelve el total de pedidos que tienen como plato principal "paella"
// const principal = pedidos.filter( (cv)=> {
//     if(cv.principal === 'paella'){
//         return cv
//     }
// }, 0).length

const principal = pedidos.filter( cv=> cv.principal === 'paella' ? cv: '', 0).length
console.log(principal)



//     Funcion que devuelve los pedidos que tienen como postre "platano" o "helado" 

// const postre = pedidos.filter( (cv)=> {
//     if(cv.postre === 'platano' || cv.postre === 'helado'){
//         return cv
//     }
// })

const postres = pedidos.filter( cv=> cv.postre === 'platano' || cv.postre === 'helado' ? cv: '')
console.table(postres)



//     Funcion que devuelve los pedidos que tengen un precio superior a 90 

// const pedidoNoventa = pedidos.filter( (cv)=> {
//     if(cv.precio > 90){
//         return cv
//     }
// })

const pedidoNoventa = pedidos.filter( cv=> cv.precio > 90 ? cv: '')
console.table(pedidoNoventa)



//     Funcion que devuelve los pedidos que tengen un precio inferior a 90 
// const pedidoMNoventa = pedidos.filter( (cv)=> {
//     if(cv.precio < 90){
//         return cv
//     }
// })

const pedidoMNoventa = pedidos.filter( cv=> cv.precio < 90 ? cv: '')
console.table(pedidoMNoventa)

var library = []

let objPedido = {
    entrada:'ensalada de pepinos',
    principal:'paella',
    postre:'platano',
    precio:100,
    coords: [43.322001, -99.00002]
}

// for (item in objPedido){
//     if (item === "coords" || typeof objPedido[item] === 'object'){
//         console.log(`Lat: ${objPedido[item][0]}, Long: ${objPedido[item][1]}`)
//     }else{
//         console.log(objPedido[item])
//     }
// } 

let keys = Object.keys (objPedido)
console.log(keys)
// devuelve las llaves de un objeto en array
// (5) ["entrada", "principal", "postre", "precio", "coords"]

// keys.forEach((item)=>{
//     if (item === "coords" || typeof objPedido[item] === 'object'){
//         console.log(`Lat: ${objPedido[item][0]}, Long: ${objPedido[item][1]}`)
//     }else{
//         console.log(objPedido[item])
//     }
// })

let entries = Object.entries(objPedido)
console.log(entries)
// convierte un objeto en arrays dentro de arrays
// (5) [Array(2), Array(2), Array(2), Array(2), Array(2)]

let values = Object.values(objPedido)
console.log(values)
// devuelve los valores contenidos en las llaves de un objeto
// (5) ["ensalada de pepinos", "paella", "platano", 100, Array(2)]

values.forEach((value) =>{
    console.log(value)
})
// hace una iteracion y devuelve los valores estraidos de un objeto con el metodo values