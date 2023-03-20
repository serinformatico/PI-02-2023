/*
    CONSIGNA:
    Para continuar con la Mesa de Trabajo trabajaremos con un array
    de objetos literales, para ello invitamos a repasar la clase de
    Objetos Literales para tener en claro su estructura y sintaxis.
    Podemos decir que un objeto literal es una colección de propiedades
    y cada propiedad es una asociación entre una clave y un valor.

    En el siguiente array, observamos que es un array por su sintaxis
    que comienza y termina con corchetes [] y sus elementos tienen la
    sintaxis de objetos literales {}. Entonces, podemos decir que
    tenemos una array de objetos literales, o una colección de objetos
    literales.
        const arrayDeObjetosLiterales = [
            {},
            {},
            {},
            {}
        ];

    2. Tenemos como base un array de cuentas bancarias, donde a cada
    una la representamos con un objeto literal. A partir de este array
    trabajaremos sobre los siguientes enunciados, resolviendo de la
    forma que nos parezca más adecuada
        const cuentasBancarias = [
            {
                titular: "Arlene Barr",
                estaHabilitada: false,
                saldo: 3253.40,
                edadTitular: 33,
                tipoCuenta: "sueldo"
            },
            {
                titular: "Roslyn Torres",
                estaHabilitada: false,
                saldo: 3229.45,
                edadTitular: 27,
                tipoCuenta: "sueldo"
            },
            {
                titular: "Cleo Lopez",
                estaHabilitada: true,
                saldo: 1360.19,
                edadTitular: 34,
                tipoCuenta: "corriente"
            },
            {
                titular: "Daniel Malone",
                estaHabilitada: true,
                saldo: 3627.12,
                edadTitular: 30,
                tipoCuenta: "sueldo"
            },
            {
                titular: "Ethel Leon",
                estaHabilitada: true,
                saldo: 1616.52,
                edadTitular: 34,
                tipoCuenta: "sueldo"
            },
            {
                titular: "Harding Mitchell",
                estaHabilitada: true,
                saldo: 1408.68,
                edadTitular: 25,
                tipoCuenta: "corriente"
            }
        ];

        a. Obtener un nuevo array de cuentas bancarias cuyas edades sean
        menores a 30.
        b. Obtener un nuevo array de cuentas bancarias cuyas edades sean
        mayor o igual a 30.
        c. Obtener un nuevo array de cuentas bancarias cuyas edades sean
        menores o igual a 30.
        d. Obtener la cuenta bancaria con el titular de la misma más joven.
        e. Obtener un array con las cuentas bancarias habilitadas.
        f. Obtener un array con las cuentas bancarias deshabilitadas.
        g. Obtener la cuenta bancaria con el menor saldo.
        h. Obtener la cuenta bancaria con el mayor saldo.
*/

const cuentasBancarias = [
    {
        titular: "Arlene Barr",
        estaHabilitada: false,
        saldo: 3253.40,
        edadTitular: 33,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Roslyn Torres",
        estaHabilitada: false,
        saldo: 3229.45,
        edadTitular: 27,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Cleo Lopez",
        estaHabilitada: true,
        saldo: 1360.19,
        edadTitular: 34,
        tipoCuenta: "corriente"
    },
    {
        titular: "Daniel Malone",
        estaHabilitada: true,
        saldo: 3627.12,
        edadTitular: 30,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Ethel Leon",
        estaHabilitada: true,
        saldo: 1616.52,
        edadTitular: 34,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Harding Mitchell",
        estaHabilitada: true,
        saldo: 1408.68,
        edadTitular: 25,
        tipoCuenta: "corriente"
    }
];

const cuentasBancariasDeTitularesMenoresA30 = [];
for (let i = 0; i < cuentasBancarias.length; i++) {
    if (cuentasBancarias[i].edadTitular < 30) {
        cuentasBancariasDeTitularesMenoresA30.push(cuentasBancarias[i]);
    }   
}
console.log("\n ===== Cuentas bancarias de titulares menores a 30 ===== ");
console.log(cuentasBancariasDeTitularesMenoresA30);

const cuentasBancariasDeTitularesMayoresOIgualesA30 = [];
for (let i = 0; i < cuentasBancarias.length; i++) {
    if (cuentasBancarias[i].edadTitular >= 30) {
        cuentasBancariasDeTitularesMayoresOIgualesA30.push(cuentasBancarias[i]);
    }   
}
console.log("\n ===== Cuentas bancarias de titulares mayores o iguales a 30 ===== ");
console.log(cuentasBancariasDeTitularesMayoresOIgualesA30);

