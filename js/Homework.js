/**
 * Ejercicio 1
 * Dado el siguiente array de objetos generar
 * Funcion que pinte mi lista de deseos
 * Funcion que ordene por id mi lista de deseos
 * Funcion que ordene por nombre de producto mi lista de deseos
 * Funcion que ordene por precio mi lista de deseos
 */

 let wishList = [
    {
        iditem : 8,
        name : 'Adidas Grand Court',
        description : 'Adidas Grand Court Base EE7905 Tenis para Hombre',
        price : 859,
        imgurl : 'https://www.amazon.com.mx/images/I/71wNHYOh60L._AC_SX695_.jpg'
    },
    {
        iditem : 6,
        name : 'Nike Metcon',
        description : 'Nike Metcon Sport Aq7489-008 - Zapatillas deportivas para hombre',
        price : 990,
        imgurl : 'https://www.amazon.com.mx/images/I/71dLLLfSfUL._AC_SY695_.jpg'
    },
    {
        iditem : 3,
        name : 'Nike Carreras',
        description : 'Nike Carreras de mujer',
        price : 1200,
        imgurl : 'https://www.amazon.com.mx/images/I/71wNHYOh60L._AC_SX695_.jpg'
    }
]

// Funcion que pinta mi lista de deseos
const wishListFunction = (whishObj, target) =>{
let wishListElements = ''
whishObj.forEach(item=>{
    let {name, description, price, imgurl} = item
    wishListElements += `
    <div class="card shadow-lg p-3 mb-5 bg-body rounded col-3 m-4">
        <img src="${imgurl}" class="card-img-top img-fluid " alt="pictureItem">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${description}</p>
            <p class="card-text">Price: $ ${price}</p>
            <a href="#" class="btn btn-primary">Agregar al Carrito</a>
        </div>
    </div>
    `
})
let wishListSelector = document.querySelector(target)
wishListSelector.innerHTML = wishListElements
}
wishListFunction(wishList, "body .wish")


// Funcion que ordene por id mi lista de deseos
let wishListId = wishList.sort((id1,id2)=>id1.iditem < id2.iditem ? -1 : 1)
wishListFunction(wishListId, "body .wish-id")

// Funcion que ordene por nombre de producto mi lista de deseos
let wishListName = wishList.sort((name1,name2)=>name1.name < name2.name ? -1 : 1)
wishListFunction(wishListName, "body .wish-name")

// Funcion que ordene por precio mi lista de deseos
let wishListprice = wishList.sort((price1,price2)=>price1.price < price2.price ? -1 : 1)
wishListFunction(wishListprice, "body .wish-price")

/**
 * Estudiar Eventos 
 * https://www.w3schools.com/js/js_events.asp
 * https://developer.mozilla.org/es/docs/Web/Events
 * https://www.javascripttutorial.net/javascript-dom/javascript-events/
 */