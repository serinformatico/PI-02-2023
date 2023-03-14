/*
    CONSIGNA:
    Crear una función llamada propiedadUnica que reciba un arreglo de
    objetos como parámetro y un string. Esta deberá retornar un nuevo
    arreglo de objetos, teniendo como parámetro la propiedad que fue
    pasada como string.

    Ejemplo:
        ● let array = [ { nombre: "Lean", edad: 27 }, { nombre: "Eze", edad: 49} ];
        ● propiedadUnica(array, "edad");
            debe retornar [ { edad: 27 }, { edad: 49 } ]
        ● propiedadUnica(array, "nombre");
            debe retornar [ { nombre: "Lean"}, { nombre: "Eze" } ]
*/

let array = [
    { nombre: "Lean", edad: 27 }, { nombre: "Eze", edad: 49 }
];

function propiedadUnica(array, propiedadBuscada) {
    let propiedades = [];

    for (let i = 0; i < array.length; i++) {
        let propiedadEncontrada = { [propiedadBuscada]: array[i][propiedadBuscada] };

        propiedades.push(propiedadEncontrada);
    }

    return propiedades;
}

let objetoDeEdades = propiedadUnica(array, "edad");

console.log("\n ===== Objeto de edades =====");
console.log(objetoDeEdades);