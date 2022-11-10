/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
*/

function invertirCadena(str){

    let cadena_invertida = ""

    for (let i = str.length - 1; i >= 0 ; i--) {
        cadena_invertida += str[i]
    }

    console.log(cadena_invertida)
}

invertirCadena("hola")