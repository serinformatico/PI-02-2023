/*
    CONSIGNA:
    Usando la estructura switch, crea un programa en el que, si un usuario ingresa "casa",
    "perro", "pelota", "árbol" o "genio", nos devuelva la misma palabra traducida al idioma
    inglés.

    En caso de que la palabra sea distinta a la esperada, mostrarle un mensaje que le informe
    que la palabra ingresada es incorrecta.
*/


// 1° Alternativa de declaración: uso de variable retornada
function traducirPalabra1(palabra) {
    let palabraTraducida = "La palabra ingresada es incorrecta";

    switch (palabra) {
        case "casa":
            palabraTraducida = "house";
            break;
        case "perro":
            palabraTraducida = "dog";
            break;
        case "arbol":
            palabraTraducida = "tree";
            break;
        case "pelota":
            palabraTraducida = "ball";
            break;
        case "genio":
            palabraTraducida = "genie";
            break;
    }

    return palabraTraducida;
}

// 2° Alternativa de declaración: uso de multiples retornos
function traducirPalabra2(palabra) {
    switch (palabra) {
        case "casa":
            return "house";
        case "perro":
            return "dog";
        case "arbol":
            return "tree";
        case "pelota":
            return "ball";
        case "genio":
            return "genie";
        default:
            return "La palabra ingresada es incorrecta";
    }
}

console.log(traducirPalabra1("perro"));
console.log(traducirPalabra2("perro"));