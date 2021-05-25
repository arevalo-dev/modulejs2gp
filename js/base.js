console.log("BOM")

// DOM -> Document Object Model
// BOM -> Browser Object Model

// window
//     document // DOM

//     location // Bom
//     navigator // Bom
//     history // Bom

let koders = [
    {
        id: 1,
        name: 'Jorge',
        bio: 'lLorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, quia?',
        git: '/dered-dev',
        imgkoder:'https://picsum.photos/200'
    },
    {
        id: 2,
        name: 'Antonio',
        bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, quia?',
        git: '/rose-dev',
        imgkoder:'https://picsum.photos/200'
    }   
]

// console.log(koders)
// http://127.0.0.1:5500/?idkoder=233443
let search = window.location.search
let start = search.indexOf('=') + 1
let idkoder = parseInt(search.slice(start))


let koderObject = koders.filter((koder)=> {
    if(koder.id === idkoder){
        return  koder
    }
})[0]

const printKoder = (objkoder) => {
    let {id, name, bio, git, imgkoder } = objkoder
    // document.querySelector('.img').setAttribute('src', imgkoder)
    document.querySelector('.card-title').innerText = name
    document.querySelector('.card-text').innerText = bio
    document.querySelector('.btn-primary').innerText = git
    document.querySelector('.btn-primary').setAttribute('href',`https://github.com${git}`)
    document.querySelector('.btn-primary').setAttribute('target','_blank')
}

printKoder(koderObject)

