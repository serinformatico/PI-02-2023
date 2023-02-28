/*
    FUNCIONES DECLARADAS (el interprete de javascript las carga al levantar el código)
*/


let a = 5;
let b = 2;


// Uso con retorno (utiliza variables globales)
function sumar() {
    return a + b;
}
console.log(sumar());  // Invoca a la función sumar e imprime en consola 7 que es el resultado de sumar 5+2

// Uso con retorno (utiliza variables locales)
function restar() {
    let a = 30;
    let b = 12;
    return a - b;
}
console.log(restar());  // Invoca a la función restar e imprime en consola 18 que es el resultado de restar 30-12

// Uso con retorno (utiliza dos parámetros)
function multiplicar(a, b) {
    return a * b;
}
console.log(multiplicar(3, 7));  // Invoca a la función multiplicar e imprime en consola 21 que es el resultado de multiplicar 3*7