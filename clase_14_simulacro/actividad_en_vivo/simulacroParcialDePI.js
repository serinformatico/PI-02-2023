/*
    Simulacro del parcial de Programación Imperativa
*/

// Ejercicio 1:
const empleado = {
    nombre: "Ana",
    apellido: "Pereyra",
    edad: 40,
    salarioBruto: 2500.0,
    estaActivo: true
};

function calcularSalarioNeto(salarioBruto, descuentoPorcentual) {
    return salarioBruto - (salarioBruto/100*descuentoPorcentual);
}

console.log("\n ===== Datos del empleado ===== ");
console.log(
    "nombre: " + empleado.nombre +
    ", apellido: " + empleado.apellido +
    ", sueldo neto: $" + calcularSalarioNeto(empleado.salarioBruto, 17.0)
);


// Ejercicio 2:
const programadores = [
    {
        nombre: "Juan",
        salarioBruto: 2750.0,
        categoria: "junior",
        tareasHechas: 24
    },
    {
        nombre: "María",
        salarioBruto: 2750.0,
        categoria: "junior",
        tareasHechas: 18
    },
    {
        nombre: "Lorena",
        salarioBruto: 3900.0,
        categoria: "senior",
        tareasHechas: 27
    }
];

function aumentarSueldo(programadores) {
    for (let i = 0; i < programadores.length; i++) {
        programadores[i].salarioBruto += 200;
    }
}

console.log("\n ===== Sueldo sin aumento ===== ");
console.log(programadores);
aumentarSueldo(programadores);
console.log("\n ===== Sueldo con aumento ===== ");
console.log(programadores);


// Ejercicio 3:
calcularPremioPorPerformance = (programador) => {
    let premioTotal = 0;

    if (programador.tareasHechas > 20) {
        if (programador.categoria === "senior") {
            premioTotal += (programador.tareasHechas - 20) * 25;
        } else {
            premioTotal += (programador.tareasHechas - 20) * 10;
        }
    }

    return premioTotal;
}

// Agrego a cada objeto programador la constante DEDUCCION_IMPOSITIVA_PORCENTUAL
for (let i = 0; i < programadores.length; i++) {
    const DEDUCCION_IMPOSITIVA_PORCENTUAL = 17.0;
    programadores[i].DEDUCCION_IMPOSITIVA_PORCENTUAL = DEDUCCION_IMPOSITIVA_PORCENTUAL;
}

// Agrego a cada objeto programador la función calcularSalarioNeto()
for (let i = 0; i < programadores.length; i++) {
    programadores[i].calcularSalarioNeto = function() {
        let salarioNeto               = calcularSalarioNeto(programadores[i].salarioBruto, programadores[i].DEDUCCION_IMPOSITIVA_PORCENTUAL);
        let premioTotalPorPerformance = calcularPremioPorPerformance(programadores[i]);

        return salarioNeto + premioTotalPorPerformance; 
    };
}

function mostrarDatosDelProgramador(programador) {
    console.log(
        programador.nombre + " es un/una programador/a " +
        programador.categoria + " que tiene un salario bruto de $" +
        programador.salarioBruto + " y cobra un salario neto de $" +
        programador.calcularSalarioNeto() + ". Hasta el momento, ha hecho " +
        programador.tareasHechas + " tareas.\n"
    ); 
}

for (let i = 0; i < programadores.length; i++) {
    mostrarDatosDelProgramador(programadores[i]);
}
