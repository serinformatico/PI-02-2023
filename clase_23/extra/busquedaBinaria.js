/*
    Búsqueda Binaria:
*/

const numerosOrdenados = [201, 202, 203, 204, 205, 206, 207, 208, 209, 210];

function buscarNumeroConBusquedaBinaria(numeros, numeroBuscado) {
	let indiceInicial = 0;
	let indiceFinal   = numeros.length-1;

    let iteracion = 1;
    while (indiceInicial <= indiceFinal) {
        console.log("Iteración N°" + (iteracion++));

        let indiceMedio = Math.floor((indiceInicial+indiceFinal)/2);

        if (numeroBuscado === numeros[indiceMedio]) {
            return numeros[indiceMedio];
        }

        // Re-definición del índice inicial y final:
        // Si el valor buscado es menor que el valor del índice medio, entonces,
        // re-define el índice final con el índice medio menos una unidad.
        // Si el valor buscado es mayor que el valor del índice medio, entonces,
        // re-define el índice inicial con el índice medio más una unidad.
        // Nota: Ya se sabe que el índice medio no contiene el valor buscado.
        // Es por eso que se le resta o suma una unidad. 
        if (numeroBuscado < numeros[indiceMedio]) {
			indiceFinal = indiceMedio-1;
		} else {
			indiceInicial = indiceMedio+1;
		}
    }

    return null;
}

console.log(buscarNumeroConBusquedaBinaria(numerosOrdenados, 210));