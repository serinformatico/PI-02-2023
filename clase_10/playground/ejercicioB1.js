/*
    EJERCICIO 1: JS Funciones URL completa
    Debemos crear una función llamada dominio que recibirá un string como 'digitalhouse.com.ar'
    y su función será retornar: 'http://www.digitalhouse.com.ar'.
*/

function dominio(url) {
    return 'http://www.' + url
}

console.log(dominio('digitalhouse.com.ar'));