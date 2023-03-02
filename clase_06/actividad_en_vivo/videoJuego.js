/*
    CONSIGNA:
    1. Comencemos por crear las variables necesarias. Estas podrían ser: cantidad de
    personajes, nombre de cada personaje, cant de vidas, objetivos, niveles, etc.

    2. Ahora continuaremos dándole el funcionamiento deseado a nuestro archivo. Por
    ejemplo, podemos hacer una función que sirva para presentar al personaje, o una
    función que indique en qué nivel se encuentra, o incluso que diga su frase célebre.
    Para cada función será necesario crearla de forma declarada, expresada y como
    arrow function. Analiza las diferencias.
*/

let cantidadDePersonajes = 2;
let nombreDelPrimerPersonaje = "Laura";
let nivelDelPrimerPersonaje = 23;
let nombreDelSegundoPersonaje = "Juan";
let nivelDelSegundoPersonaje = 14;

let cantidadDeVidas = 3;
let cantidadDeNiveles = 100;

function presentarPersonaje(personaje) {
    return "Mi personaje es " + personaje;
}

const nivelEnElQueEstoy = function (nivel) {
    return "Mi nivel en el que estoy es " + nivel;
}

console.log(presentarPersonaje(nombreDelSegundoPersonaje));

console.log(nivelEnElQueEstoy(nivelDelPrimerPersonaje));