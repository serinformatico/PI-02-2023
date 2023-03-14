/*
    CONSIGNA:
    Crear el objeto "alumno", el cual va a consistir de las siguientes
    propiedades básicas:
        ● Nombre
        ● Número de legajo
        ● Lista de notas

    Nos gustaría calcular el promedio del alumno y si el mismo está aprobado,
    basado en una nota de aprobación que le va a ser dada. Para este ejercicio,
    vamos a dejar que pienses todos los métodos y propiedades que puedan hacer
    falta para que el programa funcione correctamente de la manera solicitada.
*/

const alumno = {
    nombre: "Martín",
    legajo: 450125,
    listaDeNotas: [7, 2, 3, 5, 10],
    calcularPromedio: function () {
        let sumatoria = 0;

        for (let i = 0; i < this.listaDeNotas.length; i++) {
            sumatoria += this.listaDeNotas[i];
        }

        let promedio = sumatoria / this.listaDeNotas.length;

        return promedio;
    },
    comprobarSiEstaAprobado: function (notaMinima) {
        let promedio = this.calcularPromedio();

        // Concatenación por medio de la técnica "Template Literals"
        return `El alumno ${this.nombre} está ${
            promedio >= notaMinima ? "aprobado" : "desaprobado"
        }. Su nota promedio es: ${promedio}`;
    },
};

console.log("\n ===== Calculador de notas =====");
console.log(alumno.comprobarSiEstaAprobado(7));