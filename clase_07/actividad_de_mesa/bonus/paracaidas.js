/*
    CONSIGNA:
    Crea una función llamada abrirParacaidas(), la cual recibe dos parámetros: velocidadEnKm
    y alturaEnMetros. La función deberá decirnos si el paracaídas debe abrirse teniendo en
    cuenta lo siguiente:
        ● La velocidad debe ser menor a 1000 km/h.
        ● La altura debe ser mayor o igual a 2000m y menor a 3000m.

*/

function abrirParacaidas(velocidad, altura) {
    if (velocidad < 1000) {
        if (altura >= 2000 && altura < 3000) {
            return "Abriendo Paracaídas...";
        } else {
            return ("La altura debe encontrarse entre 2000 y 3000 metros de altura. Altura actual: " + altura + "m");
        }
    } else {
        return ("La velocidad debe ser menor a 1000 km/h. Velocidad actual: " + velocidad + " km/h");
    }
}

console.log(abrirParacaidas(985, 2135));