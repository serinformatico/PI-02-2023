/*
    CONSIGNA:
    Experimentar con los métodos de los Arrays:
    ● length: Devuelve la longitud del array, es decir, la cantidad de elementos.
    ● indexOf(valorDelElementoBuscado): Devuelve el índice del elemento del
      valor buscado, si no existe, devuelve -1.
    ● lastIndexOf(valorDelElementoBuscado): Devuelve el índice del elemento
      anterior al elemento que contiene valor buscado, si no existe, devuelve -1.
    ● includes(valorBuscado): Devuelve true cuando encuentra el valor buscado,
      si no existe, devuelve false.
    ● push(valor_1, valor_n): Agrega n elementos al final del mismo array y
      devuelve la longitud del array.
    ● unshift(valor_1, valor_n): Agrega n elementos al principio del mismo array
      y devuelve la longitud del array.
    ● pop(): Quita el último elemento del mismo array y devuelve el valor de
      dicho elemento quitado.
    ● shift(): Quita el primer elemento del mismo array y devuelve el valor de
      dicho elemento quitado.
    ● join(): Devuelve un string con la unión de los elementos de un array
      separados por comas.
    ● join(criterio): Devuelve un string con la unión de los elementos de un
      array separados por un criterio.
*/


let colores = ["Blanco", "Rojo", "Verde", "Negro"];


console.log(colores.length); // Imprime por consola (4)

console.log(colores.indexOf("Verde")); // Imprime por consola (3)

console.log(colores.lastIndexOf("Verde")); // Imprime por consola (2)

console.log(colores.includes("Verde")); // Imprime por consola (true)

console.log(colores.push("Rosa", "Azul")); // Imprime por consola (6)

console.log(colores.pop()); // Imprime por consola (Azul)

console.log(colores.shift()); // Imprime por consola (Blanco)

console.log(colores.unshift("Celeste", "Rosado")); // Imprime por consola (6)

console.log(colores.join()); // Imprime por consola (Celeste,Rosado,Rojo,Verde,Negro,Rosa)

console.log(colores.join(" - ")); // Imprime por consola (Celeste - Rosado - Rojo - Verde - Negro - Rosa)