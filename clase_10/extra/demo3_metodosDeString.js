// Declaración y definición del string
let frase1 = 'Hola Mundo DH';


console.log('\n ===== OBTENER EL TOTAL DE CARACTERES DE UN STRING (length) ===== ');
console.log(frase1.length); // Imprime 13 que es la cantidad total de caráteres que tiene esta frase.


console.log('\n ===== BUSCAR UN VALOR EN UN STRING Y OBTENER SU INDICE (indexOf) ===== ');
console.log(frase1.indexOf('Mundo')); // Imprime 5 que es el índice de la primera letra de la palabra encontrada (los índices arrancan desde cero).
console.log(frase1.indexOf('Planeta')); // Imprime -1, palabra no encontrada


console.log('\n ===== BUSCAR UN VALOR EN UN STRING POR INDICE DE INICIO-FIN (slice) ===== ');
console.log(frase1.slice(5,10)); // Imprime 'Mundo'. La palabra inicia en el índice 5 y termina en el índice 10.
console.log(frase1.slice(35,42)); // Imprime una cadena de texto vacía. No existen estos índices en el string dado.


console.log('\n ===== QUITAR ESPACIOS INICIALES EN UN STRING (trim) ===== ');
let frase2 = '  Bienvenidos a JavaScript     ';
console.log(frase2.trim()); // Imprime 'Bienvenidos a JavaScript'. Quita los espacios iniciales y finales. No quita los espacios del medio.


console.log('\n ===== BUSCAR Y REEMPLAZAR UN VALOR EN UN STRING (replace) ===== ');
let frase3 = 'Experimentos en Java 2023';
console.log(frase3.replace('Java', 'JavaScript')); // Imprime 'Experimentos en JavaScript 2023'. Reemplaza 'Java' por 'JavaScript'.
console.log(frase3.replace('java', 'JavaScript')); // Imprime 'Experimentos en Java 2023'. No reemplaza 'java' por 'JavaScript' porque no coincide. Está función es sensible a mayúsculas y minúsculas.


console.log('\n ===== CONVERSION DE STRING A ARRAY (split) ===== ');
let frase4 = 'Esto es Programación Imperativa';
console.log(frase4.split(' ')); // Imprime ['Esto', 'es', 'Programación', 'Imperativa']. Ahora esto es un array.


console.log('\n ===== CONVERSION A MAYUSCULAS (toUpperCase) ===== ');
console.log(frase4.toUpperCase()); // Imprime 'ESTO ES PROGRAMACIÓN IMPERATIVA'.


console.log('\n ===== CONVERSION A MINUSCULAS (toLowerCase) ===== ');
console.log(frase4.toLowerCase()); // Imprime 'esto es programación imperativa'.