// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
  })()

// crear usuario

btncreate = document.getElementById('btn__create--koder')
btncreate.addEventListener('click', () => {

    inputname = document.getElementById('name').value
    inputlastname = document.getElementById('lastname').value
    inputgithub = document.getElementById('github').value
    inputage = parseInt(document.getElementById('age').value)
    inputposition = document.getElementById('position').value

    if(inputname == '' || inputlastname == '' || inputgithub=='' || inputage == '' || inputposition == ''){
      console.log('Faltan datos obligatorios')
      return
  }

    let newUserObject = {
        name: inputname,
        lastname: inputlastname,
        github: inputgithub,
        age: inputage,
        position: inputposition
    }

    const requestSend = new XMLHttpRequest()
    requestSend.open('POST','https://python2g-a1463-default-rtdb.firebaseio.com/koders/.json')
    requestSend.addEventListener('readystatechange', () => {
        if(requestSend.readyState !== 4) {
            return 
        } else {
            if(requestSend.status >= 200 && requestSend.status <= 299){
                window.location.pathname = '/users.html'
            } else {
                alert('No se pudo ejecutar')
            }
        } 
    })
    requestSend.send(
        JSON.stringify(newUserObject)
    )
    alert('Usuario Creado Exitosamente')
})