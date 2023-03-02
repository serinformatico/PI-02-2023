/*
    CONSIGNA:
    totalAPagar()
    Declarar una función llamada totalAPagar() que reciba como parametros, vehiculo y
    litrosConsumidos.
    A continuación, defina y realice los cálculos para obtener el total a pagar, teniendo
    en cuenta las siguientes consideraciones.
        ● Si el vehículo es “coche”, el precio por litro es de $86.
        ● Si es “moto” ha de ser $70.
        ● Si es “autobús” ha de ser $55.
        ● Si los litros consumidos están entre 0 y 25 se ha de añadir $50 al total a pagar.
        ● Si los litros consumidos es mayor a 25 se ha de añadir $25 al total a pagar.

*/


function totalAPagar(vehiculo, litrosConsumidos) {
    let total = 0;

    if (vehiculo === "coche") {
        total = litrosConsumidos * 86;
    } else if (vehiculo === "moto") {
        total = litrosConsumidos * 70;
    } else if (vehiculo === "autobus") {
        total = litrosConsumidos * 55;
    } else {
        return "Por favor, ingrese un tipo de vehiculo valido.";
    }

    if (litrosConsumidos >= 0 && litrosConsumidos <= 25) {
      total = total + 50;
    } else if (litrosConsumidos > 25) {
        total = total + 25;
    }

    return "El total a pagar es de: $" + total;
}

console.log(totalAPagar("coche", 10));