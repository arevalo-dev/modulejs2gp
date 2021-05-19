console.log("Getters y Setters")

// metodos de los objetos

// let koder = {
//     name: 'victor',
//     lastName: 'arevalo',
//     age: 30,
//     getFullName: function(){
//         return `${this.name} ${this.lastName}`
//     }
// }
// console.log(koder.getFullName())



// let koders = [
//     {
//         name: 'victor',
//         lastName: 'arevalo',
//         age: 30
//     },
//     {
//         name: 'pedro',
//         lastName: 'perez',
//         age: 35
//     },
//     {
//         name: 'fulanito',
//         lastName: 'perez',
//         age: 28
//     }
// ]

// koders.forEach(koders => {
//     koders.getFullName= function(){
//         return `El koder ${this.name} ${this.lastName} tiene ${this.age} anos`
//     }
// })

// koders.forEach(koders => {
//     console.log(koders.getFullName())
// })


// Get 
// Es una funcion que obtiene un valor de una propiedad.

// Set
// Funcion que establece un valor de una propiedad.

let koderGetSet = 
    {
        name: 'victor',
        lastName: 'arevalo',
        age: 30,
        status: false,
        // accesors
        get fullName() {
            return `${this.name} ${this.lastName}`
        },
        set statusKoder(status) {
            this.status = status
        }
    }

console.log(koderGetSet.fullName)
console.log(koderGetSet)
koderGetSet.statusKoder = true
console.log(koderGetSet)