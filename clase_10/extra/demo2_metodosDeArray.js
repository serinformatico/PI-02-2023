// Declaración y definición del array
let colores = ['Rojo', 'Naranja', 'Azul'];


console.log("\n ===== AGREGAR UN ELEMENTO AL FINAL DE UN ARRAY (push) ===== ");
colores.push('Verde');
console.log(colores[4]); // Imprime por consola 'Verde' que es el valor del elemento agregado
console.log(colores);


console.log("\n ===== AGREGAR DOS ELEMENTOS EN EL PRINCIPIO DE UN ARRAY (unshift) ===== ");
colores.unshift('Celeste', 'Amarillo');
console.log(colores[0], " y ", colores[1]); // Imprime por consola 'Celeste' y 'Amarillo' que son los valores de los elementos agregados
console.log(colores);


console.log("\n ===== SOBRESCRIBIR EL ELEMENTO DE UNA POSICIÓN DADA EN UN ARRAY ([índice]) ===== ");
colores[4] = 'Violeta';
console.log(colores[4]); // Imprime por consola 'Violeta' que es el valor que sobrescribió al valor 'Azul'
console.log(colores);


console.log("\n ===== ELIMINAR EL ÚLTIMO ELEMENTO DE UN ARRAY (pop)  ===== ");
console.log(colores.pop()); // El elemento 'Verde' fue eliminado. En el caso de necesitar conocer el elemento eliminado, pop retorna dicho valor.
console.log(colores);


console.log("\n ===== ELIMINAR EL PRIMER ELEMENTO DE UN ARRAY (shift)  ===== ");
console.log(colores.shift()); // El elemento 'Celeste' fue eliminado. En el caso de necesitar conocer el elemento eliminado, shift retorna dicho valor.
console.log(colores);


console.log("\n ===== // BUSCAR EL VALOR DE UN ELEMENTO EN UN ARRAY PARA OBTENER SU ÍNDICE (indexOf/lastIndexOf) ===== ");
console.log("El índice del valor 'Naranja' es " + colores.indexOf('Naranja')); // Imprime por consola '2' que es el índice del valor 'Naranja' en el array (indexOf: comienza la búsqueda desde el inicio hasta el final).
console.log("El índice del valor 'Naranja' es " + colores.lastIndexOf('Naranja')); // Imprime por consola '2' que es el índice del valor 'Naranja' en el array (lastIndexOf: comienza la búsqueda desde el final hasta el inicio).
console.log("El índice del valor 'Morado' es " + colores.indexOf('Morado')); // Imprime por consola '-1'. Retorna -1 cuando no encuentra el valor buscado.


console.log("\n ===== PREGUNTAR SI EXISTE EL VALOR DE UN ELEMENTO EN UN ARRAY (includes). ===== ");
console.log("¿Existe el valor 'Naranja' dentro del array? " + colores.includes('Naranja')); // Imprime por consola 'true'. Retorna true cuando encuentra el valor buscado.
console.log("¿Existe el valor 'Morado' dentro del array? " + colores.includes('Morado')); // Imprime por consola 'false'. Retorna false cuando no encuentra el valor buscado.


console.log("\n ===== CONCATENACION DE ELEMENTOS DE DOS ARRAY (concat) ===== ");
let otrosColores = ['Blanco', 'Negro'];
let nuevosColores = colores.concat(otrosColores);
console.log(nuevosColores);


console.log("\n ===== CONVERTIR LOS ELEMENTOS DE UN ARRAY EN UN STRING (join) ===== ");
let coloresConvertidosEnString = nuevosColores.join(' - '); // Imprime los elementos del array separados por el símbolo indicado ' - '.
console.log(coloresConvertidosEnString);