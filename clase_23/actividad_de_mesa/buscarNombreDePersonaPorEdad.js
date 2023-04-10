/*
    Búsqueda Binaria:
*/

const personas = [
    {
        id: 1,
        nombre: "Ale",
        edad: 15
    },
    {
        id: 2,
        nombre: "Javi",
        edad: 83
    },
    {
        id: 3,
        nombre: "Luis",
        edad: 26
    },
    {
        id: 4,
        nombre: "Dan",
        edad: 16
    },
    {
        id: 5,
        nombre: "Tito",
        edad: 22
    },
    {
        id: 6,
        nombre: "Marina",
        edad: 76
    },
    {
        id: 7,
        nombre: "Susy",
        edad: 35
    },
    {
        id: 8,
        nombre: "John",
        edad: 25
    }
];


// a. Ordenar la colección de menor a mayor utilizando bubble sort.
function ordenarAscendentementeConBubbleSort(personas) {
    for (let i = 0; i < personas.length-1; i++) {
        for (let j = 0; j < personas.length-1; j++) {
            let valorDePosicionActual    = personas[j];           
            let valorDePosicionSiguiente = personas[j+1];

            if (valorDePosicionActual.edad > valorDePosicionSiguiente.edad) {
                personas[j]   = valorDePosicionSiguiente;
                personas[j+1] = valorDePosicionActual;
            }
        }
    }

    return personas;
}


// b. Utilizar el algoritmo de búsqueda binaria.
function buscarNombrePorIdConBusquedaBinaria(personas, edad) {
    let indiceInicial = 0;
    let indiceFinal   = personas.length-1;

    while (indiceInicial <= indiceFinal) {
        let indiceMedio = Math.floor((indiceInicial+indiceFinal) / 2);

        if (edad === personas[indiceMedio].edad) {
            return personas[indiceMedio].nombre;
        }

        if (edad < personas[indiceMedio].edad) {
            indiceFinal = indiceMedio-1;
        } else {
            indiceInicial = indiceMedio+1;
        }
    }

    return null;
}

// 1. Ordenar
console.log(ordenarAscendentementeConBubbleSort(personas));

// 2. Buscar
console.log(buscarNombrePorIdConBusquedaBinaria(personas, 25));
console.log(buscarNombrePorIdConBusquedaBinaria(personas, 76));
console.log(buscarNombrePorIdConBusquedaBinaria(personas, 16));
console.log(buscarNombrePorIdConBusquedaBinaria(personas, 15));