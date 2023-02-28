/*
    EJERCICIO 3: JS_funciones_parametros_a_la_función
    En el ejemplo que presentamos hay una función que ya está creada, pero sucede que cuando
    la invocamos, no funciona. Eso es porque la función necesita ciertos parámetros y no los tiene.
*/

function saludar(nombre, apellido) {
    return 'Hola, ' + nombre + ' ' + apellido + '!';
}

console.log(saludar("Juan", "Pérez"));