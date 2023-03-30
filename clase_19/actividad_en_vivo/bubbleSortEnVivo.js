function ordenarAscendentemente(vector) {
    for (let i = 0; i < vector.length-1; i++) {
        for (let j = 0; j < vector.length; j++) {
            let auaxiliarDePosicionActual    = vector[j];           
            let auaxiliarDePosicionSiguiente = vector[j+1];
            
            // Para ordenar ascendentemente, se tiene que comprobar que el valor
            // de la posición actual es mayor que el valor de la posición siguiente.
            if (auaxiliarDePosicionActual > auaxiliarDePosicionSiguiente) {
                vector[j]   = auaxiliarDePosicionSiguiente;
                vector[j+1] = auaxiliarDePosicionActual;
            }
        }
    }

    return vector;
}

console.log("\n===== Orden Ascendente =====");
console.log(ordenarAscendentemente([ 2, 10, 4, 7, 1, -7, 6]));


function ordenarDescendentemente(vector) {
    for (let i = 0; i < vector.length-1; i++) {
        for (let j = 0; j < vector.length; j++) {
            let auaxiliarDePosicionActual    = vector[j];           
            let auaxiliarDePosicionSiguiente = vector[j+1];
            
            // Para ordenar descendentemente, se tiene que comprobar que el valor
            // de la posición actual es menor que el valor de la posición siguiente.
            if (auaxiliarDePosicionActual < auaxiliarDePosicionSiguiente) {
                vector[j]   = auaxiliarDePosicionSiguiente;
                vector[j+1] = auaxiliarDePosicionActual;
            }
        }
    }

    return vector;
}

console.log("\n===== Orden Descendente =====");
console.log(ordenarDescendentemente([ 2, 10, 4, 7, 1, -7, 6]));


const ASC  = "ASCENDENTE";
const DESC = "DESCENDENTE";
function ordenarPorTipoDeOrden(vector, tipoDeOrden) {
    for (let i = 0; i < vector.length-1; i++) {
        for (let j = 0; j < vector.length; j++) {
            let auaxiliarDePosicionActual    = vector[j];           
            let auaxiliarDePosicionSiguiente = vector[j+1];

            let tipoDeComparacion = 
                (tipoDeOrden === ASC) ? 
                (auaxiliarDePosicionActual > auaxiliarDePosicionSiguiente) :
                (auaxiliarDePosicionActual < auaxiliarDePosicionSiguiente) ;

            if (tipoDeComparacion) {
                vector[j]   = auaxiliarDePosicionSiguiente;
                vector[j+1] = auaxiliarDePosicionActual;
            }
        }
    }

    return vector;
}

console.log("\n===== Orden Ascendente/Descendente =====");
console.log(ordenarPorTipoDeOrden(["A", "C", "E", "B", "D"], DESC));