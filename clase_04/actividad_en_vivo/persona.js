/*
    CONSIGNA:
        Reconocer variables en cada problema, trasladarlas al entorno de trabajo
        y realizar operaciones.
        ¿Cuáles son los datos que componen a una persona y cuál es su tipo?
*/

// PERSONA:
    // Nombre (texto)
    let nombre = "Leandro";

    // Apellido (texto)
    let apellido = "Pérez";

    // Día de nacimiento (número)
    let diaDeNacimiento = 15;

    // Mes de nacimiento (número)
    let mesDeNacimiento = 1;

    // Año de nacimiento (número)
    let anioDeNacimiento = 1996;

    // Número de documento (número)
    let numeroDeDocumento = 21700150;

    // ¿Vive? (Verdadero o falso)
    let estaVivo = true;

    // 1. Declara 3 variables y asígnales un valor. Siempre teniendo en cuenta que los
    // nombres deben ser descriptivos (number, string, boolean).
    let edad     = 21;
    let pais     = "Argentina";
    let esAdulto = true;

    // 2. Mostrarlas por la consola en 3 console.log distintos (uno por cada variable)
    console.log(edad);      // Imprime el valor 21
    console.log(pais);      // Imprime el valor Argentina
    console.log(esAdulto);  // Imprime el valor true

    // 3. Ahora modifica tus console.log para que ahora se muestran las 3 variables en
    // el mismo console.log
    console.log(edad + pais + esAdulto);                // Imprime el valor 21Argentinafalse
    console.log(edad + " " + pais + " " + esAdulto);    // Imprime el valor 21 Argentina false

    // 4. Tomémonos un rato para armar las variables del juego de Mario y de una Persona.
    // Recuerden guardar los dos como archivos separados en la carpeta correspondiente.
    // Hecho!

    // 5. Solicitar que el usuario ingrese su nombre utilizando el prompt. Imprimilo en
    // consola mostrando la etiqueta "Nombre:" seguida del valor ingresado.
    const prompt        = require("prompt-sync")({ sigint: true });
    let nombreDeUsuario = prompt("Ingrese el nombre de usuario:");
    console.log("Nombre:" + nombreDeUsuario);