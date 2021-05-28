$(document).ready( ()=>{

    const params = new URLSearchParams(window.location.search)
    let idkoder = params.get('idkoder')

    fetch(`https://python2g-a1463-default-rtdb.firebaseio.com/koders/${idkoder}.json`)
    .then(result =>{
        return result.json()
    })
    .then(response => {
        $('#name').val(`${response.name}`)
        $('#lastname').val(`${response.lastname}`)
        $('#age').val(`${response.age}`)
        $('#github').val(`${response.github}`)
        $('#position').val(`${response.position}`)
    })

    const update = (id)=>{
    const objKoder = {
        name: $('#name').val(),
        lastname: $('#lastname').val(),
        age: parseInt($('#age').val()),
        github: $('#github').val(),
        position: $('#position').val()
    }

    console.log(objKoder)


    fetch(`https://python2g-a1463-default-rtdb.firebaseio.com/koders/${id}.json`, {
        method: 'PUT',
        body: JSON.stringify(objKoder)
    })
    .then(result =>{
        result.json()
    })
    }

    
    $('#btnUpdate').click(()=>{
        alert('Hola')
    })

})



// Funcion Actualizar

// const functionUpdate = (id)=>{
//     const request = new XMLHttpRequest()
//     request.open('PATCH', `https://python2g-a1463-default-rtdb.firebaseio.com/koders/${id}.json`)
//     request.addEventListener('readystatechange', () => {
//         if(request.readyState !== 4) {
//             return 
//         } else {
//             if(request.status >= 200 && request.status <= 299){
//                 const response  = request
//                 const objectResponse = JSON.parse(response.responseText)
//                 console.log(objectResponse)
//             } else {
//                 console.log('No se pudo ejecutar')
//             }
//         } 
//     })
//     request.send(
//         JSON.stringify()
//     )
// }


