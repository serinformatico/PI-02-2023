/*
    OBJETO LITERAL:
        Propiedades
        Funciones
*/


// Declaración del objeto literal "cocheFord".
let cocheFord = {
    // Propiedades
    marca: null,
    modelo: null,
    anioDeFabricacion: null,
    color: null,
    costo: null,
    precioDeVenta: null,
    // Funciones
    pintar: function (color) {
        this.color = color;
    },
    calcularPrecioDeVenta: function (margenPorcentual) {
        this.precioDeVenta += this.costo/100*margenPorcentual;
    }
};

// Definición del objeto literal "cocheFord".
cocheFord.marca = "Ford";
cocheFord.modelo = "Focus";
cocheFord.origen = "Brasil";
cocheFord.anioDeFabricacion = 2020;
cocheFord.costo = 1800500;
cocheFord.pintar("Rojo");
cocheFord.calcularPrecioDeVenta(30.0);


// Lectura de las propiedades. La Dot Notation (Notación de punto) es justamente
// el punto que va despues del nombre del objeto (cocheFord)
console.log("\nEl coche es marca " + cocheFord.marca + ", modelo " + cocheFord.modelo + " y el año de fabricación es " + cocheFord.anioDeFabricacion);


// Agregar una nueva propiedad al objeto literal "cocheFord".
cocheFord.motorCC = 1.6;
console.log("\nSe fabricó con un motor de " + cocheFord.motorCC + "CC.");


// Agregar una nueva función al objeto literal "cocheFord".
cocheFord.cambiarMotor = function (motorCC) {
    this.motorCC = motorCC;
};


// Quitar una propiedad del objeto literal "cocheFord".
delete cocheFord.origen;


// Invocar la nueva función cambiarMotor en el objeto literal "cocheFord".
cocheFord.cambiarMotor(1.8);
console.log("\nSe cambió el motor por uno de " + cocheFord.motorCC + "CC.");


// Imprimir por consola la estructura del objeto literal "cocheFord".
console.log(cocheFord);
