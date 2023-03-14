/*
    CONSIGNA:
    Manipulación de objetos con dot notation
    Debés crear una función llamada arregloDeObjetos que reciba un
    número como parámetro y devuelva un arreglo de objetos que tengan
    una propiedad llamada "valor" que contenga el valor del número
    y sus anteriores.

    Ejemplo:
    arregloDeObjetos(5) debe retornar [ {valor: 1}, {valor: 2}, {valor: 3}, {valor: 4}, {valor: 5}]
    arregloDeObjetos(3) debe retornar [ {valor: 1}, {valor: 2}, {valor: 3} ]
*/

function crearArrayDeObjetos(numero) {
    const array = [];

    for (let i = 0; i < numero; i++) {
        array[i] = { valor: i };
    }

    return array;
}

console.log(" ===== Array de objetos literales (5) ===== ");
console.log(crearArrayDeObjetos(5));

console.log(" ===== Array de objetos literales (3) ===== ");
console.log(crearArrayDeObjetos(3));