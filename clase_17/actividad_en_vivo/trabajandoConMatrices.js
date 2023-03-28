// 1) Primero vamos a crear una matriz de 2x2 con Js.
const matriz2x2 = [
	[ "A",  "B" ],
	[ "C",  "D" ]
];


// 2) ¿Cómo accedo al valor almacenado en 1-1?
console.log(matriz2x2[1][1]); // Imprime por consola D


// 3) ¿Cómo puedo cambiar el valor almacenado en 1-0?
matriz2x2[1][0] = "G";
console.table(matriz2x2);


// 4) Probemos ahora crear matrices que no sean cuadradas, ¿como lo haríamos?
const matriz3x3 = [
    [ "A", "B", "X" ], 
    [ "C", "D", "Z" ], 
    [ "E", "F", "Y" ] 
];

console.table(matriz3x3);


// ¿Cómo podemos imprimir con un ciclo for la primera columna solamente de cada fila?
console.log("\nPrimera columna de cada fila");
for(let i=0; i<matriz3x3.length; i++) {
    console.log(matriz3x3[i][0])
}


// ¿Cómo podemos imprimir con un ciclo for los elementos de la primera fila?
console.log("\Elementos de la primera fila");
for(let i=0; i<matriz3x3.length; i++) {
    console.log(matriz3x3[0][i])
}


// ¿cómo podremos recorrer toda la matriz?
for (let i = 0; i < matriz3x3.length; i++) {
    console.log("\nFila N°" + (i+1));

    for (let j = 0; j < matriz3x3[i].length; j++) {
        console.log("\tColumna N°" + (j+1) + " valor: " + matriz3x3[i][j]);        
    }
}