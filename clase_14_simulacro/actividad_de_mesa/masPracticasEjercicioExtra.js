/*
    CONSIGNA:
    Extras:
    1. Desarrollar una función llamada generarID que reciba como
    parámetro el array de cuentas y agregue a cada elemento (objeto
    literal) una propiedad llamada id con un valor numérico.
    2. Desarrollar una función llamada buscarPorId que reciba como
    parámetro el array de cuentas y un id, en caso de encontrar
    retornar la cuenta (él objeto literal completo), caso contrario
    retornar null.
    3. Desarrollar una función llamada filtrarPorSaldos que reciba
    como parámetro el array de cuentas y un saldo (Number), deberá
    retornar un array que se cuyas cuentas se encuentren por debajo
    del saldo enviado por parámetro.
    4. Desarrollar una función llamada incrementarSaldo que reciba
    como parámetro el array de cuentas, un id y un saldo, deberá
    incrementar él saldo de la cuenta, en caso de encontrar, caso
    contrario retornar undefined.
        a. Reutilizando la función buscarPorId
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

function generarID(cuentasBancarias) {
    for (let i = 0; i < cuentasBancarias.length; i++) {
        cuentasBancarias[i].id = (i+1);      
    }

    return cuentasBancarias;
}
console.log("\n ===== generarID() ===== ");
console.log(generarID(cuentasBancarias));

function buscarPorId(cuentasBancarias, id) {
    for (let i = 0; i < cuentasBancarias.length; i++) {
        if (cuentasBancarias[i].id === id) {
            return cuentasBancarias[i];
        }      
    }

    return null;
}
console.log("\n ===== buscarPorId() ===== ");
console.log(buscarPorId(cuentasBancarias, 2));

function filtrarPorSaldos(cuentasBancarias, saldo) {
    const cuentasBancariasFiltradas = [];

    for (let i = 0; i < cuentasBancarias.length; i++) {
        if (cuentasBancarias[i].saldo < saldo) {
            cuentasBancariasFiltradas.push(cuentasBancarias[i]);
        }      
    }

    return cuentasBancariasFiltradas;
}
console.log("\n ===== filtrarPorSaldos() ===== ");
console.log(filtrarPorSaldos(cuentasBancarias, 1500.0));

function incrementarSaldo(cuentasBancarias, id, saldo) {
    let cuentaBancaria = buscarPorId(cuentasBancarias, id);
    if (cuentaBancaria !== null) {
        cuentaBancaria.saldo += saldo;

        return cuentaBancaria;
    }

    return null;
}
console.log("\n ===== incrementarSaldo() ===== ");
console.log(incrementarSaldo(cuentasBancarias, 2, 1500.0));
