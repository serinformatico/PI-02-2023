/*
    FUNCIONES EXPRESADAS (el interprete de javascript las carga cuando son invocadas)
        Denominadas
        Anónimas
        De Flechas (arrow function)

    Nota: Se recomienda el uso de const para evitar la modificación de la función.
*/


let a = 5;
let b = 2;


// Denominadas:
    // Uso con retorno (utiliza variables globales)
    const dividirVariablesGlobalesConFuncionDenominada = function dividir() {
        return a / b;
    };
    console.log(dividirVariablesGlobalesConFuncionDenominada());            // Usa la variable dividirVariablesGlobalesConFuncionDenominada que contiene e invoca a la función dividir. Imprime en consola 2.5 que es el resultado de dividir 5 en 2

    // Uso con retorno (utiliza variables locales)
    const dividirVariablesLocalesConFuncionDenominada = function dividir() {
        let a = 10;
        let b = 2;
        return a / b;
    };
    console.log(dividirVariablesLocalesConFuncionDenominada());             // Usa la variable dividirVariablesLocalesConFuncionDenominada que contiene e invoca a la función dividir. Imprime en consola 5 que es el resultado de dividir 10 en 2

    // Uso con retorno (utiliza dos parámetros)
    const dividirVariablesParametrizadasConFuncionDenominada = function dividir(a, b) {
        return a / b;
    };
    console.log(dividirVariablesParametrizadasConFuncionDenominada(9, 3));  // Usa la variable dividirVariablesParametrizadasConFuncionDenominada que contiene e invoca a la función dividir. Imprime en consola 3 que es el resultado de dividir 9 en 3


// Anónimas:
    // Uso con retorno (utiliza variables globales)
    const dividirVariablesGlobalesConFuncionAnonima = function () {
        return a / b;
    };
    console.log(dividirVariablesGlobalesConFuncionAnonima());               // Usa la variable dividirVariablesGlobalesConFuncionAnonima que contiene e invoca una función anónima. Imprime en consola 2.5 que es el resultado de dividir 5 en 2

    // Uso con retorno (utiliza variables locales)
    const dividirVariablesLocalesConFuncionAnonima = function () {
        let a = 10;
        let b = 2;
        return a / b;
    };
    console.log(dividirVariablesLocalesConFuncionAnonima());                // Usa la variable dividirVariablesLocalesConFuncionAnonima que contiene e invoca una función anónima. Imprime en consola 5 que es el resultado de dividir 10 en 2

    // Uso con retorno (utiliza dos parámetros)
    const dividirVariablesParametrizadasConFuncionAnonima = function (a, b) {
        return a / b;
    };
    console.log(dividirVariablesParametrizadasConFuncionAnonima(9, 3));     // Usa la variable dividirVariablesParametrizadasConFuncionAnonima que contiene e invoca una función anónima. Imprime en consola 3 que es el resultado de dividir 9 en 3


// De Flechas (Arrow function):
    // Uso con retorno (utiliza variables globales)
    const dividirVariablesGlobalesConFuncionDeFlechas = () => a / b;
    console.log(dividirVariablesGlobalesConFuncionDeFlechas());             // Usa la variable dividirVariablesGlobalesConFuncionDeFlechas que contiene e invoca una función de flecha. Imprime en consola 2.5 que es el resultado de dividir 5 en 2

    // Uso con retorno (utiliza variables locales)
    const dividirVariablesLocalesConFuncionDeFlechas = () => {
        let a = 10;
        let b = 2;
        return a / b;
    };
    console.log(dividirVariablesLocalesConFuncionDeFlechas());              // Usa la variable dividirVariablesLocalesConFuncionDeFlechas que contiene e invoca una función de flecha. Imprime en consola 5 que es el resultado de dividir 10 en 2

    // Uso con retorno (utiliza dos parámetros)
    const dividirVariablesParametrizadasConFuncionDeFlechas = (a, b) => a / b;
    console.log(dividirVariablesParametrizadasConFuncionDeFlechas(9, 3));  // Usa la variable dividirVariablesParametrizadasConFuncionDeFlechas que contiene e invoca una función de flecha. Imprime en consola 3 que es el resultado de dividir 9 en 3