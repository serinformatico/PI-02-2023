/*
    Declaración: if...else
    Utiliza la declaración if para ejecutar una instrucción si una condición
    lógica es true. Utiliza la cláusula opcional else para ejecutar una
    instrucción si la condición es false.

    Una declaración if...else tiene el siguiente aspecto:

    if (condición_1) {
        Bloque de instrucciones
    } else if (condición_2) {
        Bloque de instrucciones
    } else if (condición_n) {
        Bloque de instrucciones
    } else {
        Bloque de instrucciones
    }

    Nota: Se puede decir que: true equivale a 1 y false a 0.
*/


let esAdulto = true;


// Aquí si entra porque true es igual true.
if (esAdulto == true) {
    console.log("El valor de la variable esAdulto es igual a true");
}

// Aquí si entra porque true es igual 1.
if (esAdulto == 1) {
    console.log("El valor de la variable esAdulto es igual a 1");
}

// Aquí no entra porque true no es estrictamente igual 1.
if (esAdulto === 1) {
    console.log("El valor de la variable esAdulto es estrictamente igual a 1");
}

// Aquí si entra porque true es estrictamente igual true.
if (esAdulto === true) {
    console.log("El valor de la variable esAdulto es estrictamente igual a true");
}


if (esAdulto == true) {
    console.log("Es adulto");
} else {
    console.log("No es adulto");
}


let opcion = 2;


if (opcion == 1) {
    console.log("Opción 1");
} else if (opcion == 2) {
    console.log("Opción 2");
} else if (opcion == 3) {
    console.log("Opción 3");
} else {
    console.log("Opción inválida");
}


let esAlto = false;


if (esAdulto == true && esAlto == true) {
    console.log("Es adulto y es alto");
}

if (esAdulto == true && esAlto == false) {
    console.log("Es adulto y no es alto");
}

if (esAdulto == false && esAlto == true) {
    console.log("No es adulto pero es alto");
}

if (esAdulto == false && esAlto == false) {
    console.log("No es adulto ni es alto");
}


if (esAdulto == true && esAlto == true) {
    console.log("Es adulto y es alto");
} else if (esAdulto == true && esAlto == false) {
    console.log("Es adulto y no es alto");
}

if (esAdulto == false && esAlto == true) {
    console.log("No es adulto pero es alto");
}

if (esAdulto == false && esAlto == false) {
    console.log("No es adulto ni es alto");
}
