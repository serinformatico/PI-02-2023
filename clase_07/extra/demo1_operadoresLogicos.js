/*
    OPERADORES LOGICOS (Tablas de verdad):
        Conjunción AND &&
        Disyunción OR ||
        Negación !

    Nota: El uso de operadores lógicos siempre retornan un valor booleano: true/false.
*/


let u = 10;
let v = 15;

console.log(u == 10 && v == 15);    // Conjunción: Comprueba si u es igual 10 y v es igual 15 (true);
console.log(u == 10 && v == 12);    // Conjunción: Comprueba si u es igual 10 y v es igual 12 (false);
console.log(u == 11 && v == 15);    // Conjunción: Comprueba si u es igual 11 y v es igual 15 (false);
console.log(u == 13 && v == 16);    // Conjunción: Comprueba si u es igual 13 y v es igual 16 (false);

console.log(u == 10 || v == 15);    // Disyuncion: Comprueba si u es igual 10 ó v es igual 15 (true);
console.log(u == 10 || v == 18);    // Disyuncion: Comprueba si u es igual 10 ó v es igual 18 (true);
console.log(u == 17 || v == 15);    // Disyuncion: Comprueba si u es igual 17 ó v es igual 15 (true);
console.log(u == 12 || v == 13);    // Disyuncion: Comprueba si u es igual 12 ó v es igual 13 (false);

console.log(u == 10);               // Negación: Comprueba si u es igual 10 (true);
console.log(!u == 10);              // Negación: Comprueba si u negada es igual 10 (false);