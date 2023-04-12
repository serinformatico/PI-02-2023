/*
    Programación Funcional

    Métodos de Arrays:
        -> forEach: ejecuta una función que recorre el array
        -> map: crea un nuevo array con los resultados de la llamada
           a la función que aplica para cada uno de sus elementos.
        -> filter: crea un nuevo array con todos los elementos que
           cumplan con la condición implementada en la función.
        -> reduce: ejecuta una función reductora sobre cada elemento
           de un array, devolviendo como resultado un único valor.
*/


const numeros = [100, 200, 300, 400, 500, 600, 700, 800];


console.log("\n ===== Uso de forEach ===== ");
numeros.forEach( (elemento) => console.log(elemento) );


console.log("\n ===== Uso de map ===== ");
const numerosMultiplicadosPorDos = numeros.map( (elemento) => elemento*2 );
console.log(numerosMultiplicadosPorDos);


console.log("\n ===== Uso de filter ===== ");
const numerosMayoresQue400 = numeros.filter( (elemento) => elemento > 400 );
console.log(numerosMayoresQue400);


console.log("\n ===== Uso de reduce ===== ");
let valorInicial = 25;
let sumatoria = numeros.reduce( (acumulador, elemento) => acumulador+elemento, valorInicial );
console.log(sumatoria);

const numerosParaFactorial = [1, 2, 3, 4, 5];
const factorial = numerosParaFactorial.reduce( (acumulador, elemento, indice) => {
    if (numerosParaFactorial[indice]) {
        return acumulador + (elemento*numerosParaFactorial[indice]);
    }
}, valorInicial );
console.log(factorial);
