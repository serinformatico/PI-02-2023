
/*
    Búsqueda Binaria:
*/

const numerosOrdenados = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function buscarPosicionDeNumero(numeros, numeroBuscado) {
	let indiceInicial = 0;
	let indiceFinal   = numeros.length-1;

    while (indiceInicial <= indiceFinal) {
        let indiceMedio = Math.floor((indiceInicial+indiceFinal)/2);

        if (numeroBuscado === numeros[indiceMedio]) {
            return indiceMedio;
        }

        if (numeroBuscado < numeros[indiceMedio]) {
			indiceFinal = indiceMedio-1;
		} else {
			indiceInicial = indiceMedio+1;
		}
    }

    return null;
}

console.log("\n ===== Números Ordenados ===== ");
console.log(numerosOrdenados.join(", "));
console.log(buscarPosicionDeNumero(numerosOrdenados, 1));
console.log(buscarPosicionDeNumero(numerosOrdenados, 5));
console.log(buscarPosicionDeNumero(numerosOrdenados, 6));
console.log(buscarPosicionDeNumero(numerosOrdenados, 9));
console.log(buscarPosicionDeNumero(numerosOrdenados, 11));


// Desafío extra:
const numeros = [12, 3, 5, 7, 1, 22, 47, 100];

function ordenarNumerosAscendentemente(numeros) {
    for (let i = 0; i < numeros.length-1; i++) {
        for (let j = 0; j < numeros.length-1; j++) {
            let valorDePosicionActual    = numeros[j];           
            let valorDePosicionSiguiente = numeros[j+1];

            if (valorDePosicionActual > valorDePosicionSiguiente) {
                numeros[j]   = valorDePosicionSiguiente;
                numeros[j+1] = valorDePosicionActual;
            }
        }
    }

    return numeros;
}

console.log("\n ===== Números Desordenados ===== ");
console.log(ordenarNumerosAscendentemente(numeros).join(", "));
console.log(buscarPosicionDeNumero(numeros, 12));
console.log(buscarPosicionDeNumero(numeros, 5));
console.log(buscarPosicionDeNumero(numeros, 22));
console.log(buscarPosicionDeNumero(numeros, 100));