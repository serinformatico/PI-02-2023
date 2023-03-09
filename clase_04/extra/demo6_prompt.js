// Instalación de Prompt
// Paso 1: Ejecutar desde la terminal y dentro de la ruta del proyecto: npm i prompt-sync
// Si ya lo tenes instalado, omiti este paso.
// Paso 2: Linea de importación: const prompt = require("prompt-sync")({ sigint: true });

const prompt = require('prompt-sync')({ sigint: true });

let nombre = prompt("Ingrese su nombre:");
let edad   = prompt("Ingrese su edad:");

console.log("Tu nombre es " + nombre + " y tu edad es " + edad);