/*
    CONSIGNA:
        1. Escribí un programa que le pida al usuario ingresar una frase y la imprima
        en la consola. Recordá que para pedirle al usuario que escriba una frase debés
        utilizar el método prompt() y para escribir en la consola debés utilizar el
        método console.log().
        2. Escribí un programa que le pregunte al usuario su nombre e imprima "Hola "
        seguido del nombre y un signo de exclamación. Por ejemplo, si el usuario ingresa
        "Pedro" el programa debe imprimir en la consola "Hola Pedro!".
        3. Escribí un programa que le pida al usuario ingresar un número, luego le pida
        un segundo número, e imprima en la consola la suma de los dos números que
        ingresó el usuario.
        4. Escribí un programa que le pida al usuario su año de nacimiento e imprima
        su edad actual en la consola con la frase "Tienes X años" (siendo X la cantidad
        de años). Por ejemplo, asumiendo que el año actual es 2019 y el usuario ingresa
        1999, el programa debe imprimir en la consola: "Tienes 20 años".
        5. Escribí un programa que piense un número de forma aleatoria del 1 al 10 y le
        pida al usuario que lo trate de adivinar. Si el número es correcto debe imprimir
        en la consola "Felicitaciones, ese era!", de lo contrario, debe imprimir "Lo
        siento, intenta nuevamente!"
        6. Escribí un programa que imprima los números pares del 0 al 100.
        7. Escribí un programa que itere sobre el arreglo nombres e imprima cada uno en
        la consola: const nombres = ["Pedro","Pablo","Maria","Juan","Diana"];
        8. Construí un pseudocódigo que permita ingresar un número, si el número es
        mayor de 500, se debe calcular y mostrar en pantalla el 18% de este.
        9. Escribí una función llamada elemento que recibe un arreglo como parámetro.
        La función debe devolver el valor que se encuentra en la tercera posición. Si
        el arreglo no tiene al menos 3 elementos deberá retornar -1.
        10. Se ingresa por teclado un número natural de hasta 2 cifras, si tiene una
        cifra que muestre lo mínimo que le falta para ser un número de 2 cifras; de
        lo contrario, que muestre lo mínimo que le falta para ser un número de 3
        cifras. Considerar que el usuario ingresa números de hasta dos cifras.
        11. Hacer un algoritmo que muestre el promedio de varias notas o de N notas
        ingresadas, se debe definir el valor de N para conocer la cantidad de notas
        a ingresar.
        12. Hacer un programa que calcule la suma de los N primeros números naturales,
        dónde N es el número límite ingresado por teclado.
*/


const prompt = require("prompt-sync")({ sigint: false });


function mostrarFrase() {
    let frase = prompt("Ingrese una frase: ");

    console.log(frase);
}

console.log(" ===== saludar =====");
mostrarFrase();


function saludar() {
    let nombre = prompt("Ingrese su nombre: ");
    let saludo = "Hola " + nombre + "!";

    console.log(saludo);
}

console.log(" ===== saludar =====");
saludar();


function sumar() {
    let num1 = parseInt(prompt("Ingrese un número: "));
    let num2 = parseInt(prompt("Ingrese otro número: "));
    let suma = num1 + num2;

    console.log(suma);
}

console.log(" ===== sumar =====");
sumar();


function calcularEdad() {
    let anioDeNacimiento = parseInt(prompt("Ingrese el año en que nació (formato YYYY): "));
    let edad = 2023 - anioDeNacimiento;

    console.log("Su edad es: " + edad + " años");
}

console.log(" ===== calcularEdad =====");
calcularEdad();


function adivinarNumero() {
    let numeroIngresado = parseInt(prompt("Ingrese un número que cree que saldrá: "));
    let numeroAleatorio = Math.floor(Math.random() * 10)+1;

    if (numeroIngresado == numeroAleatorio) {
        console.log("Felicitaciones, ese era!");
    } else {
        console.log("Lo siento, intenta nuevamente!");
    }
}

console.log(" ===== adivinarNumero =====");
adivinarNumero();


function imprimirNumerosPares() {
    let mensaje = "Números pares:"

    for (let i = 0; i <= 100; i++) {
        if (i % 2 == 0) {
            mensaje += " " + i;
        }
    }

    console.log(mensaje);
}

console.log(" ===== imprimirNumerosPares =====");
imprimirNumerosPares();


function calcularCuantasCifrasLeFaltanAlNumero() {
    let numeroIngresado = parseInt(prompt("Ingrese un numero de dos cifras: "));
    let faltante = 0;

    if (numeroIngresado < 10) {
        faltante = 10 - numeroIngresado;
        console.log("Al numero ingresado le falta " + faltante + " para ser un número de dos cifras");
    } else {
        faltante = 100 - numeroIngresado;
        console.log("Al numero ingresado le falta " + faltante + " para ser un número de tres cifras");
    }
}

console.log(" ===== calcularCuantasCifrasLeFaltanAlNumero =====");
calcularCuantasCifrasLeFaltanAlNumero();


function iterarSobreNombres() {
    const nombres = ["Pedro", "Pablo", "Maria", "Juan", "Diana"];

    for (let i = 0; i < nombres.length; i++) {
        console.log(nombres[i]);     
    }
}

console.log(" ===== iterarSobreNombres =====");
iterarSobreNombres();


function construirPseudocodigo(numero) {
    if (numero > 500) {
        console.log(numero/100*18.0);     
    } 
}

console.log(" ===== construirPseudocodigo =====");
construirPseudocodigo(508);


function elemento(arreglo) {
    if (arreglo.length >= 3) {
        console.log(arreglo[2]);     
    } else {
        console.log(-1);
    }
}

console.log(" ===== elemento =====");
const vocales = ["a", "e", "i", "o", "u"]
elemento(vocales);


function calcularPromedioDeNotas() {
    let cantDeNotas = parseInt(prompt("Ingrese cantidad de notas a promediar: "));
    let sumaDeNotas = 0;

    for (let i = 1; i <= cantDeNotas; i++) {
        let nota = parseInt(prompt("Ingrese una nota: "));
        sumaDeNotas += nota;
    }

    let promedio = sumaDeNotas / cantDeNotas;

    console.log(promedio.toFixed(2));
}

console.log(" ===== calcularPromedioDeNotas =====");
calcularPromedioDeNotas();


function calcularSumatoria() {
    let numeroLimite = parseInt(prompt("Ingrese un número límite para la sumatoria: "));
    let sumatoria = 0;


    for (let i = 0; i <= numeroLimite; i++) {
        sumatoria += i;
    }

    console.log(sumatoria);
}

console.log(" ===== calcularSumatoria =====");
calcularSumatoria();
