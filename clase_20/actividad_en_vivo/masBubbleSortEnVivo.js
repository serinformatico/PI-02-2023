// Recordemos el algoritmo de bubble sort que hasta ahora
// te hemos presentado (sentido de menor a mayor):
const numeros = [6, 5, 1, 2, 4, 3, 8, 7];

for (let i = 0; i < numeros.length-1; i++) {
    for (let j = 0; j < numeros.length-1; j++) {
        let auaxiliarDePosicionActual    = numeros[j];           
        let auaxiliarDePosicionSiguiente = numeros[j+1];

        if (auaxiliarDePosicionActual > auaxiliarDePosicionSiguiente) {
            numeros[j]   = auaxiliarDePosicionSiguiente;
            numeros[j+1] = auaxiliarDePosicionActual;
        }
    }
}

console.log("\nNúmeros ordenados de menor a mayor");
console.log(numeros);


const personas = [
    {
        nombre: "Dua",
        apellido: "Lipa",
        ocupacion: "cantante",
        estatura: 173,
    },
    {
        nombre: "Ariana",
        apellido: "Grande",
        ocupacion: "cantante",
        estatura: 160,
    },
    {
        nombre: "Taylor",
        apellido: "Swift",
        ocupacion: "cantante",
        estatura: 180,
    },
];

// Tendremos que adaptar el código de bubble sort para que en vez
// de que lea la colección de números, lea de las personas:
for (let i = 0; i < personas.length-1; i++) {
    for (let j = 0; j < personas.length-1; j++) {
        let auaxiliarDeEstaturaActual    = personas[j].estatura;
        let auaxiliarDeEstaturaSiguiente = personas[j+1].estatura;

        if (auaxiliarDeEstaturaActual > auaxiliarDeEstaturaSiguiente) {
            personas[j].estatura   = auaxiliarDeEstaturaSiguiente;
            personas[j+1].estatura = auaxiliarDeEstaturaActual;
        }
    }
}

console.log("\Personas ordenadas de menor a mayor por estatura");
console.log(personas);