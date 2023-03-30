function crearMatrizConUnPrimerTipoDeAlgoritmo(numero1, numero2) {
    let acumulador = 1;
    const matriz   = [];

    for (let i = 0; i < numero1; i++) {
        const vector = [];

        for (let j = 1; j <= numero2; j++) {
            vector.push(acumulador);
            acumulador++;
        }

        matriz.push(vector);
    }

    return matriz;
}

console.log("\n===== Algoritmo 1ro =====");
console.table(crearMatrizConUnPrimerTipoDeAlgoritmo(10, 10));


function crearMatrizConUnSegundoTipoDeAlgoritmo(numeroMaximo) {
    const matriz  = [];
    const numeros = [];

    for (let i = 1; i <= numeroMaximo; i++) {
        numeros.push(i);
    }

    let indiceInicial = 0;
    let indiceFinal   = 10;

    for (let i = 1; i <= 10; i++) {
        const fila = numeros.slice(indiceInicial, indiceFinal);

        matriz.push(fila);
        indiceInicial += 10;
        indiceFinal   += 10;
    }

    return matriz;
}

console.log("\n===== Algoritmo 2do =====");
console.table(crearMatrizConUnSegundoTipoDeAlgoritmo(100));


function crearMatrizConUnTercerTipoDeAlgoritmo(numeroMaximo) {
    const matriz = [];

    let n    = 1;
    let i    = 0;
    let fila = [];

    while (n <= numeroMaximo) {
        fila.push(n);

        if (n % 10 === 0) {
            matriz.push(fila);
            fila = [];
            i++; 
        }

        n++; 
    }

    return matriz;
}

console.log("\n===== Algoritmo 3ro =====");
console.table(crearMatrizConUnTercerTipoDeAlgoritmo(100));
