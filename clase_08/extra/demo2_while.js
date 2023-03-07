/*
    Declaración: while
    Un ciclo while ejecuta sus instrucciones siempre que una condición
    especificada se evalúe como true.

    Una declaración while tiene el siguiente aspecto:

    while (condición) {
        Bloque de instrucciones
    }
*/

console.log('\n ===== RECORRIDO DE 0 A 9 (while) ===== ');
let i = 0;
while (i < 10) {
    // Este bloque se ejecuta solo si se cumple la condición.
    console.log(i);
    i++;
}

console.log('\n ===== RECORRIDO DE 1 A 10 (while) ===== ');
let j = 1;
while (j <= 10) {
    // Este bloque se ejecuta solo si se cumple la condición.
    console.log(j);
    j++;
}