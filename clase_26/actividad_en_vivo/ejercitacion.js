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


const numeros = [33, 27, 34, 30, 34, 25, 0, 1];


// a. Recorrer el array utilizando el método .forEach()
//    imprimir cada uno de los elementos.
numeros.forEach( (elemento) => console.log(elemento) );

// b. Utilizar un método de array para recorrer todo sus
//    elementos e incrementar su valor en 1.
const numerosIncrementados = numeros.map( (elemento) => elemento++ );
console.log(numerosIncrementados.join(", "));

// c. Utilizar un método para filtrar los números pares
//    e imprimir el nuevo array.
const numerosPares = numeros.filter( (elemento) => elemento % 2 === 0 && elemento != 0);
console.log(numerosPares.join(", "));

// d. Utilizar un método para obtener la suma total de
//    los números.
let sumatoria = numeros.reduce( (acumulador, elemento) => acumulador+elemento );
console.log(sumatoria);

// e. Desarrollar una función para obtener el promedio
//    de los números, utilizando métodos de arrays.
function calcularPromedio(acumulador, elemento, indice) {
    if (indice < numeros.length-1) {
        return acumulador+elemento;
    }

    return (acumulador+elemento) / numeros.length;
}

let promedio = numeros.reduce( (acumulador, elemento, indice) => calcularPromedio(acumulador, elemento, indice));
console.log(promedio);

