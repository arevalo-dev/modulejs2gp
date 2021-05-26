// console.log("BOM")

// POST

// let Koders = {
//     name : 'victor',
//     lastname : 'arevalo',
//     age: 28,
//     position : 'koder'
// }
// const request = new XMLHttpRequest()
// request.open('POST','https://python2g-default-rtdb.firebaseio.com/koders/.json')
// request.addEventListener('readystatechange', () => {
//     if(request.readyState !== 4) {
//         return 
//     } else {
//         if(request.status >= 200 && request.status <= 299){
//             const response  = request
//             const objectResponse = JSON.parse(response.responseText)
//             console.log(objectResponse)
//         } else {
//             console.log('No se pudo ejecutar')
//         }
//     } 
// })
// request.send(
//     JSON.stringify(Koders)
// )

// {name: "-MaWDwdbPSr029XX0CKM"}

// DELETE

// const requestDelete = new XMLHttpRequest()
// let  idKoder = '-MaWDwdbPSr029XX0CKM'
// requestDelete.open('DELETE',`https://python2g-default-rtdb.firebaseio.com/koders/${idKoder}.json`)
// requestDelete.addEventListener('readystatechange', () => {
//     if(requestDelete.readyState !== 4) {
//         return 
//     } else {
//         if(requestDelete.status >= 200 && requestDelete.status <= 299){
//             const response  = requestDelete
//             const objectResponse = JSON.parse(response.responseText)
//             console.log(objectResponse)
//         } else {
//             console.log('No se pudo ejecutar')
//         }
//     } 
// })
// requestDelete.send()


// UPDATE
//PUT

// let Koders = {
//     name : 'Victor',
//     lastname : 'Arevalo',
//     age: 26,
//     position : 'Koder'
// }

// const requestPut = new XMLHttpRequest()
// requestPut.open('PUT','https://python2g-default-rtdb.firebaseio.com/koders/-MaWM7MOarfwaF_iAY7a.json')
// requestPut.addEventListener('readystatechange', () => {
//     if(requestPut.readyState !== 4) {
//         return 
//     } else {
//         if(requestPut.status >= 200 && request.status <= 299){
//             const response  = request
//             const objectResponse = JSON.parse(response.responseText)
//             console.log(objectResponse)
//         } else {
//             console.log('No se pudo ejecutar')
//         }
//     } 
// })
// requestPut.send(
//     JSON.stringify(Koders)
// )

//PATCH

// let Koders = {
//     age: 28
// }

// const requestPatch = new XMLHttpRequest()
// requestPatch.open('PATCH','https://python2g-default-rtdb.firebaseio.com/koders/-MaWM7MOarfwaF_iAY7a.json')
// requestPatch.addEventListener('readystatechange', () => {
//     if(requestPatch.readyState !== 4) {
//         return 
//     } else {
//         if(requestPatch.status >= 200 && requestPatch.status <= 299){
//             const response  = request
//             const objectResponse = JSON.parse(response.responseText)
//             console.log(objectResponse)
//         } else {
//             console.log('No se pudo ejecutar')
//         }
//     } 
// })
// requestPatch.send(
//     JSON.stringify(Koders)
// )


// UTILIZANDO FETCH (PROMESAS)

// const getAllKoders = ()=>{
//     fetch('https://python2g-a1463-default-rtdb.firebaseio.com/koders/.json')
//     .then(result =>{
//         console.log(result)
//         return result.json()
//     })
//     .then(response => {
//         console.log(response)
//     })
// }

// getAllKoders()