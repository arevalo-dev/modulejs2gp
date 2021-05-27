// console.log("BOM")

$(document).ready( ()=>{

// $('.container > div').addClass('list')
// $('ol li').addClass('List_item')


for (let i = 0; i<10; i++){
    $('.container ul').append('<li></li>')
    $('.container ol').prepend('<li></li>')
}

$('.content').html('<p>Hola Koder</p>').css({'background': '#333', 'color': '#fff'})
$('h2').text('Learning Jquery')


})