/*
    EJERCICIO 2: Estructura for
    En este ejercicio nuestra tarea es completar la función noParesDeContarImparesHasta.
    Esta función recibe un número X por parámetro y cuenta la cantidad de números impares
    que hay desde el número 0 hasta el número X (inclusive) y luego retorna ese valor.
    Para resolver la ejercitación debemos utilizar el for ..
*/

function noParesDeContarImparesHasta(numero) {
    let contadorDeNumerosImpares = 0;

    for (let i = 0; i < numero; i++) {
        if (i % 2 !== 0) {
            contadorDeNumerosImpares++;
        }
    }

    return contadorDeNumerosImpares;
}

console.log(noParesDeContarImparesHasta(4));