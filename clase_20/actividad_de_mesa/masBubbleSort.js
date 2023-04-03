// Ejercicio 1:
const participantes = [
    {
        likes: 15,
        username: "Lucrecia54"
    },
    {
        likes: 16,
        username: "Mina48"
    },
    {
        likes: 52,
        username: "Jorge22"
    },
    {
        likes: 4,
        username: "Martin55"
    },
    {
        likes: 12,
        username: "Lucas17"
    }
];

function ordenarPorLikes(array) {
    for (let i = 0; i < array.length-1; i++) {
        for (let j = 0; j < array.length-1; j++) {
            let auaxiliarDeLikesActual    = array[j].likes;
            let auaxiliarDeLikesSiguiente = array[j+1].likes;

            if (auaxiliarDeLikesActual < auaxiliarDeLikesSiguiente) {
                array[j].likes   = auaxiliarDeLikesSiguiente;
                array[j+1].likes = auaxiliarDeLikesActual;
            }
        }
    }

    return array;
}

console.log("\nEjercicio 1");
console.log(ordenarPorLikes(participantes));


// Ejercicio 2:
const arregloMeteorologico = [
    {
        dia: 14,
        mes: 4,
        tempMax: 31,
        tempMin: 18
    },
    {
        dia: 24,
        mes: 5,
        tempMax: 25,
        tempMin: 12
    },
    {
        dia: 31,
        mes: 6,
        tempMax: 16,
        tempMin: 7
    },
    {
        dia: 4,
        mes: 7,
        tempMax: 15,
        tempMin: 6
    },
    {
        dia: 18,
        mes: 8,
        tempMax: 8,
        tempMin: 2
    }
];

// a) Ordenar por temperatura mínima de menor a mayor.
function ordenarPorTemperaturaMinima(array) {
    for (let i = 0; i < array.length-1; i++) {
        for (let j = 0; j < array.length-1; j++) {
            let auaxiliarDeTemperaturaMinimaActual    = array[j].tempMin;
            let auaxiliarDeTemperaturaMinimaSiguiente = array[j+1].tempMin;

            if (auaxiliarDeTemperaturaMinimaActual > auaxiliarDeTemperaturaMinimaSiguiente) {
                array[j].tempMin   = auaxiliarDeTemperaturaMinimaSiguiente;
                array[j+1].tempMin = auaxiliarDeTemperaturaMinimaActual;
            }
        }
    }

    return array;
}

console.log("\nEjercicio 2: a) Ordenar por temperatura mínima de menor a mayor.");
console.log(ordenarPorTemperaturaMinima(arregloMeteorologico));


// b) Ordenar por temperatura máxima de mayor a menor.
function ordenarPorTemperaturaMaxima(array) {
    for (let i = 0; i < array.length-1; i++) {
        for (let j = 0; j < array.length-1; j++) {
            let auaxiliarDeTemperaturaMaximaActual    = array[j].tempMin;
            let auaxiliarDeTemperaturaMaximaSiguiente = array[j+1].tempMin;

            if (auaxiliarDeTemperaturaMaximaActual < auaxiliarDeTemperaturaMaximaSiguiente) {
                array[j].tempMin   = auaxiliarDeTemperaturaMaximaSiguiente;
                array[j+1].tempMin = auaxiliarDeTemperaturaMaximaActual;
            }
        }
    }

    return array;
}

console.log("\nEjercicio 2: b) Ordenar por temperatura máxima de mayor a menor.");
console.log(ordenarPorTemperaturaMaxima(arregloMeteorologico));