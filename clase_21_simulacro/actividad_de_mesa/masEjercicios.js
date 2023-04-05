// Ejercicio 1: Escribir una función que reciba un array de elementos
// e indique si se encuentran ordenados de menor a mayor o no.
function indicarSiEstaOrdenado(array) {
    let ordenado = true;

    for (let x = 0; x < array.length; x++) {
        for (let y = 0; y < array.length-1; y++) {
            if (array[y] > array[y + 1]) {
                ordenado = false;
                break;
            }
        }
    }

    return ordenado;
}

// 2. Escribir una función que reciba un array con nombres, y para cada
// nombre imprima el mensaje "Estimado [nombre], vote por mí".
function solicitarVoto(array) {
    for (let i = 0; i < array.length; i++) {
        console.log("Estimado " + array[i] + " vote por mi");
    }
}

const nombres = ["Lucas", "Martin", "Lucrecia", "Gabriela", "Mina", "Javier"];

solicitarVoto(nombres);

// 3. Implementar un algoritmo que imprima por consola una pirámide
// inversa de los números del 1 al número que indique el usuario de
// la siguiente forma: (suponiendo que indica 6).
//      666666
//      55555
//      4444
//      333
//      22
//      1
function realizarPiramide() {
    let texto = "";

    for (let i = 1; i <= 30; i++) {
        for (let j = 1; j <= i; j++) {
            texto += i;
        }

        texto += "\n";
    }

    return texto;
}

let linea = realizarPiramide();
console.log(linea);

// 4. Teniendo 3 arrays:
//      [4, 9, 2];
//      [3, 5, 7];
//      [8, 1, 6];
// Realixa las siguientes tareas:
// - Crea una matrix con esta forma:
let fila1 = [4,9,2];
let fila2 = [3,5,7];
let fila3 = [8,1,6];
let matriz = [fila1, fila2, fila3];

// Luego, a partir de esta matriz, realiza lo siguiente:
// -Imprimir la suma de cada fila,
function imprimirSumaDeFilas(array) {
    for (let i = 0; i < array.length; i++) {
        let sumatoria = 0;

        for (let j = 0; j < array[i].length; j++) {
            sumatoria += array[i][j];
        }

        console.log("La suma de la fila " + i + " es: " + sumatoria);
    }
}

imprimirSumaDeFilas(matriz);

// -Imprimir la multiplicación de cada columna(es decir, los 3 valores
// multiplicados entre sí) sólo si el resultado es par.
function imprimirSiEsPar(array) {
    for (let columna = 0; columna < array[0].length; columna++) {
        let multiplicacion = 1;

        for (let fila = 0; fila < array[columna].length; fila++) {
            multiplicacion = multiplicacion * array[fila][columna];
        }

        if (array % 2 === 0) {
            console.log("La multiplicacion de la columna " + columna + " es: " + multiplicacion);
        }
    }
}

imprimirSiEsPar(matriz);

// - Imprimir la suma de ambas diagonales por separado
function imprimirSumas(array){
    let sumaDiagonalPrincipal  = 0;
    let sumaDiagonalSecundaria = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i === j) {
                sumaDiagonalPrincipal += array[i][j];
            }
            if (i + j === array.length - 1) {
                sumaDiagonalSecundaria += array[i][j];
            }
        }
    }
    console.log("La suma de la diagonal principal es: " + sumaDiagonalPrincipal);
    console.log("La suma de la diagonal secundaria es: " + sumaDiagonalSecundaria);
}

imprimirSumas(matriz);