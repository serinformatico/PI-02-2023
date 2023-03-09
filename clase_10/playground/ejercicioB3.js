/*
    EJERCICIO 3: JS_funciones_reemplazo_fast_fast
    Nuestra misión, ahora, es crear una función llamada reemplazoFastFast que va a recibir los
    siguientes tres parámetros:
        1. Un texto.
        2. La palabra que vamos a buscar para reemplazar.
        3. La palabra que vamos a usar para reemplazar.

    La función deberá devolver el texto con la palabra reemplazada.
    Ejemplo:
        let textoSinGuiones = reemplazoFastFast('Este texto es mala onda','mala','buena');
        console.log(textoSinGuiones) //'Este texto es buena onda'
*/

function reemplazoFastFast(texto, textoBuscado, textoReemplazante) {
    return texto.replace(textoBuscado, textoReemplazante);
}

console.log(reemplazoFastFast('Este texto es mala onda', 'mala', 'buena'));