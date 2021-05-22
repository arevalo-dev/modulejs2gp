console.log("Eventos")

// // addEventListener
// // preventDefault()
// // stopPropagation()

// // Click

// // function funcionDeClick (){
// //     console.log('click desde event listener')
// // }
// // buttonClick.addEventListener('click', funcionDeClick)


// let buttonClick = document.getElementById('eventlistener')
// buttonClick.addEventListener('click', ()=> {
//     console.log('click desde event liostener')
// })

// buttonClick.addEventListener('focus', ()=> {
//     console.log('focus desde event liostener')
// })

// buttonClick.addEventListener('mouseenter', ()=> {
//     console.log('mouseenter desde event liostener')
// })

// buttonClick.addEventListener('mouseleave', ()=> {
//     console.log('mouseleave desde event liostener')
// })

// // keyboard events

// // keydown -> al presionar
// // keypress -> al llegar al tope de la tecla
// // keyup -> al soltar la tecla


// let inputSearch = document.getElementById('search')
// let textSearch = document.getElementById('searchtext')

// inputSearch.addEventListener('keyup', ()=>{
//     let text = inputSearch.value
//     console.log(text)
//     textSearch.innerHTML = text
// })

// websockets 
// AJAX
// Real time
// SG <-F <-Y  



let koders = [
    {
        id: 23,
        name:'Jorge'
    },
    {
        id: 31,
        name:'Antonio'
    },
    {
        id: 12,
        name:'Ferdinand'
    },
    {
        id: 20,
        name:'Rose'
    },
    {
        id: 2,
        name:'Rose'
    },
    {
        id: 85,
        name:'Osmar'
    }
]

// Ordenar el array y lo almacena //
// postulados => almacena los koders postulados en orden menor a mayor segun el id
let postulados = [...koders].sort((a,b)=> a.id < b.id ? -1 : 1)
// enroll => almacena los koders inscrito y los ordena de menor a mayor segun el id
let enroll = [].sort((a,b)=> a.id < b.id ? -1 : 1)

// Funcion para Insertar al HTML //
// koderObj => recibe el array 
// target => indica el id del selector donde se insertara el HTML
// type => indica el tipo de informacion, para "koders postulados" == 'list' 
const kodersFunction = (kodersObj, target, type) =>{
    let kodersSortElement = ''
    kodersObj.forEach(item=>{
        let {id, name} = item
        let btnAction = type === 'list' ? `enrollKoder(${id})` : `removeKoder(${id})`
        let btnActionText = type === 'list' ? "Inscribir" : "Dar de Baja"
        let btnStyle = type === 'list' ? `type="button" class="btn btn-outline-primary btn-sm"` : `type="button" class="btn btn-outline-danger btn-sm"`
        kodersSortElement += `
            <tr>
              <td>${id}</td>
              <td>${name}</td>
              <td>
                <button ${btnStyle} onclick="${btnAction}">${btnActionText}</button>
              </td>
            </tr> 
        `
    })
    let kodersSortSelector = document.querySelector(target)
    kodersSortSelector.innerHTML = kodersSortElement
    }


// Funcion para inscribir un koder
const enrollKoder = (idKoder)=>{
    // get koder data
    let koderItem = postulados.filter(koder => {
        if(koder.id === idKoder){
            return koder
        }
    })
    enroll.push(koderItem[0])
    console.log(koderItem)

    // filter array without koder
    let kodersNotDeleted = postulados.filter(koder => {
        if(koder.id !== idKoder){
            return koder
        }
    })
    console.log(kodersNotDeleted)
    postulados = [...kodersNotDeleted]

    kodersFunction(postulados, ".postulados tbody", 'list' )
    kodersFunction(enroll, ".enroll tbody", 'enroll' )
}

// Funcion para dar de baja un koder
const removeKoder = (idKoder)=>{
    // tu codigo aqui
}


// Invocando la Funcion kodersFunction => Muestra la lista de Koders Postulados Ordenada por el id
kodersFunction(postulados, ".postulados tbody", 'list' )
// Invocando la Funcion kodersFunction => Muestra la lista de Koders inscritos Ordenada por el id
kodersFunction(enroll, ".enroll tbody", 'enroll' )
    
