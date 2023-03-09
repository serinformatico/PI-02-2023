/*
    CONSIGNA:
    Colecciones de Películas (y más…)
    El tech lead del equipo necesita conocer la estructura de datos del
    nuevo proyecto. Para esto, deberemos:

    1. Nos piden crear la estructura adecuada para guardar las siguientes
    películas:
        "star wars", "totoro",  "rocky", "pulp fiction", "la vida es bella".
        Importante: verifica que todo funciona correctamente accediendo a
        alguna de las películas una vez creada la estructura correspondiente
    2. Más tarde de producción nos dieron el aviso de que las películas
    deberían estar todas en mayúsculas, para ellos nos solicitan que creemos
    una función que reciba por parámetro un array y convierta el contenido
    de cada elemento a mayúsculas.
    3. Mientras trabajabamos en la feature anterior, se dio el aviso de que
    también hay que crear otra estructura similar a la primera pero con las
    siguientes películas animadas:
        "toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
        Por lo tanto nos piden crear una función que reciba dos arrays como
        parámetros, para poder agregar los elementos contenidos en el segundo
        array, dentro del primero para así retornar un solo array con todas
        las películas como sus elementos.
        Importante: las películas animadas también deberían convertirse a
        mayúsculas.
    4. Durante el proceso uno de los desarrolladores advierte que el último
    elemento del array de películas animadas es un videojuego. Ahora debemos
    editar nuestro código y modificarlo de manera que podamos eliminar ese
    último elemento antes de migrar el contenido al array que contenga todas
    las películas.
    PD: por precaución guarda el elemento que vas a eliminar en una variable.
    5. Finalmente, te envían dos arrays con calificaciones que hacen distintos
    usuarios del mundo sobre las películas con el siguiente formato:
	    const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
        const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]
    Te piden crear una función que compare las calificaciones e indique si
    son iguales o diferentes. Te confirman que están en el orden adecuado y
    que solo traen valores numéricos del 1 al 10.
    PD: los elementos de los scores tanto de Asia como de Europa corresponden
    en orden al del array resultante de combinar películas con películas
    animadas. Es decir, el primer elemento del array de películas general
    corresponde al primer elemento de asiaScores y al primer elemento de
    euroScores, y así sucesivamente.
*/


const peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
console.log("\nPelículas: " + peliculas.join(", "));


function convertirAMayusculas(array) {
    array[0] = array[0].toUpperCase();
    array[1] = array[1].toUpperCase();
    array[2] = array[2].toUpperCase();
    array[3] = array[3].toUpperCase();
    array[4] = array[4].toUpperCase();
    return array;
}

convertirAMayusculas(peliculas);
console.log("\nPelículas en mayúsculas: " + peliculas.join(", "));


function pasarElementosEntreArrays(peliculas, peliculasAnimadas) {
    peliculas.push(peliculasAnimadas.pop().toUpperCase());
    peliculas.push(peliculasAnimadas.pop().toUpperCase());
    peliculas.push(peliculasAnimadas.pop().toUpperCase());
    peliculas.push(peliculasAnimadas.pop().toUpperCase());
    peliculas.push(peliculasAnimadas.pop().toUpperCase());
}

const peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

pasarElementosEntreArrays(peliculas, peliculasAnimadas);
console.log("\nPelículas + películas animadas: " + peliculas.join(", "));


function quitarElementoDeTipoJuego(peliculas, tituloDelJuego) {
    let primeraPelicula = peliculas.shift();
    let indiceDelJuego  = peliculas.indexOf(tituloDelJuego);

    peliculas[indiceDelJuego] = primeraPelicula;

    return tituloDelJuego;
}

let videojuego = quitarElementoDeTipoJuego(peliculas, "FORTNITE");
console.log("\nTítulo del videojuego eliminado: " + videojuego);
console.log("\nPelículas + películas animadas sin videojuegos: " + peliculas.join(", "));


function compararCalificaciones(asia, europa) {
  let comparacionesAsiaEuropa = [];

  for (let i = 0; i < asia.length; i++) {
    comparacionesAsiaEuropa[i] = asia[i] === europa[i];
  }

  return comparacionesAsiaEuropa;
}

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

const comparacionesAsiaEuropa = compararCalificaciones(asiaScores, euroScores);
console.log("\nComparaciones de películas entre Asia y Europa: " + comparacionesAsiaEuropa.join(", "));