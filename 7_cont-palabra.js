/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
*/

let text = "hola hola gato hola"
let text_split = text.split(" ")

let text_list = {}

text_split.forEach(word=>{
    
    if(text_list[word]){
        text_list[word] += 1
    } else{
        text_list[word] = 1
    }

})

console.log(text_list)