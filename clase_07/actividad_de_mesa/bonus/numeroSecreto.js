/*
    CONSIGNA:
    ¿Cual es el número secreto?
    Creemos una función que reciba un parámetro numérico, y verifique si el mismo es el
    número secreto. El número secreto deberá ser seleccionado de manera random de entre 1 y 10
    (investiga que hace la función Math.random()), en caso de ser correcto retorna un mensaje
    felicitando al usuario, y en caso de que no acierte, retorna un mensaje de aliento junto
    con el número ingresado y el secreto.
*/


function verificarNumeroSecreto(miNumero) {
    let numeroSecreto = Math.floor(Math.random() * 10)+1;

    if (typeof miNumero !== "number") {
        return "Error, el elemento debe ser de tipo numero. Por favor reintente.";
    } else if (miNumero === numeroSecreto) {
        return "¡Felicidades! adivinaste el numero secreto";
    } else {
        return ("Lo sentimos, su número ingresado: " + miNumero + " difiere del número secreto: " + numeroSecreto + ". ¡Intentalo nuevamente!");
    }
}

console.log(verificarNumeroSecreto(5));