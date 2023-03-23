/*
    EJERCICIO 3:
    Finalmente, vamos a crear un código que cumpla con la misma
    condición pero con cualquier cantidad de ingresos.
    Dada una lista de números reales, ¿cómo podemos determinar
    el mayor de entre ellos? Realicemos los pasos necesarios
    para poder encontrar al número mayor de entre una lista o
    arreglo.

    const numeros = [5, 12, 2, 40, 33, 2, 8];
*/

const numeros   = [5, 12, 2, 40, 33, 2, 8];
let numeroMayor = numeros[0];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > numeroMayor) {
        numeroMayor = numeros[i];
    }  
}

console.log(numeroMayor);