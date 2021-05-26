// Funcion Actualizar

const functionUpdate = (id)=>{
    const request = new XMLHttpRequest()
    request.open('PATCH', `https://python2g-a1463-default-rtdb.firebaseio.com/koders/${id}.json`)
    request.addEventListener('readystatechange', () => {
        if(request.readyState !== 4) {
            return 
        } else {
            if(request.status >= 200 && request.status <= 299){
                const response  = request
                const objectResponse = JSON.parse(response.responseText)
                console.log(objectResponse)
            } else {
                console.log('No se pudo ejecutar')
            }
        } 
    })
    request.send(
        JSON.stringify(objNewKoder)
    )
}

// Boton Actualizar
let btnUpdate = document.getElementById('btnUpdate')
if (btnUpdate){
    btnUpdate.addEventListener('click', ()=>{
            // functionDelete('-MaZkCASJMhxhutN5ZUL')
            alert('Actualizado Correctamente')
    })
}