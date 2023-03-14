/*
    EJERCICIO 2: Objetos entrenadores
    Para este ejercicio contamos con un objeto literal deportista ya definido, que tiene los
    siguientes atributos: nombre, energia, experiencia.
    Queremos poder pedirle al deportista que entrene. Para esto, nuestro trabajo va a ser completar
    la función entrenarHoras.
    La función entrenarHoras tiene las siguientes tres características:
        1. Recibe por parámetro la cantidad de horas.
        2. Resta a su energía (this.energia) la cantidad de horas x 5.
        3. Incrementa su experiencia (this.experiencia) la cantidad de horas x 2.
    Una vez definida la función, podemos ejecutar el código y ver cómo va variando la energía
    y experiencia del deportista por consola.
*/

let deportista = {
    energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function (cantidadDeHoras) {
        this.energia     -= cantidadDeHoras*5;
        this.experiencia += cantidadDeHoras*2;
    }
};

console.log("\n==Antes de comenzar entrenamiento==");
console.log("Deportista energia: " + deportista.energia);
console.log("Deportista experiencia: " + deportista.experiencia);

console.log("\n==ENTRENANDO==");
deportista.entrenarHoras(5);

console.log("\n==FIN ENTRENAMIENTO==");
console.log("Deportista energia: " + deportista.energia);
console.log("Deportista experiencia: " + deportista.experiencia);