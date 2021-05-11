/**
 * Convertidor de temperatura
 * Generar una función, que reciba (grados, entrada, salída ) 
 * Default es ºC a ºF
 * p.ej. (100,c,f) -> 100 ºC a ºF -> Default
 * p.ej. (100,f,c) -> 100 ºF a ºC
 * C to F -> (celsius*9)/5 + 32
 * F to C -> ((fahrenheit - 32)*5)/9
 *
 */

 function celsiusToF(temp, initial = "c", finish = "f") {
    if (initial == "c" && finish == "f") {
        let result = (temp * 9) / 5 + 32
        return `Su temperatura es ${result} grados Celsius`
    }
    if (initial == "f" && finish == "c") {
        let result = ((temp - 32)*5)/9
        return `Su temperatura es ${result} grados Fahrenheit`
    }
}

/**
 * Ejercicio
 * Simular el funcionamiento de un cajero
 * 
 * considerar estas acciones
 * 1. Retiro de efectivo (cantidad)
 * 2. Depósito (cantidad)
 * 3. Consulta de saldo () 
 * 4. Traspasar a la cuenta 1234 $500 (cuenta, cantidad)
 * 
 * Datos iniciales
 * Saldo inicial: $2000
 * Consultas de saldo = 2000
 * Depósitos = 0
 * Retiros = 0
 * 
 * 
 * Pasos a ejecutar
 * 1. Depositar 2000
 * 2. Retirar 450
 * 3. Consultar saldo
 * 4. Retirar 400
 * 5. Consultar saldo
 * 
 */

var saldoInicial = 2000
var saldoActual = saldoInicial
var consultas = 0
var depositos = 0
var retiros = 0
var traspasos = 0

function retirar (cantidad){
    if (cantidad > 0){
        if(saldoActual >= cantidad){
            saldoActual -= cantidad
            retiros += 1
            return "Retiro Exitoso"
        }else{
            return "Saldo Insuficiente"
        } 
    }else{
        return "Ingresa un numero mayor que cero"
    }
}

function depositar (cantidad){
    if (cantidad > 0){
        saldoActual += cantidad
        depositos += 1
        return "Deposito abonado a su cuenta con Exito"
    }else{
        return "Ingresa un numero mayor que cero"
    }
}

function consultarSaldo (){
    consultas += 1
    return saldoActual
}

function traspasar (cuentaDestino, cantidad){
    if(cantidad > 0){
        if(saldoActual >= cantidad){
            saldoActual -= cantidad
            traspasos += 1
            return `Traspaso a la cuenta ${cuentaDestino}, se realizo exitosamente`
        } else{
            return "Saldo Insuficiente"
        }
    }else{
        return "Ingresa un numero mayor que cero"
    }
}


var saldoInicial = 2000
var saldoActual = saldoInicial
var consultas = 0
var depositos = 0
var retiros = 0
var traspasos = 0

const retirar = function (cantidad){
    if (cantidad > 0){
        if(saldoActual >= cantidad){
            saldoActual -= cantidad
            retiros += 1
            return "Retiro Exitoso"
        }else{
            return "Saldo Insuficiente"
        } 
    }else{
        return "Ingresa un numero mayor que cero"
    }
}

const depositar = function(cantidad){
    if (cantidad > 0){
        saldoActual += cantidad
        depositos += 1
        return "Deposito abonado a su cuenta con Exito"
    }else{
        return "Ingresa un numero mayor que cero"
    }
}

const consultarSaldo = function(){
    consultas += 1
    return saldoActual
}

const traspasar = function(cuentaDestino, cantidad){
    if(cantidad > 0){
        if(saldoActual >= cantidad){
            saldoActual -= cantidad
            traspasos += 1
            return `Traspaso a la cuenta ${cuentaDestino}, se realizo exitosamente`
        } else{
            return "Saldo Insuficiente"
        }
    }else{
        return "Ingresa un numero mayor que cero"
    }
}