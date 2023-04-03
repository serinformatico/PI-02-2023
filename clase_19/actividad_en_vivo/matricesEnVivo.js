const matriz = [
    [ 31, 44, 22 ],
    [ 13, 11, 20 ],
    [ 18, 34, 50 ],
    [ 10, 29, 21 ]
];

// Imprimir el valor de cada elemento de la matriz
for (let i = 0; i < matriz.length; i++) {           // Filas
    for (let j = 0; j < matriz[i].length; j++) {    // Columnas
        console.log(matriz[i][j]);
    }    
}

// Imprimir el valor de cada elemento de la primera fila de la matriz
for (let i = 0; i < matriz[1].length; i++) {
    console.log(matriz[1][i]);
}

// Imprimir el valor de cada elemento de la segunda columna de la matriz
for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i][2]);
}

// Sumar los valores de los elementos de la primera columna de la matriz
let sumatoriaDePrimeraColumna = 0;
for (let i = 0; i < matriz.length; i++) {
    sumatoriaDePrimeraColumna += matriz[i][0];
}
console.log(sumatoriaDePrimeraColumna);

// Sumar los valores de los elementos de la tercera fila de la matriz
let sumatoriaDePrimeraTerceraFila = 0;
for (let i = 0; i < matriz[2].length; i++) {
    sumatoriaDePrimeraTerceraFila += matriz[2][i];
}
console.log(sumatoriaDePrimeraTerceraFila);
