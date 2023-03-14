/*
    CONSIGNA:
    Desde un banco nos contactan para crear una aplicación que pueda facilitar
    el manejo de información y las acciones que el mismo necesita. Nuestro tech
    leader nos facilita la forma de representar a los usuarios (cuentas bancarias).
    Cada una de estas cuentas tiene la siguiente información:
        ● N.º de cuenta (solo números).
        ● Tipo de cuenta (cuenta corriente en pesos o caja de ahorro en pesos).
        ● Saldo en pesos (solo la cantidad).
        ● Titular de la cuenta (nombre completo).

    Teniendo en cuenta esta información, se nos pide que hagamos lo siguiente:
        1. Descargar y analizar el siguiente archivo, el cual contiene la lista
        de clientes (cuentas bancarias).
        2. Nos solicitan también crear un objeto literal llamado "banco", el cual
        tendrá una propiedad llamada "clientes" que estará compuesta de la lista
        de objetos obtenidos en el punto anterior.
        3. Al objeto "banco", crearle un método llamado consultarCliente, el cual
        recibirá un nombre (titular) por parámetro, deberá buscarlo en la lista
        de cuentas y retornar el objeto cliente que corresponda con ese nombre
        ingresado.
        Ayuda: let clienteEncontrado = banco.consultarCliente("Ramon Connell");
        4. Crear otro método llamado depósito que recibirá dos parámetros: el
        titular de cuenta y una cantidad de dinero a depositar. El método debe
        obtener la cuenta correspondiente y luego sumar la cantidad de dinero
        a depositar a saldo en pesos. Luego, deberá dar un aviso por la consola
        con el mensaje "Depósito realizado, su nuevo saldo es: XXXX".
        5. Crear un último método llamado extracción que recibirá también dos
        parámetros: el titular de cuenta y el monto a extraer. El método debe
        obtener la cuenta correspondiente y restar el monto al saldo actual.
        En caso de que el resultado sea menor a 0, deberá imprimir un mensaje
        por la consola de "Fondos insuficientes". De lo contrario, deberá imprimir
        "Extracción realizada correctamente, su nuevo saldo es: XXXX".
*/


const cuentasBancarias = [
    {
        nroCuenta: 5486273622,
        tipoDeCuenta: "Cuenta Corriente",
        saldoEnPesos: 27771,
        titularCuenta: "Abigael Natte",
    },
    {
        nroCuenta: 1183971869,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 8675,
        titularCuenta: "Ramon Connell",
    },
    {
        nroCuenta: 9582019689,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 27363,
        titularCuenta: "Jarret Lafuente",
    },
    {
        nroCuenta: 1761924656,
        tipoDeCuenta: "Cuenta Corriente",
        saldoEnPesos: 32415,
        titularCuenta: "Ansel Ardley",
    },
    {
        nroCuenta: 7401971607,
        tipoDeCuenta: "Cuenta Unica",
        saldoEnPesos: 18789,
        titularCuenta: "Jacki Shurmer",
    },
];


const banco = {
    clientes: cuentasBancarias,
    consultarCliente: function (nombreDelTitular) {
        const mensajeError    = "No se encontro ninguna coincidencia.";
        let clienteEncontrado = null;

        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].titularCuenta === nombreDelTitular) {
                clienteEncontrado = this.clientes[i];
                break;
            }
        }

        return clienteEncontrado ? clienteEncontrado : mensajeError;
    },
    depositar: function (nombreDelTitular, cantidadDeDineroaDepositar) {
        let clienteEncontrado = this.consultarCliente(nombreDelTitular);

        if (typeof clienteEncontrado === "object") {
            clienteEncontrado.saldoEnPesos += cantidadDeDineroaDepositar;
        } else {
            return "Depósito no realizado, " + clienteEncontrado;
        }

        return "Depósito realizado, su nuevo saldo es: $" + clienteEncontrado.saldoEnPesos;
    },
    extraer: function (nombreDelTitular, cantidadDeDineroaExtraer) {
        let clienteEncontrado = this.consultarCliente(nombreDelTitular);

        if (typeof clienteEncontrado === "object") {
            if (clienteEncontrado.saldoEnPesos >= cantidadDeDineroaExtraer) {
                clienteEncontrado.saldoEnPesos += cantidadDeDineroaExtraer;

                return "Extracción realizada correctamente, su nuevo saldo es: $" + clienteEncontrado.saldoEnPesos;
            }
        } else {
            return "Extracción no realizada, " + clienteEncontrado;
        }

        return "Extracción no realizada, saldo insufuciente";
    }
};


console.log("\n ===== Método Consultar =====");
console.log(banco.consultarCliente("Jarret Lafuente"));
console.log(banco.consultarCliente("Abigael"));

console.log("\n ===== Método Depositar =====");
console.log(banco.depositar("Abigael Natte", 1000));
console.log(banco.depositar("Abigael", 1000));

console.log("\n ===== Método Extracción =====");
console.log(banco.extraer("Abigael Natte", 1000));
console.log(banco.extraer("Abigael Natte", 30000));
console.log(banco.extraer("Abigael ", 30000));