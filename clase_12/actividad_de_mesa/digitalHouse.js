/*
    CONSIGNA:
    Crea la función digitalHouse() la cual recibirá 2 números como
    parámetros. La función deberá imprimir por pantalla los números
    del 1 al 100, pero teniendo en cuenta los siguientes criterios:
        ● Si el número a imprimir es múltiplo del primer parámetro
        que se ingresó, deberá mostrar el string "Digital" en lugar
        del número.
        ● Si el número a imprimir es múltiplo del segundo parámetro
        ingresado, deberá mostrar el string "House" en su lugar.
        ● Si el número a imprimir es múltiplo de ambos parámetros,
        deberá mostrar el string "Digital House" en lugar del número.
*/

function digitalHouse(a, b) {
    const resultado = [];

    for (let i = 1; i <= 100; i++) {
        let esMultiploDeA = i % a === 0;
        let esMultiploDeB = i % b === 0;

        if (esMultiploDeA && esMultiploDeB) {
            resultado.push("Digital House");
        } else if (esMultiploDeA) {
            resultado.push("Digital");
        } else if (esMultiploDeB) {
            resultado.push("House");
        } else {
            resultado.push(i);
        }
    }

    return resultado;
}

const resultado = digitalHouse(3, 4);
console.log(resultado.join(", "));
