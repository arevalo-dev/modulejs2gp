$(document).ready( ()=>{

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


    const params = new URLSearchParams(window.location.search)
    let idkoder = params.get('idkoder')

    fetch(`https://python2g-a1463-default-rtdb.firebaseio.com/koders/${idkoder}.json`)
    .then(result =>{
        return result.json()
    })
    .then(response => {
        console.log(response)
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
        console.log(id)
    
        fetch(`https://python2g-a1463-default-rtdb.firebaseio.com/koders/${id}.json`, {
            method: 'PATCH',
            body: JSON.stringify(objKoder)
        })
        .then(result =>{
            return result.json()
        })
        .then(response => {
            window.location.pathname = '/users.html'
            // console.log(response)
        })
    }
    
    $('#btnUpdate').click((event)=>{
            event.preventDefault()
            update(idkoder)
    })
})