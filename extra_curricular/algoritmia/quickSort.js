/*
    ALGORITMO: QuickSort
    Éste algoritmo se basa en el principio de divide y conquistarás. Resulta más fácil ordenar
    listas pequeñas que una grande, con lo cual irá descomponiendo la lista en dos partes y
    ordenando esas partes.

    Para ésto utiliza la recursividad.
        1. Dado un vector, elegir uno de sus elementos, que llamamos pívot
        2. Dividir el vector en dos sub-vectores:
            2.1. uno con los elementos menores al pívot (orden ascendente)
            2.2. otro con los elementos mayores al pívot (orden ascendente)
        3. Ordenar recursívamente ambos sub-vectores
        4. Armar el vector resultado como: elementosOrdenadosDeLaIzquierda + pivot + elementosOrdenadosDeLaDerecha
*/


const ASC = "ASCENDENTE";
const DESC = "DESCENDENTE";


function quickSort(vector, orden = ASC) {
    let longitudDelVector = vector.length;

    // El vector deber tener mínimamente dos elementos para ordenar. Notese que esta validación termina la recursividad
    if (longitudDelVector <= 1) {
        return vector;
    }

    const valorDeLaPosicionDelPivot       = vector[0];
    const elementosOrdenadosDeLaIzquierda = [];
    const elementosOrdenadosDeLaDerecha   = [];

    // Este bucle analiza los valores entre la posición y el pívot, dando como resultado, la división de elementos menores y mayores
    for (let i = 1; i < longitudDelVector; i++){
        let valorDeLaPosicionActualDeI   = vector[i];
        let comparacionEnRelacionAlOrden = orden == ASC ? (valorDeLaPosicionActualDeI <= valorDeLaPosicionDelPivot) : (valorDeLaPosicionActualDeI >= valorDeLaPosicionDelPivot);

        if (comparacionEnRelacionAlOrden) {
            elementosOrdenadosDeLaIzquierda.push(valorDeLaPosicionActualDeI);
        } else {
            elementosOrdenadosDeLaDerecha.push(valorDeLaPosicionActualDeI)
        }
    }

    // Concatena los vectores junto al pívot. Notese que por cada vector interno vuelve a invocar a la función de manera recursiva
    return [...quickSort(elementosOrdenadosDeLaIzquierda, orden), valorDeLaPosicionDelPivot, ...quickSort(elementosOrdenadosDeLaDerecha, orden)];
}


let vector = [23, 7, 5, 43, 12, 56, 35, 1, 8, 7];
console.log("\n\tVector original: " + vector + "\n");

console.log("\tVector ordenado ascendentemente: " + quickSort(vector, ASC) + "\n");

console.log("\tVector ordenado descendentemente: " + quickSort(vector, DESC) + "\n");