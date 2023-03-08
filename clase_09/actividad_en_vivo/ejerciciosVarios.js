/*
    CONSIGNA:
    Ejercicios varios
    1.	Sumar todas las notas y dividirlas entre la cantidad de notas a promediar,
    PROMEDIO=(NOTA1+NOTA2+NOTA3)/3
    2.	Algoritmo para convertir una cantidad de pesos a dólares.
    3.	Hacer un programa que calcule el salario de un empleado, si se descuenta el 20% de su
    salario actual.
    4.	Hacer un programa para calcular el promedio de 3 notas; si el promedio es mayor que 7
    mostrar aprobado, de lo contrario, mostrar desaprobado.
    5.	Ingresar un número y mostrar si es número par o impar.
    6.	Elaborar un programa que simule una clave de acceso. Si el usuario es: "ADMIN" y la
    clave "123456" mostrar el mensaje "ACCESO PERMITIDO". Caso contrario, mostrar el mensaje
    "ACCESO DENEGADO".
    7.	Elaborar un programa que permita ingresar un número entero del 1 al 12 y muestre la
    tabla de multiplicar de dicho número.
    8.	Elaborar un programa que muestre el mayor de 10 números ingresados.
    9.	Elaborar un programa que muestre la cantidad de números pares e impares entre 2 números.
    10.	Escribir un programa que, ingresando un número, imprima los números desde 1 hasta ese mismo.
*/


function calcularPromedioDeNotas(nota1, nota2, nota3) {
    let suma     = nota1 + nota2 + nota3;
    let promedio = suma / 3;

    return promedio.toFixed(2);
}

console.log("El promedio de notas es " + calcularPromedioDeNotas(4, 9, 6));


function convertirPesosADolares(cantidadDePesos, cotizacionDelDolar) {
    return (cantidadDePesos / cotizacionDelDolar).toFixed(2);
}

console.log("La conversión de pesos a dolares es U$D " + convertirPesosADolares(15000, 356.00));


function calcularSalario(salarioBruto) {
    let descuento   = (salarioBruto / 100) * 20;
    let salarioNeto = salarioBruto - descuento;

    return (salarioNeto).toFixed(2);
}

console.log("El cálculo del salario neto es " + calcularSalario(180000.00));


function determinarEstadoDeAprobacion(nota1, nota2, nota3) {
    let suma     = nota1 + nota2 + nota3;
    let promedio = suma / 3;

    if (promedio >= 7) {
        return "APROBADO";
    }

    return "DESAPROBADO";
}

console.log("El estado de aprobación es " + determinarEstadoDeAprobacion(5, 9, 7));


function determinarParidad(numero) {
    let mensaje = "El número " + numero;

    if (numero % 2 == 0) {
        return mensaje + " es par";
    }

    return mensaje + " es impar";
}

console.log(determinarParidad(9));


const accesoAlSistema = (usuario, clave) => {
    if (usuario === "ADMIN" && clave === "123456") {
        return "ACCESO PERMITIDO";
    }

    return "ACCESO DENEGADO";
};

console.log("Acceso al sistema: " + accesoAlSistema("ADMIN", "123456"));


const tablaDeMultiplicacion = (numero) => {
    let mensaje = "";

    if (numero > 0 && numero <= 12) {
        mensaje = "La tabla del " + numero + " es:";

        for (let i = 1; i <= 10; i++) {
            mensaje += "\n\t" + numero + " * " + i + " = " + numero * i;
        }
    }

    return mensaje;
};

console.log(tablaDeMultiplicacion(5));


const numeroMayorDe10Numeros = (n1, n2, n3, n4, n5, n6, n7, n8, n9, n10) => {
    let numeroMayor = Math.max(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10);

    return "El número mayor es " + numeroMayor;
};

console.log(numeroMayorDe10Numeros(5, 2, 8, 10, 11, 7, 4, 15, 3, 9));


const cantidadesDeNumerosParesEImparesEntre10Numeros = (num1, num2) => {
    let contadorPares = 0
    let contadorImpares = 0

    for (let i = num1; i <= num2; i++) {
        if (i % 2 == 0) {
            contadorPares++;
        } else {
            contadorImpares++;
        }
    }

    return "La cantidad de números pares es " + contadorPares + " y de impares es " + contadorImpares;
};

console.log(cantidadesDeNumerosParesEImparesEntre10Numeros(1, 13));


const enumeracionHasta = (numeroMaximo) => {
    let mensajeDeEnumeracion = "Enumeración:";

    for (let i = 1; i <= numeroMaximo; i++) {
        mensajeDeEnumeracion += " " + i;
    }

    return mensajeDeEnumeracion;
};

console.log(enumeracionHasta(25));