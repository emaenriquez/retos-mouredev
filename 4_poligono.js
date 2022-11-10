/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
*/

function area_poligono(poligono,base,altura){
    let area;
    switch (poligono) {

        case 'triangulo':
            area = 1/2 * base * altura
            console.log(`el area de un triangulo es ${area}`)
            break;

        case 'cuadrado':
            area = base * altura
            console.log(`el area de un cuadrado es ${area}`)
            break;

        case 'rectangulo':
            area = base * altura
            console.log(`el area de un reactangulo es ${area}`)
            break;

        default:
            console.log('lo siento nose encontro el poligono')
            break;
    }

}
area_poligono('triangulo',8,10)
area_poligono('cuadrado',6,6)
area_poligono('rectangulo',4,3)

