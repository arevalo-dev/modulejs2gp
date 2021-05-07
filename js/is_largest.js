const numberOne = parseInt(window.prompt('Ingresa un Numero'))
const numberTwo = parseInt(window.prompt('Ingresa un Numero'))
const numberThree = parseInt(window.prompt('Ingresa un Numero'))

if (numberOne >= numberTwo && numberOne >= numberThree){
    console.log(`${numberOne} es el mayor`)
}else if (numberTwo >= numberOne && numberTwo >= numberThree){
    console.log(`${numberTwo} es el mayor`)
}else if (numberThree >= numberOne && numberThree >= numberTwo){
    console.log(`${numberThree} es el mayor`)
}else {
    console.log(`Todos los Numeros son iguales`)
}