/*
    EJERCICIO 5: JS Funciones solo el nombre
    Teniendo como punto de partida la cadena de texto 'Hola!, soy Carli', almacenada en la
    variable 'frase' deberemos recortarla para poder obtener el nombre 'Carli' en una nueva
    variable llamada licenciada.

    IMPORTANTE: Para la resolución tendremos que usar la función slice().
*/

let frase = 'Hola!, soy Carli';
let licenciada = frase.slice(11, 16);

console.log(licenciada);