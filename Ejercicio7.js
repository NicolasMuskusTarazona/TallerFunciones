// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

let numeros = [1,2,3,4,5,6]

let filtrar = numeros.filter((a) => a %2 === 0) 

let suma = filtrar.reduce((acumulador, valorActual) => {
    return acumulador + valorActual;
}, 0);
console.log(`Lista de numeros pares: ${filtrar}`)
console.log(`Suma lista numeros pares = ${suma}`)