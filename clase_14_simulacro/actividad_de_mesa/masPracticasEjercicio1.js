/*
    CONSIGNA:
    1. A partir de el siguiente array de edades nos solicitan realizar
    lo siguiente:
        const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

        a. Obtener en un nuevo array las edades menores a 18.
        b. Obtener en un nuevo array las edades mayor o igual a 18.
        c. Obtener en un nuevo array las edades igual a 18.
        d. Obtener el menor.
        e. Obtener el mayor.
        f. Obtener el promedio de edades.
        g. Incrementar en 1 todas las edades.

    Recordemos que hay muchas formas de resolver, nuestra tarea será
    pensar cuál es la mejor para poder reutilizar nuestro código con
    diferentes array de edades.
        const edadesGrupo1 = [21, 12, 15, 18, 25];
        const edadesGrupo2 = [2, 11, 54, 63, 24];

    Excelente, ahora, como ya trabajamos un array, sabemos que este
    puede tener como elemento cualquier tipo de dato Number, String,
    Objeto Literal, Array, etc. 
*/


const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];


const edadesMenoresA18 = [];
for (let i = 0; i < edades.length; i++) {
    if (edades[i] < 18) {
        edadesMenoresA18.push(edades[i]);
    }   
}
console.log("\n Edades menores a 18: " + edadesMenoresA18);

const edadesMayoresOIgualesA18 = [];
for (let i = 0; i < edades.length; i++) {
    if (edades[i] >= 18) {
        edadesMayoresOIgualesA18.push(edades[i]);
    }   
}
console.log("\n Edades mayores o iguales a 18: " + edadesMayoresOIgualesA18);

const edadesIgualesA18 = [];
for (let i = 0; i < edades.length; i++) {
    if (edades[i] == 18) {
        edadesIgualesA18.push(edades[i]);
    }   
}
console.log("\n Edades iguales a 18: " + edadesIgualesA18);

let edadMenor = edades[0];
for (let i = 0; i < edades.length; i++) {
    if (edades[i] < edadMenor) {
        edadMenor = edades[i];
    }   
}
console.log("\n Edad menor: " + edadMenor);

let edadMayor = edades[0];
for (let i = 0; i < edades.length; i++) {
    if (edades[i] > edadMayor) {
        edadMayor = edades[i];
    }   
}
console.log("\n Edad mayor: " + edadMayor);

let edadPromedio = 0;
for (let i = 0; i < edades.length; i++) {
    edadPromedio += edades[i];
}
edadPromedio = edadPromedio / edades.length;
console.log("\n Edad promedio: " + edadPromedio);

const edadesIncrementadasEnUno = [];
for (let i = 0; i < edades.length; i++) {
    edadesIncrementadasEnUno.push(edades[i]+1);
}
console.log("\n Edades incrementadas en uno: " + edadesIncrementadasEnUno);