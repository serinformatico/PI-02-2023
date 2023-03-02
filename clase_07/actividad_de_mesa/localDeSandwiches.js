/*
    CONSIGNA:
    Necesitamos armar el sistema para un local de venta de sandwiches. Los clientes eligen
    el sandwich base que tiene un precio, y por cada seleccion siguiente se le suma el valor
    de su seleccion al precio, por ej. un sadwich base vegetariano con un precio x, despues
    selecciona pan negro con un precio y, por lo que su total a pagar seria x+y, y asi
    sucecivamente con el resto de los ingredientes.

    Como es un local que ya tenía un sistema previo, ellos ya tienen toda la interfaz donde
    el usuario elige cada ingrediente, lo que nos facilita el trabajo, ya que nosotros
    recibiremos los datos de la siguiente manera:
        Nos llega un string indicando el tipo de sándwich base. los mismos tienen un valor base
        diferente por cada selección:
            ● Pollo = $150
            ● Carne = $200
            ● Vegetariano (verduras asadas) = $100
        Luego, el sistema les pregunta qué tipo de pan querrán, tienen para elegir entre otras
        3 opciones, por lo que recibiremos también otro string con el tipo de pan deseado:
            ● Blanco c/orégano y parmesano = $50
            ● Negro c/avena = $60
            ● Sin gluten = $75
        Para finalizar, el sistema avanza preguntando al cliente si quiere los siguientes
        adicionales:
            ● Queso = $20
            ● Tomate = $15
            ● Lechuga = $10
            ● Cebolla = $15
            ● Mayonesa = $5
            ● Mostaza = $5
        Cada uno de estos adicionales están representados por booleanos, es decir true o false,
        dependiendo de si aceptan o no cada uno de los adicionales (nos llegan un total de 6
        valores booleanos, uno por cada adicional).
        Nuestro trabajo es crear una función que reciba estos 8 parámetros (un string para el
        sandwich base, uno para el pan, y los 6 booleanos de los adicionales). La función deberá
        consultar primero que tipo de sándwich base se seleccionó, luego el tipo de pan, y por
        último deberá verificar que adicionales se seleccionaron. Por último deberá retornar el
        valor numérico del total a pagar del cliente.
*/

function crearSandwich(sandwichBase, tipoDePan, queso, tomate, lechuga, cebolla, mayonesa, mostaza) {
    let total = 0;

    if (sandwichBase === "pollo") {
        total += 150;
    } else if (sandwichBase === "carne") {
        total += 200;
    } else if (sandwichBase === "vegetariano") {
        total += 100;
    } else {
        return "Por favor, ingrese un tipo de sandwich válido.";
    }

    if (tipoDePan === "blanco") {
        total += 50;
    } else if (tipoDePan === "negro") {
        total += 60;
    } else if (tipoDePan === "sin gluten") {
        total += 75;
    } else {
        return "Por favor, ingrese un tipo de pan válido.";
    }

    if (queso) {
        total += 20;
    }

    if (tomate) {
        total += 15;
    }

    if (lechuga) {
        total += 10;
    }

    if (cebolla) {
        total += 15;
    }

    if (mayonesa) {
        total += 5;
    }

    if (mostaza) {
        total += 5;
    }

    return "El total a pagar es de: $" + total;
}

console.log(crearSandwich("pollo", "blanco", true, false, true, true, false, true));