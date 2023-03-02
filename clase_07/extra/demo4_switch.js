/*
    Declaración: switch
    Una declaración switch permite que un programa evalúe una expresión
    e intente hacer coincidir el valor de la expresión con una etiqueta
    case. Si la encuentra, el programa ejecuta la declaración asociada.

    La declaración break asociada con cada cláusula case es muy importante.
    Esta asegura que el programa salga de switch una vez que se ejecuta la
    instrucción coincidente, y luego continúa la ejecución en la declaración
    que sigue a switch. Si se omite break, el programa continúa la ejecución
    dentro de la instrucción switch y evaluará los siguientes case.

    Una declaración switch tiene el siguiente aspecto:

    switch (expresión) {
    case valor_1:
        Bloque de instrucciones
        break;
    case valor_2:
        Bloque de instrucciones
        break;
    default:
        Bloque de instrucciones
        break;
    }
*/

let opcion = 2;
switch (opcion) {
    case 1:
        console.log("Seleccionaste la opcion uno ¡Bien hecho!");
        break;
    case 2:
        console.log("Seleccionaste la opcion dos ¡Gran eleccion!");
        break;
    default:
        console.log("Seleccionaste una opcion inválida");
        break;
}


