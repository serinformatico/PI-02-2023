/*
    CONSIGNA:
        1. Crear una función que pida un valor por parámetro y muestre los 10 números siguientes.
        2. Imprimir los números entre el 5 y el 20, saltando de tres en tres.
        3. Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100
        4. Dado un número entero positivo, mostrar su factorial. El factorial de un número se obtiene
        multiplicando todos los números enteros positivos que hay entre el 1 y ese número.

        5. (Opcional) Crear una función que muestre todos los números de la secuencia de fibonacci
        hasta el valor ingresado por parámetro.
*/

function mostrarLosSiguientes10Numeros(numero) {
    console.log('\n ===== mostrarLosSiguientes10Numeros ===== ');

    for (let i = 1; i <= 10; i++) {
        console.log(numero + i)
    }
}

function mostrarSaltandoDe3en3(numero1, numero2) {
    console.log('\n ===== mostrarSaltandoDe3en3 ===== ');

    for (let i = numero1; i <= numero2; i += 3) {
        console.log(i)
    }
}

function calcularSumatoria(numero) {
    console.log('\n ===== calcularSumatoria ===== ');

    let acumulador = 0;

    for (let i = 0; i <= numero; i++) {
        acumulador += i;
    }

    console.log(acumulador)
}

function calcularFactorial(numero) {
    console.log('\n ===== calcularFactorial ===== ');

    let acumulador = 1;

    for (let i = 1; i <= numero; i++) {
        acumulador *= i;
    }

    console.log(acumulador)
}

function mostrarSerieDeFibonacci(numero) {
    console.log('\n ===== mostrarSerieDeFibonacci ===== ');

    const serie = [0, 1];

    for (let i = 2; i <= numero; i++) {
        let numeroAnterior = serie[i-2];
        let numeroActual = serie[i-1];
        serie[i] = numeroAnterior + numeroActual;
    }

    console.log(serie)
}


mostrarLosSiguientes10Numeros(7);
mostrarSaltandoDe3en3(5, 20);
calcularSumatoria(100);
calcularFactorial(5);
mostrarSerieDeFibonacci(10);