const cuentasBancariasDeTitularesMenoresOIgualesA30 = [];
for (let i = 0; i < cuentasBancarias.length; i++) {
    if (cuentasBancarias[i].edadTitular <= 30) {
        cuentasBancariasDeTitularesMenoresOIgualesA30.push(cuentasBancarias[i]);
    }   
}
console.log("\n ===== Cuentas bancarias de titulares menores o iguales a 30 ===== ");
console.log(cuentasBancariasDeTitularesMenoresOIgualesA30);

const cuentaBancariaDeTitularMasJoven = cuentasBancarias[0];
for (let i = 0; i < cuentasBancarias.length; i++) {
    if (cuentasBancarias[i].edadTitular < cuentaBancariaDeTitularMasJoven.edadTitular) {
        cuentaBancariaDeTitularMasJoven.titular        = cuentasBancarias[i].titular;
        cuentaBancariaDeTitularMasJoven.estaHabilitada = cuentasBancarias[i].estaHabilitada;
        cuentaBancariaDeTitularMasJoven.saldo          = cuentasBancarias[i].saldo;
        cuentaBancariaDeTitularMasJoven.edadTitular    = cuentasBancarias[i].edadTitular;
        cuentaBancariaDeTitularMasJoven.tipoCuenta     = cuentasBancarias[i].tipoCuenta;
    }   
}
console.log("\n ===== Cuenta bancaria del titular más joven ===== ");
console.log(cuentaBancariaDeTitularMasJoven);

const cuentasBancariasHabilitadas = [];
for (let i = 0; i < cuentasBancarias.length; i++) {
    if (cuentasBancarias[i].estaHabilitada === true) {
        cuentasBancariasHabilitadas.push(cuentasBancarias[i]);
    }   
}
console.log("\n ===== Cuentas bancarias habilitadas ===== ");
console.log(cuentasBancariasHabilitadas);

const cuentasBancariasDeshabilitadas = [];
for (let i = 0; i < cuentasBancarias.length; i++) {
    if (cuentasBancarias[i].estaHabilitada === false) {
        cuentasBancariasDeshabilitadas.push(cuentasBancarias[i]);
    }   
}
console.log("\n ===== Cuentas bancarias deshabilitadas ===== ");
console.log(cuentasBancariasDeshabilitadas);

const cuentaBancariaConMenorSaldo = cuentasBancarias[0];
for (let i = 0; i < cuentasBancarias.length; i++) {
    if (cuentasBancarias[i].saldo < cuentaBancariaConMenorSaldo.saldo) {
        cuentaBancariaConMenorSaldo.titular        = cuentasBancarias[i].titular;
        cuentaBancariaConMenorSaldo.estaHabilitada = cuentasBancarias[i].estaHabilitada;
        cuentaBancariaConMenorSaldo.saldo          = cuentasBancarias[i].saldo;
        cuentaBancariaConMenorSaldo.edadTitular    = cuentasBancarias[i].edadTitular;
        cuentaBancariaConMenorSaldo.tipoCuenta     = cuentasBancarias[i].tipoCuenta;
    }   
}
console.log("\n ===== Cuenta bancarias con menor saldo ===== ");
console.log(cuentaBancariaConMenorSaldo);

const cuentaBancariaConMayorSaldo = cuentasBancarias[0];
for (let i = 0; i < cuentasBancarias.length; i++) {
    if (cuentasBancarias[i].saldo > cuentaBancariaConMayorSaldo.saldo) {
        cuentaBancariaConMayorSaldo.titular        = cuentasBancarias[i].titular;
        cuentaBancariaConMayorSaldo.estaHabilitada = cuentasBancarias[i].estaHabilitada;
        cuentaBancariaConMayorSaldo.saldo          = cuentasBancarias[i].saldo;
        cuentaBancariaConMayorSaldo.edadTitular    = cuentasBancarias[i].edadTitular;
        cuentaBancariaConMayorSaldo.tipoCuenta     = cuentasBancarias[i].tipoCuenta;
    }   
}
console.log("\n ===== Cuenta bancarias con mayor saldo ===== ");
console.log(cuentaBancariaConMayorSaldo);