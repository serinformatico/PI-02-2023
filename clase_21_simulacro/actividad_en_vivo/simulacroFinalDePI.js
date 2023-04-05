/*
    Simulacro del final de Programación Imperativa
*/

// Ejercicio 1:
const ciudades = [
    {
        ciudad: "Bunos Aires",
        pais: "Argentina",
        poblacion: 15625084
    },
    {
        ciudad: "Medellín",
        pais: "Colombia",
        poblacion: 2501470
    },
    {
        ciudad: "San Juan",
        pais: "Argentina",
        poblacion: 681055
    },
    {
        ciudad: "Bogota",
        pais: "Colombia",
        poblacion: 7901653
    },
    {
        ciudad: "Córdoba",
        pais: "Argentina",
        poblacion: 3308876
    }
];

const buscarCiudad = function (ciudades, pais, poblacion) {
    const ciudadesEncontradas = [];

    for (let i = 0; i < ciudades.length; i++) {
        if (ciudades[i].pais == pais && ciudades[i].poblacion < poblacion) {
            ciudadesEncontradas.push(ciudades[i]);
        }     
    }

    return ciudadesEncontradas;
}

console.log(buscarCiudad(ciudades, "Argentina", 3400500)); // Prueba de Ejercicio 1


// Ejercicio 2:
const letras = ["A", "C", "A", "D", "B", "E"];

function ordenarConBubbleSort(letras, sentido) {
    for (let i = 0; i < letras.length-1; i++) {
        for (let j = 0; j < letras.length-1; j++) {
            let auaxiliarDePosicionActual    = letras[j];           
            let auaxiliarDePosicionSiguiente = letras[j+1];

            if (sentido == "ASC" && auaxiliarDePosicionActual > auaxiliarDePosicionSiguiente) {
                letras[j]   = auaxiliarDePosicionSiguiente;
                letras[j+1] = auaxiliarDePosicionActual;
            }

            if (sentido == "DESC" && auaxiliarDePosicionActual < auaxiliarDePosicionSiguiente) {
                letras[j]   = auaxiliarDePosicionSiguiente;
                letras[j+1] = auaxiliarDePosicionActual;
            }
        }
    }

    return letras;
}

console.log(ordenarConBubbleSort(letras, "ASC")); // Prueba de Ejercicio 2 (ASD)
console.log(ordenarConBubbleSort(letras, "DESC")); // Prueba de Ejercicio 2 (DESC)


// Ejercicio 3:
const matriz5x3 = [
    [10, 11, 15], // Fila 0
    [20, 22, 25], // Fila 1
    [30, 36, 35], // Fila 2
    [40, 47, 43], // Fila 3
    [55, 50, 59]  // Fila 4
];

function sumarFila(matriz, fila) {
    let sumatoria = 0;

    for (let i = 0; i < matriz[fila].length; i++) {
        sumatoria += matriz[fila][i];
    }

    return sumatoria;
}

console.log(sumarFila(matriz5x3, 3)); // Prueba de Ejercicio 3 (fila de índice 3)
