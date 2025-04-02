// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

let frase = prompt("Ingrese una palabra","Hola")
let vocales = prompt("Ingrese una vocal (a, e, i, o, u)","a")
let buscar = frase.find((element) => element = "a","e","i","o","u")
console.log(
    frase.indexOf(vocales) == -1
    ? `La vocal "${vocales}" no existe en la frase. ${buscar}`
    : `La vocal "${vocales}" existe en la frase.${frase.length}`
)
