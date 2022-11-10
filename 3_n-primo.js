/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
*/

let n = 11
let n_is_primo = true

for (let i = 2; i < n / 2; i++) {
    if(n % i === 0){
        n_is_primo = false
    }
}

if(n_is_primo){ 
    console.log('si es un numero primo')
} else {
    console.log('no es un numero primo')
}

// imprime los números primos entre 1 y 100.
const numero_primo =(n)=>{
    if(n < 2){
        return false
    }

    for (let i = 2; i < n; i++) {
        if(n % i === 0){
            return false
        }
    }

    return true
}

const mostrar = (n)=>{
    let res = []
    for (let i = 2; i < n; i++) {
        if(numero_primo(i)){
            res.push(i)
        }        
    }
    return res
}

console.log(mostrar(100))