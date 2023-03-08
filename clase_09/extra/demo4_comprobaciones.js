/*
    Comprobaciones de tipos de datos
*/

let variableSinDefinicion;
console.log(variableSinDefinicion === undefined); // true. Significa que está indedifinada.

let variableNula = null;
console.log(variableNula === null); // true. Significa que está nula.

let resultadoNaN = 25 * "texto";
console.log(Number.isNaN(resultadoNaN)); // true. Significa que está operando con un valor que no es un número.

let numeroDecimal = 85.77;
console.log(Number.isInteger(numeroDecimal)); // false. Significa que no es un entero.