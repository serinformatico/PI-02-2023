/*
    ESTRUCTURA: Table Hash
        Las funciones Hash (también conocidas como funciones resumen) son funciones que,
        utilizando un algoritmo matemático, transforman un conjunto de datos en un código
        alfanumérico con una longitud fija. Da igual la cantidad de datos que se utilice
        (muchos o pocos), el código resultante tendrá siempre el mismo número de caracteres.

        Las tablas hash son una estructura de datos que permite crear una lista de valores
        emparejados, por lo tal, se puede recuperar un determinado valor usando la llave de
        ese valor para el índice, que se pone en la tabla de antemano.

        Una tabla hash se podría armar con Object pero JavaScript permite modificación de
        la estructura y eso no sería apropiado. Existe un recurso mas robusto, hablando a
        nivel estructural y este es "Map".
*/

const tablaHashDNI = new Map();


function generarHash(llave) {
    let codigoHash = 0;

    for (let i = 0; i < llave.length; i++) {
        codigoHash += llave.charCodeAt(i)*i;
    }

    return (codigoHash % 97);
}

function insertarElemento(tablaHashDNI, llave, valor) {
    const llaveEnMinusculas = String(llave).toLowerCase();
    const indiceHash        = generarHash(llaveEnMinusculas);
    const elementoHash      = tablaHashDNI[indiceHash];

    if (elementoHash && elementoHash.length > 0) {
        const llaveHashEnMinusculas = String(elementoHash[0]).toLowerCase();

        if (llaveEnMinusculas != llaveHashEnMinusculas) {
            const indiceHashRegenerado = generarHash(indiceHash);
            tablaHashDNI[indiceHashRegenerado] = [llave, valor];
        }
    }

    return tablaHashDNI[indiceHash] = [llave, valor];
}

function obtenerElemento(tablaHashDNI, llave) {
    const llaveEnMinusculas = String(llave).toLowerCase();
    const indiceHash        = generarHash(llaveEnMinusculas);
    const elementoHash      = tablaHashDNI[indiceHash];

    if (elementoHash && elementoHash.length > 0) {
        const llaveHashEnMinusculas = String(elementoHash[0]).toLowerCase();

        if (llaveEnMinusculas != llaveHashEnMinusculas) {
            const indiceHashRegenerado = generarHash(indiceHash);
            return tablaHashDNI[indiceHashRegenerado];
        }

        return elementoHash;
    }

    return undefined;
}

function eliminarElemento(tablaHashDNI, llave) {
    const llaveEnMinusculas = String(llave).toLowerCase();
    const indiceHash        = generarHash(llaveEnMinusculas);
    const elementoHash      = tablaHashDNI[indiceHash];

    if (elementoHash && elementoHash.length > 0) {
        const llaveHashEnMinusculas = String(elementoHash[0]).toLowerCase();

        if (llaveEnMinusculas != llaveHashEnMinusculas) {
            const indiceHashRegenerado = generarHash(indiceHash);
            tablaHashDNI[indiceHashRegenerado] = undefined;
        }
    }

    tablaHashDNI[indiceHash] = undefined;
}

insertarElemento(tablaHashDNI, "Pablo", "25111444");
insertarElemento(tablaHashDNI, "Paula", "20750800");
insertarElemento(tablaHashDNI, "Maria", "27800911");
insertarElemento(tablaHashDNI, "Karen", "29020202");
insertarElemento(tablaHashDNI, "Mario", "50478125");
insertarElemento(tablaHashDNI, "alapa", "10500000");
insertarElemento(tablaHashDNI, "Sergio", "15444785");

console.log(tablaHashDNI);

// console.log(obtenerElemento(tablaHashDNI, "Pablo"));
// console.log(obtenerElemento(tablaHashDNI, "Paula"));
// console.log(obtenerElemento(tablaHashDNI, "Maria"));
// console.log(obtenerElemento(tablaHashDNI, "Karen"));
// console.log(obtenerElemento(tablaHashDNI, "Paula"));
// console.log(obtenerElemento(tablaHashDNI, "Sergio"));

console.log(eliminarElemento(tablaHashDNI, "Maria"));

console.log(obtenerElemento(tablaHashDNI, "Maria"));
console.log(tablaHashDNI);
