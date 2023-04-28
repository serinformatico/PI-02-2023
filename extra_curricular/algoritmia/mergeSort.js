/*
    ALGORITMO: MergeSort
    La idea de este algoritmo es la de dividir el problema en subproblemas más pequeños. Para
    eso es indispensable utilizar la recursividad. La idea es que es fácil, dadas dos listas
    ordenadas cada una, obtener una tercera que tiene todos sus elementos ordenados.

    Regla Recursiva:
        1. Recursividad:
            1.1. Partir el vector en dos sub-vectores
            1.2. Ordenar recursivamente ambos sub-vectores
        2. Finalmente, fusionar los sub-vectores.
*/


const ASC = "ASCENDENTE";
const DESC = "DESCENDENTE";


function fusionarElementos(vectorIzquierdo, vectorDerecho, orden = ASC) {
    let vectorParcialmenteOrdenado = [];

    while (vectorIzquierdo.length > 0 && vectorDerecho.length > 0) {
        let valorDeLaPrimeraPosicionIzquierda = vectorIzquierdo[0];
        let valorDeLaPrimeraPosicionDerecha   = vectorDerecho[0];
        let comparacionEnRelacionAlOrden      = orden == ASC ? (valorDeLaPrimeraPosicionIzquierda <= valorDeLaPrimeraPosicionDerecha) : (valorDeLaPrimeraPosicionIzquierda >= valorDeLaPrimeraPosicionDerecha);

        if (comparacionEnRelacionAlOrden) {
            // Agrega el elmento en el vector parcialmente ordenado y lo quita del vector izquierdo
            vectorParcialmenteOrdenado.push(vectorIzquierdo.shift());
        } else {
            // Agrega el elmento en el vector parcialmente ordenado y lo quita del vector derecho
            vectorParcialmenteOrdenado.push(vectorDerecho.shift());
        }
    }

     // Concatena los vectores
     return [...vectorParcialmenteOrdenado, ...vectorIzquierdo, ...vectorDerecho];
}

function mergeSort(vector, orden = ASC) {
    let longitudDelVector = vector.length;

    // El vector deber tener mínimamente dos elementos para ordenar. Notese que esta validación termina la recursividad
    if (longitudDelVector <= 1) {
        return vector;
    }

    let indiceMedioDelVector = Math.floor(longitudDelVector/2);

    // Invocaciones recursivas
    let elementosDeLaIzquierda = mergeSort(vector.slice(0, indiceMedioDelVector), orden);
    let elementosDeLaDerecha   = mergeSort(vector.slice(indiceMedioDelVector), orden);
    return fusionarElementos(elementosDeLaIzquierda, elementosDeLaDerecha, orden);
}


let vector = [23, 7, 5, 43, 12, 56, 35, 1, 8, 7];
console.log("\n\tVector original: " + vector + "\n");

console.log("\tVector ordenado ascendentemente: " + mergeSort(vector, ASC) + "\n");

console.log("\tVector ordenado descendentemente: " + mergeSort(vector, DESC) + "\n");