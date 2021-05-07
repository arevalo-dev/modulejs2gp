console.log('Funciones')

// definicion de la funciion

function myFunction (){
    console.log('mi primera funcion')
}
//llamar a la funcion
myFunction()


//el return termina la funcion y ademas retorna un valor
function getPi (){
    return 3.1416
}

function getDollar (){
    let dollar = 21
    if(dollar == 20){
        return dollar
    }
    return 30
}


// Funciones con paramnetros

function functionParams(param1, param2){
    console.log(param1, param2)

}

let valor1 = 1
let valor2 = 2
functionParams(valor1, valor2)