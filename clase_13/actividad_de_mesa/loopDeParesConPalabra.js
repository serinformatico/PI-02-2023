/*
    CONSIGNA:
    Loop de impares con palabra

    Deberás crear una función llamada loopDeImpares que reciba como
    parámetros un número y una palabra, y haga un loop de 0 a 100
    mostrando en la consola cada número del loop. Luego, modificar
    el código para que, en caso de que ese número sumado con el
    número pasado por parámetro sea impar, muestre en la consola la
    palabra pasada por parámetro.
*/


function loopDeImpares(numero, palabra) {
    for (let i = 0; i <= 100; i++) {
        if ((numero + i) % 2 != 0) {
            console.log(palabra);
        }
    }
}

loopDeImpares(6, "Soy una palabra");
