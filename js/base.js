// console.log("Introduccion al DOM")

// //DOM

// //Document Objet Model (document)
// // Seleccionar un tag

// let element = document.getElementById('title_page_id')
// // console.log(element.classList)
// // console.log(element.dataset)
// // console.log(element.id)
// // console.log(element.innerText)
// // console.log(element.innerHTML)
// // console.log(element.getAttribute('class'))
// // console.log(element.getAttribute('id'))
// // console.log(element.getAttribute('data-id'))


// // Ocupado para iterar arrays
// element.classList.forEach((item)=>{
//     console.log(item)
// })

// // Ocupado para iterar objetos
// for(item in element.dataset){
//     console.log(item)
// }

// // Seleccionando un elemento del HTML
// let headings = document.getElementsByTagName('h2')
// let secondHead = headings[1]
// // agregando atributos
// secondHead.classList.add('tal')
// secondHead.classList.remove('clase')
// secondHead.id = 3
// secondHead.setAttribute('data-id', 3)
// secondHead.setAttribute('data-custom', 'customvalue')

// document.createElement('crea una etiqueta de HTML')
// document.createTextNode('texto dentro del elemento HTML')
// element.appendChild(node)

// formamos el li
// let listItem = document.createElement('li')
// let textoLi = document.createTextNode('Texto del li')
// listItem.appendChild(textoLi)


// Seleccionando un UL para hacerla dinamica e insertamos el li
// let lista = document.querySelector('.lista')
// lista.appendChild(listItem)


// Se declara el origen de la informacion
// let koders = ['ferdinand', 'victor', 'rose']

// Iteramos para formar el elemento HTML mediante forEach

// koders.forEach(item =>{
//     let koderItem = document.createElement('li')
//     let nameKoder = document.createTextNode('item')
//     koderItem.appendChild(nameKoder)
//     lista.appendChild(koderItem)
// })



// Insertando elementos HTML dinamicos 
// let lista = document.querySelector('.lista')
// let koders = ['ferdinand', 'victor', 'rose']
// let listKoders = ''

// koders.forEach((nameKoder, index) =>{
//     listKoders += `
//         <li 
//         id= "koder${index + 1}">${nameKoder}</li>
//     `
// })

// lista.innerHTML = listKoders

// 


let koders = ['ferdinand', 'victor', 'rose', 'jorge']
let listKoders = ''

koders.forEach((nameKoder, index) =>{
    listKoders += `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${nameKoder}</td>
        </tr>
    `
})

let table = document.querySelector(".table-array tbody")
table.innerHTML = listKoders



let kodersObject  = [
    {
        name: 'jorge',
        lastName: 'camarillo',
        age: 30,
        github:'@dered-dev'
    },
    {
        name:'victor',
        lastName:'arevalo',
        age: 28,
        github:'@arevalo-dev'
    },
    {
        name:'ferdinand',
        lastName:'Bracho',
        age: 20,
        github:'@ferdinand-dev'
    },
    {
        name:'ferdinand',
        lastName:'Bracho',
        age: 20,
        github:'@ferdinand-dev'
    },
    {
        name:'ferdinand',
        lastName:'Bracho',
        age: 20,
        github:'@ferdinand-dev'
    },
    {
        name:'ferdinand',
        lastName:'Bracho',
        age: 20,
        github:'@ferdinand-dev'
    }
]


let listKodersTwo = ''
kodersObject.forEach((item, index)=>{
    let {name, lastName, age, github} = item
    listKodersTwo += `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${name}</td>
            <td>${lastName}</td>
            <td>${age}</td>
            <td>${github}</td>
        </tr>
    `
})
let tableTwo = document.querySelector(".table-obj tbody")
tableTwo.innerHTML = listKodersTwo


// bootstrap
// metodos de Array
// template literals
// destructuracion de objetos