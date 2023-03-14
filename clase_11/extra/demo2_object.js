/*
    OBJETO LITERAL:
        Propiedades
        Funciones
*/

// Declaración y definición del objeto literal "empleado".
const empleado = {
    nombre: "Pablo",
    apellido: "Medina",
    estaActivo: true,
    sueldo: 150000,
    descontarContribuciones: function (descuentoPorcentual) {
        this.sueldo -= this.sueldo/100*descuentoPorcentual;
    },
    aumentarSueldo: function (aumentoMonetario) {
        this.sueldo += aumentoMonetario;
    }
};

empleado.descontarContribuciones(17.0);
console.log(empleado);

empleado.aumentarSueldo(25000);
console.log(empleado);