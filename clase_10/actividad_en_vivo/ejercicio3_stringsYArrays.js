/*
    CONSIGNA:
    Strings y Arrays
    1. A partir de un array de correos, recorrerlo para corroborar si son válidos.
    Para ello, por el momento, debemos buscar el carácter “@” en cada elemento y
    agregar aquellos que lo tengan al array de correos admitidos. En caso de no
    encontrar el carácter, se deberá agregar al array de correos descartados.
        a. Desarrollar una función que realice la verificación de cada elemento del
        array de correos pendientes. En caso de validar, agregar al array correoAdmitidos.
        Caso contrario, agregar al array correoDescartados.
        b. Mostrar por pantalla la cantidad y los elementos de cada array.

    2. Queremos que un usuario pueda ingresar su correo y el sistema lo valide
    directamente, para luego agregarlo al array de correos admitidos o bien que
    devuelva un mensaje diciendo que no es correcto, con la posibilidad de que lo
    ingrese nuevamente.
*/


const correosPendientes = [
    '   iroman@digitalhouse.com', 'loki%digitalhouse.com', 'loki@digitalhouse.com  ',
    'thanosdigitalhouse.com', '  thanos@digitalhouse.com', 'camada.digitalhouse.com'
];

const correosAdmitidos = [
    'thor@digitalhouse.com', 'tucuMan@digitalhouse.com', 'wanda@digitalhouse.com'
];

const correosDescartados = [];


function verificarCorreos(correo) {
    correo.includes('@') ? correosAdmitidos.push(correo) : correosDescartados.push(correo);
}


for (let i = 0; i < correosPendientes.length; i++) {
    let correoSinEspacios = correosPendientes[i].trim();

    verificarCorreos(correoSinEspacios);
}


console.log("\n ===== Correos Admitidos =====");
console.log("Cantidad de elementos: " + correosAdmitidos.length);
console.log("Elementos: " + correosAdmitidos.join(", "));

console.log("\n ===== Correos Descartados =====");
console.log("Cantidad de elementos: " + correosDescartados.length);
console.log("Elementos: " + correosDescartados.join(", "));


console.log("\n ===== Prompt =====");
const prompt = require('prompt-sync')({ sigint: true });
let correoIngresado = prompt("Ingrese su correo:");

verificarCorreos(correoIngresado);

console.log("Correos Admitidos: " + correosAdmitidos.join(", "));
console.log("Correos Descartados: " + correosDescartados.join(", "));
