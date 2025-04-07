// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function esPrimo(numero) {
    if (numero < 2) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false
        }
    }
    return true
}

let numero = Number(prompt("Ingrese un numero: "))
if (esPrimo(numero)) {
    console.log(numero + " es primo")
} else {
    console.log(numero + " no es primo")
}
