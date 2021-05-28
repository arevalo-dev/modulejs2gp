// get data search
const params = new URLSearchParams(window.location.search)
let idkoder = params.get('idkoder')
console.log(idkoder)

const request = new XMLHttpRequest()
request.open('GET',`https://python2g-a1463-default-rtdb.firebaseio.com/koders/${idkoder}.json`)
request.addEventListener('readystatechange', () => {
    if(request.readyState !== 4) {
        return 
    } else {
        if(request.status >= 200 && request.status <= 299){
            const response  = request
            const objectResponse = JSON.parse(response.responseText)
            console.log(objectResponse)
            
            if(objectResponse !== null){
                let {name, lastname, position, age, github} = objectResponse
                document.querySelector('.card-title').innerHTML = `${name} ${lastname}`  
                document.querySelector('.card-text').innerHTML = `${position} <br> ${age} años`
                document.querySelector('.card_git').innerHTML = `Git Hub: <small>${github}</small>`
                document.querySelector('.btnEdit').href=`/updateuser.html?idkoder=${idkoder}`
            }

        } else {
            console.log('No se pudo ejecutar')
        }
    } 
})
request.send()