/*
    CONSIGNA:
    Si quisiéramos restringir el acceso a una discoteca, tendríamos que saber si la persona
    es mayor o menor de edad, esto lo podríamos resolver con una condición muy sencilla.

    ¿Qué opinas de nuestro programa para filtrar el acceso?
*/


let edad = 21; // Nota: modifica el valor de esta variable para hacer pruebas


if (edad >= 18) {
    console.log("Puede pasar");
} else {
    console.log("No puede pasar");
}


/*
    Agregá Caminos
    Revisá el siguiente código y asegúrate de entenderlo para poder avanzar con el ejercicio.
*/


if (edad < 18) {
    console.log("No puede pasar al bar.");
} else if (edad < 21) {
    console.log("Puede pasar al bar, pero no puede tomar alcohol.");
} else {
    console.log("Puede pasar al bar y tomar alcohol.");
}


/*
    CONSIGNA:
    Sin repetirte, modificá tu código de forma tal que cumpla con estas consignas:
        ● Si la edad es negativa, que se muestre en la consola este mensaje: "Error, edad inválida.
        Por favor ingrese un número válido."
        Importante: No se deberá mostrar ningún otro mensaje.
        ● Si tiene 21 años, además de darle la bienvenida, felicitarlo por haber llegado a la mayoría
        de edad.
        ● Si su edad es impar decile en cualquiera de los mensajes: "¿Sabías que tu edad es impar?".
*/


if (edad <= 0) {
    console.log("Error, edad inválida. Por favor ingrese un número válido.");
}


// Verificamos que el número sea impar
if (edad % 2) {
    console.log("¿Sabías que tu edad es impar?");

    if (edad == 21) {
        console.log("¡felicidades por haber llegado a la mayoría de edad!");
    }
}