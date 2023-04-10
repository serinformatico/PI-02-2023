/*
    Búsqueda Lineal:
*/

const numerosOrdenados = [201, 202, 203, 204, 205, 206, 207, 208, 209, 210];

function buscarNumeroConBusquedaLineal(numeros, numeroBuscado) {
    for (let i = 0; i < numeros.length; i++) {
        console.log("Iteración N°" + (i+1));

        if (numeroBuscado === numeros[i]) {
            return numeros[i]; 
        }       
    }

    return null;
}

console.log(buscarNumeroConBusquedaLineal(numerosOrdenados, 210));
