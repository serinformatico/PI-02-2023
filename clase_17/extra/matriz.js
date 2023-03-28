// Matriz de orden 3x4
const matriz = [
	[ 19,  30,  27,  88 ],
	[ 12,  18,  35,  65 ],
	[ 45,  15,  20,  11 ]
];

console.table(matriz);


// Acceder e imprimir elementos
console.log(matriz[0][0]); // Imprime por consola 19
console.log(matriz[1][1]); // Imprime por consola 18
console.log(matriz[2][0]); // Imprime por consola 45
console.log(matriz[0][3]); // Imprime por consola 88
console.log(matriz[2][3]); // Imprime por consola 11


// Recorrer una matriz
for (let i = 0; i < matriz.length; i++) {
    console.log("\nFila N°" + (i+1));

    for (let j = 0; j < matriz[i].length; j++) {
        console.log("\tColumna N°" + (j+1) + " valor: " + matriz[i][j]);        
    }
}