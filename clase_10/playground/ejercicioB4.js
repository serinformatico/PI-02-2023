/*
    EJERCICIO 4: JS_funciones_estan_hablando_de_mi
    Para lograrlo, tendremos que crear una función llamada menciona, que recibirá dos parámetros:
    un texto —que es donde vamos a buscar— y una palabra —que es la que vamos a averiguar si se
    menciona en el texto—. La misma función retorna true en el caso de encontrar la palabra.

    Ejemplo:
    menciona('Existen muchos lenguajes de programación y JavaScript es uno de ellos', 'programación');
*/

function menciona(texto, textoBuscado) {
    return texto.includes(textoBuscado);
}

console.log(menciona('Existen muchos lenguajes de programación y JavaScript es uno de ellos', 'programación'));