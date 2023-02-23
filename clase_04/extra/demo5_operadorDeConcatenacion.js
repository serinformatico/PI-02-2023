/*
    OPERADORES DE CONCATENACION:
        Concatenación +
*/


// Uso del operador de concatenación
let nombre = "Javier";
let apellido = "Medina";

console.log(nombre + apellido);                 // Concatenación: Une el valor "Javier" con "Medina" ("JavierMedina");
console.log(nombre + " " + apellido);           // Concatenación: Une el valor "Javier" con un espacio y con "Medina" ("Javier Medina");

let edad = 17;
let anio = 2023;

console.log(edad + anio);                       // No hay concatenación, ojo! esto es una suma. 17+2023 (2040)
console.log(edad + "-" + anio);                 // Concatenación: Une el valor 17 con un guion medio y con 2023 (17-2023). Esto lo interpreta gracias al string que contiene. Podría estar al inicio, medio o final
console.log("edad " + edad + " año " + anio);   // Concatenación: Une el valor "edad ", 17, " año " y 2023 (edad 17 año 2023). Esto lo interpreta gracias a los strings que contiene. Podrían estar al inicio, medio o final