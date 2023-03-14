/*
    CONSIGNA:
    Manipulación de objetos con dot notation
    Dado el siguiente objeto,

    const persona = {
        nombre: "juan pablo",
        edad: 29,
        esMayorDeEdad: true
    };


    a. Deberás modificar la propiedad nombre por el tuyo a través de la
    notación del punto.
    b. Deberás agregar una nueva propiedad con la clave "profesion" y
    valor "programador" a través de la notación del punto.

*/

const persona = {
    nombre: "juan pablo",
    edad: 29,
    esMayorDeEdad: true
};

persona.nombre    = "Lorena Páez";
persona.profesion = "programador";

console.log(" ===== Objeto Literal ===== ");
console.log(persona);