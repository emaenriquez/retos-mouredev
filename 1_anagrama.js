/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
*/


const anagrama =(string_1,string_2)=> {
    if( string_1.toLowerCase().split('').sort().join('') === string_2.toLowerCase().split('').sort().join('') ) {
        console.log(true)
    } else { 
        console.log(false)
    }
}

anagrama('delira',"lidera")