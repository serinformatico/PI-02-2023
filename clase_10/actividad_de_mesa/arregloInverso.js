/*
    CONSIGNA:
    Arreglo Inverso
    En este ejercicio deberás crear una función que devuelva un arreglo
    con sus elementos invertidos, sin modificarlo. Luego, deberás hacer
    una función que lo modifique e invierta el orden de sus elementos.
        1. Creá la Función imprimirInverso que tome un Arreglo de cinco
        elementos como Argumento y que imprima en la consola cada elemento
        en orden inverso (no tenés que invertir el Arreglo).
        2. Creá la Función inversor que tome un Arreglo de 5 elementos
        como Argumento y devuelva uno nuevo invertido.
*/

function imprimirInverso(array) {
    for (let i = array.length-1; i >= 0; i--) {
        console.log(array[i]);
    }
}

const numeros = [1, 2, 3, 4, 5];
console.log("\n ===== Impresión Inversa ===== ");
imprimirInverso(numeros);


function invertirArray(array) {
    let nuevoArray = [];

    for (let i = array.length-1; i >= 0; i--) {
        nuevoArray.push(array.pop());
    }

    return nuevoArray;
}

const letrasAscendentes  = ["A", "B", "C", "D"];
const letrasDescendentes = invertirArray(letrasAscendentes);

console.log("\n ===== Nuevo array inverso ===== ");
console.log(letrasDescendentes);