/*
    VARIABLES:
        let
        var
    CONSTANTES:
        const
*/


// Uso de let (tiene alance limitado, su valor es modificable)
let primerNombre;                   // Declaración de la variable primerNombre (crea la variable)
primerNombre = "Juan";              // Definición de la variable primerNombre (asigna el valor Juan)
console.log(primerNombre);          // Imprime el valor de la variable primerNombre en consola

let segundoNombre = "Jose";         // Declaración y definición de la variable segundoNombre (crea la variable y asigna el valor Jose)
console.log(segundoNombre);         // Imprime el valor de la variable segundoNombre en consola


// Uso de var (tiene alance global, su valor es modificable, no se recomienda su uso)
var apellido;                       // Declaración de la variable apellido (crea la variable)
apellido = "Pérez";                 // Definición de la variable apellido (asigna el valor Pérez)
console.log(apellido);              // Imprime el valor de la variable apellido en consola


// Uso de const (su valor es inmodificable)
const NACIONALIDAD = "Argentina";   // Declaración y definición de la variable constante NACIONALIDAD (crea la constante y asigna el valor Argentina)
console.log(NACIONALIDAD);          // Imprime el valor de la variable constante NACIONALIDAD en consola