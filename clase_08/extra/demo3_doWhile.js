/*
    Declaración: do...while
    Un ciclo do...while se repite hasta que una condición especificada se
    evalúe como falsa. El bloque de instrucciones se ejecuta al menos una
    vez antes de que se verifique la condición.

    Una declaración do...while tiene el siguiente aspecto:

    do {
        Bloque de instrucciones
    } while (condición);
*/

console.log('\n ===== RECORRIDO DE 0 A 9 (while) ===== ');
let i = 0;
do {
    // Este bloque se ejecuta mínimamente una vez (sin importar la condición).
    console.log(i);
    i++;
} while (i < 10);


console.log('\n ===== RECORRIDO DE 1 A 10 (while) ===== ');
let j = 1;
do {
    // Este bloque se ejecuta mínimamente una vez (sin importar la condición).
    console.log(j);
    j++;
} while (j <= 10);