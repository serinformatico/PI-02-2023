/*
    CONSIGNA:
    Experimentar con los métodos de los Strings:
    ● length: Devuelve la longitud del texto miTexto.
    ● indexOf(valorBuscado): Devuelve el índice inicial del texto buscado,
      si no existe, devuelve -1.
    ● search(valorBuscado): Devuelve el índice inicial del texto buscado,
      si no existe, devuelve -1.
    ● slice(indiceDeInicio): Devuelve un nuevo string con el texto de una
      parte del string que comienza en el índice indicado hasta el final
      del string.
    ● slice(indiceDeInicio, indiceDeCorte): Devuelve un nuevo string con
      el texto de una parte del string que comienza en el índice indicado
      y termina en el índice de corte.
    ● trim(): Devuelve un nuevo string con el texto sin los espacios que
      pueda tener al principio y al final.
    ● replace(textoABuscarParaReemplazar, nuevoTextoDeReemplazo): Devuelve
      un nuevo string con el mismo texto pero con algunos valores reemplazados.
    ● toLowerCase(): Devuelve un nuevo string con todo el texto en minúsculas.
    ● toUpperCase(): Devuelve un nuevo string con todo el texto en mayúsculas.
    ● split(): Devuelve un array con un solo elemento creado a partir del
      valor de un string.
    ● split(criterio): Devuelve un array con elementos creados a partir del
      calor de un string que es dividido por algún criterio.
*/


let saludo             = "Buenas tardes estimados estudiantes";
let saludoConEspacios  = "   Buenas noches camada     ";
let saludoEnMayusculas = "¡HOLA GENTE!";
let saludoEnMinusculas = "¡chau gente!";


console.log(saludo.length); // Imprime por consola (35)

console.log(saludo.indexOf("tardes")); // Imprime por consola (7)

console.log(saludo.search("tardes")); // Imprime por consola (7)

console.log(saludo.slice(14)); // Imprime por consola (estimados estudiantes)

console.log(saludo.slice(14, 23)); // Imprime por consola (estimados)

console.log(saludoConEspacios.trim()); // Imprime por consola (Buenas noches camada)

console.log(saludo.replace("tardes", "noches")); // Imprime por consola (Buenas noches estimados estudiantes)

console.log(saludoEnMayusculas.toUpperCase()); // Imprime por consola (¡HOLA GENTE!)

console.log(saludoEnMinusculas.toLowerCase()); // Imprime por consola (¡chau gente!)

console.log(saludo.split()); // Imprime por consola (['Buenas tardes estimados estudiantes'])

console.log(saludo.split(" ")); // Imprime por consola (['Buenas', 'tardes', 'estimados', 'estudiantes'])