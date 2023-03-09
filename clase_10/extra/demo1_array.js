// Declaración de un array vacio
let cosas = [];
cosas[0] = 'Caja';
cosas[1] = 'Pelota';
cosas[2] = 'Zapato';
console.log('\n ===== ELEMENTOS DEL ARRAY (COSAS) ===== ');
console.log(cosas);


// Preguntar por el tamaño de un array
console.log('\nEl tamaño del array "cosas" es ' + cosas.length);


console.log('\n ===== RECORRIDO DE ELEMENTOS DEL ARRAY (for) ===== ');
for (let i = 0; i < cosas.length; i++) {
    console.log(cosas[i]);
}


// Declaración y definición de arrays
let saludos = ['Hola', 'Chau'];
let numerosEnteros = [2, 1, 5, 3, 4];
let numerosDecimales = [2.18, 4.55, 9.7, 30.1, 42.178];
let booleanos = [true, false, false];

console.log('\n ===== ELEMENTOS DEL ARRAY (SALUDOS) ===== ');
console.log(saludos);
console.log('\n ===== ELEMENTOS DEL ARRAY (NUMEROS_ENTEROS) ===== ');
console.log(numerosEnteros);
console.log('\n ===== ELEMENTOS DEL ARRAY (NUMEROS_DECIMALES) ===== ');
console.log(numerosDecimales);
console.log('\n ===== ELEMENTOS DEL ARRAY (BOOLEANOS) ===== ');
console.log(booleanos);