/*
    ALGORITMO: BubbleSort
    Es un algoritmo de clasificación simple que recorre repetidamente la lista
    que se va a ordenar, compara cada par de adyacentes y los intercambia si
    están en el orden incorrecto (orden ascendente o descendente). Esto
    se repite hasta que no se necesitan más intercambios, lo que indica que la
    lista está ordenada.
*/


const ASC = "ASCENDENTE";
const DESC = "DESCENDENTE";


function bubbleSort(vector, orden = ASC) {
    let longitudDelVector = vector.length;

    // El vector deber tener mínimamente dos elementos para ordenar
    if (longitudDelVector <= 1) {
        return vector;
    }

    // Este bucle determina la cantidad de iteraciones (se quita la última iteración)
    for (let i = 0; i < longitudDelVector-1; i++) {

        // Este bucle analiza los valores por cada par
        for (let j = 0; j < longitudDelVector; j++) {
            let valorDeLaPosicionAnteriorDeJ = vector[j - 1];
            let valorDeLaPosicionActualDeJ = vector[j];
            let valorDeLaPosicionPosteriorDeJ = vector[j + 1];

            // Orden ascendente
            if (orden == ASC && valorDeLaPosicionActualDeJ > valorDeLaPosicionPosteriorDeJ) {
                // Intercambia los valores
                vector[j] = valorDeLaPosicionPosteriorDeJ;
                vector[j + 1] = valorDeLaPosicionActualDeJ;
            }

            // Orden descendente
            if (orden == DESC && valorDeLaPosicionActualDeJ > valorDeLaPosicionAnteriorDeJ) {
                // Intercambia los valores
                vector[j] = valorDeLaPosicionAnteriorDeJ;
                vector[j - 1] = valorDeLaPosicionActualDeJ;
            }
        }
    }

    return vector;
};


let vector = [23, 7, 5, 43, 12, 56, 35, 1, 8, 7];
console.log("\n\tVector original: " + vector + "\n");

bubbleSort(vector, ASC);
console.log("\tVector ordenado ascendentemente: " + vector + "\n");

bubbleSort(vector, DESC);
console.log("\tVector ordenado descendentemente: " + vector + "\n");