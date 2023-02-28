/*
    EJERCICIO 4: Declarando tres funciones
    ¿Se acuerdan cuando declarábamos variables para poder utilizarlas luego?
    Bueno, aquí podemos hacer algo similar, pero en lugar de declarar variables (estructuras
    que contienen información) podemos declarar funciones (estructuras que procesan información).

    Escribir las siguientes tres funciones:
        -> anterior:
            recibe un número como parámetro y devuelve ese número menos uno.
        -> triple:
            recibe un número como parámetro y devuelve el triple de ese número.
        -> anteriorDelTriple:
            recibe un número como parámetro y, utilizando las dos funciones anteriores, tendrá que
            devolver el número recibido multiplicado por 3 (tres) y al resultado restarle 1 (uno).

    Aclaración: este ejercicio conlleva cierta complejidad. Es normal que se tarde en llegar a la solución.
*/

const anterior = function (num) {
    return num-1;
}

const triple = function (num) {
    return num*3;
}

const anteriorDelTriple = function (numero) {
    let resultado1 = triple(numero);
    let resultado2 = anterior(resultado1);
    return resultado2;
}

console.log(anterior(5));           // Imprime en consola 4 que es el resultado de restarle 1 a 5
console.log(triple(5));             // Imprime en consola 15 que es el resultado de multiplicar 5 por 3
console.log(anteriorDelTriple(5));  // Imprime en consola 14 que es el resultado de multiplicar 5 por 3 menos 1