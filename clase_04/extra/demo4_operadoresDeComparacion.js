/*
    OPERADORES DE COMPARACION:
        Igualdad Simple ==
        Igualdad Estricta ===
        Desigualdad Simple ==
        Desigualdad Estricta ===
        Menor Que <
        Menor o Igual Que <=
        Mayor Que >
        Mayor o Igual Que >=
*/


// Uso de operadores de comparación (retornan un valor booleano: true/false)
console.log(5 == 5);            // Igualdad Simple: Compara si 5 es igual a 5 (true);
console.log(5 == 6);            // Igualdad Simple: Compara si 5 es igual a 6 (false);
console.log(5 === 5);           // Igualdad Estricta: Compara si 5 es estrictamente igual a 5 (true);
console.log(5 === "5");         // Igualdad Estricta: Compara si 5 es estrictamente igual a "5" (false);

console.log(5 != 5);            // Desigualdad Simple: Compara si 5 es diferente a 5 (false);
console.log(5 != 6);            // Desigualdad Simple: Compara si 5 es diferente a 6 (true);
console.log(5 !== 5);           // Desigualdad Estricta: Compara si 5 es estrictamente diferente a 5 (false);
console.log(5 !== "5");         // Desigualdad Estricta: Compara si 5 es estrictamente diferente a "5" (true);

console.log(5 < 5);             // Compara si 5 es menor que 5 (false);
console.log(5 <= 5);            // Compara si 5 es menor o igual que 5 (true);

console.log(5 > 5);             // Compara si 5 es mayor que 5 (false);
console.log(5 >= 5);            // Compara si 5 es mayor o igual que 5 (true);