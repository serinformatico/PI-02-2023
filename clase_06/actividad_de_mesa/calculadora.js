/*
    CONSIGNA:
    Nivel I
    1. Crear un archivo calculadora.js que contendrá las distintas operaciones a realizar
    de nuestra calculadora.
    2. Crear una función sumar, esta deberá recibir dos parámetros y retornar la suma de
    los mismos.
    3. Crear una función restar, la cual deberá recibir dos parámetros y retornar la resta
    del primero menos el segundo.
    4. Crear una función multiplicar, la misma deberá recibir dos parámetros y retornar el
    resultado de su multiplicación.
    5. Crear una función dividir, la cual recibirá dos parámetros y retornar el resultado de
    la división del primero sobre el segundo.

    Nivel II
    1. En el archivo calculadora.js —debajo de nuestras 4 funciones hechas con anterioridad—
    creá un console.log en el cual vas a poner un string para indicar que debajo de él
    comenzarás a probar las funciones, algo así como un “separador de código”. Por ejemplo:
    console.log("-------------- Testeo de Operaciones / Calculadora --------------");
    2. Ejecutar la función que permite sumar y la función que permite restar pasando como
    argumentos dos números cualesquiera. Mostrar en consola los resultados.
    3. Ejecutar la función que permite multiplicar pasando como argumentos dos números
    cualesquiera. Mostrar en consola el resultado.
    4. Ejecutar la función que permite dividir pasando como argumentos dos números cualquiera.
    Mostrar en consola el resultado.
    5. Ejecutar la función que permite dividir pasando, ahora, como uno de los dos argumentos,
    el número cero. Mostrar en consola el resultado.

    Nivel III
    1. Crear una función que se llame cuadradoDeUnNumero, la cual recibe un número como parámetro
    y deberá retornar ese número elevado al cuadrado.
    Importante: cuadradoDeUnNumero() deberá utilizar la función multiplicar() para calcular el
    cuadrado del parámetro ingresado a cuadradoDeUnNumero().
    2. Crear la función promedioDeTresNumeros, la misma deberá calcular el promedio de 3 números,
    que serán ingresados por parámetro.
    Importante: promedioDeTresNumeros() deberá utilizar algunas funciones previamente creadas de
    nuestra calculadora.
    3. Crear la función calcularPorcentaje. Esta recibirá dos parámetros: el número total y el
    porcentaje que se le quiere calcular. Deberá retornar el x% del total. Por ejemplo:
    calcularPorcentaje(300, 15) debe retornar 45, ya que es el 15% de 300.
    Importante: calcularPorcentaje() deberá utilizar algunas funciones previamente creadas de
    nuestra calculadora.
    4. Crear una función GeneradorDePorcentaje que recibe dos parámetros y deberá retornar el
    porcentaje del primero con respecto al segundo.
    Importante: GeneradorDePorcentaje() deberá utilizar algunas funciones previamente creadas
    de nuestra calculadora.
    Ejemplo: GeneradorDePorcentaje(2, 200) deberá retornar 1, ya que 2 es el 1% de 200.
*/

function sumar(num1, num2) {
    return num1 + num2;
}

function restar(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    return num1 / num2;
}

console.log("-------------- NIVEL II - Testeo de Calculadora --------------");

let resultadoDeLaSuma = sumar(6, 4);
console.log("El resultado de la suma es: " + resultadoDeLaSuma);


let resultadoDeLaResta = restar(16, 4);
console.log("El resultado de la resta es: " + resultadoDeLaResta);

let resultadoDeLaMultiplicacion = multiplicar(2, 20);
console.log("El resultado de la multiplicación es: " + resultadoDeLaMultiplicacion);

let resultadoDeLaDivision = dividir(100, 5);
console.log("El resultado de la división es: " + resultadoDeLaDivision);

let resultadoDeLaDivisionPorCero = dividir(100, 0);
console.log("El resultado de la división es: " + resultadoDeLaDivisionPorCero); // Infinity: No se puede dividir por cero

function cuadradoDeUnNumero(num) {
    return multiplicar(num, num)
}

function promedioDeTresNumeros(num1, num2, num3) {
    let sumatoriaParcial = sumar(num1, num2);
    let sumatoriaTotal = sumar(sumatoriaParcial, num3);
    return dividir(sumatoriaTotal, 3);
}

function calcularPorcentaje(num, porcentaje) {
    let resultadoDeLaMultiplicacion = multiplicar(num, porcentaje);
    return dividir(resultadoDeLaMultiplicacion, 100);
}

function generadorDePorcentaje(num1, num2) {
    let primeraOperacion = multiplicar(num1, 100);
    let segundaOperacion = dividir(primeraOperacion, num2);
    return segundaOperacion;
}

console.log("-------------- NIVEL III - Testeo de Funciones extras --------------");

console.log("-------------- Testeo de Funciones extras --------------");

let resultadoDelCuadradoDeUnNumero = cuadradoDeUnNumero(4);
console.log("El resultado del cuadrado de un número es: " + resultadoDelCuadradoDeUnNumero);

let resultadoDelPromedioDeTresNumeros = promedioDeTresNumeros(4);
console.log("El resultado del promedio de tres números es: " + resultadoDelPromedioDeTresNumeros);

let resultadoDeCalcularPorcentaje = calcularPorcentaje(4);
console.log("El resultado de calcular porcentaje es: " + resultadoDeCalcularPorcentaje);

let resultadoDelGeneradorDePorcentaje = generadorDePorcentaje(4);
console.log("El resultado del generador de porcentaje es: " + resultadoDelGeneradorDePorcentaje);