// Funcion Pintar Koders
const printPosts = (objKoders) => {
    let acc = ''
    for(koder in objKoders){
        let id = 0  
        let {name, lastname, github, age, position} = objKoders[koder]
        acc += `
        <tr>
          <th scope="row">${id+=1}</th>
          <td>${name}</td>
          <td>${lastname}</td>
          <td>${github}</td>
          <td>${age}</td>
          <td>${position}</td>
          <td>
            <button class="btn btn-outline-danger me-3 btnDelete" data-id="${koder}">Eliminar</button>
            <a type="button" class="btn btn-outline-primary" href="/koder.html?idkoder=${koder}">Ver Koder</a>
          </td>
        </tr>
        `
    }
    let list_koders = document.querySelector('.list__koders tbody')
    list_koders.innerHTML = acc
}

// Funcion Actualiza la Data
const refresh = ()=>{
const request = new XMLHttpRequest()
request.open('GET','https://python2g-a1463-default-rtdb.firebaseio.com/koders/.json')
request.addEventListener('readystatechange', () => {
    if(request.readyState !== 4) {
        return 
    } else {
        if(request.status >= 200 && request.status <= 299){
            
            const objectResponse = JSON.parse(request.responseText)
            printPosts(objectResponse)
           
        } else {
            console.log('No se pudo ejecutar')
        }
    } 
})
request.send()
}

// Funcion Eliminar

const functionDelete = (id)=>{
const requestDelete = new XMLHttpRequest()
requestDelete.open('DELETE',`https://python2g-a1463-default-rtdb.firebaseio.com/koders/${id}.json`)
requestDelete.addEventListener('readystatechange', () => {
    if(requestDelete.readyState !== 4) {
        return 
    } else {
        if(requestDelete.status >= 200 && requestDelete.status <= 299){
            const response  = requestDelete
            const objectResponse = JSON.parse(response.responseText)
            refresh()
        } else {
            console.log('No se pudo ejecutar')
        }
    } 
})
requestDelete.send()
}

// Boton Eliminar
let btnDelete = document.querySelector('.list__koders tbody')
btnDelete.addEventListener('click', (e)=>{
    console.log(e)
    if(e.target.classList.contains('btnDelete')){
        let id = e.target.dataset.id
        functionDelete(id)
        alert('Koder Eliminado')
    }
})


refresh()