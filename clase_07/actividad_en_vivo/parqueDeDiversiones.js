/*
    CONSIGNA:
    ¿Puede subir?

    En un parque de diversiones nos piden un programa para verificar si los pasajeros
    de la montaña rusa pueden subir al juego.

    1. Crear una función puedeSubir() que reciba dos parámetros: altura de la persona y
    si viene acompañada. Debe retornar un valor booleano (TRUE, FALSE) que indique si la
    persona puede subirse o no, basado en las siguientes condiciones:
        a. Debe medir más o igual de 1,40m y menos de 2 metros.
        b. Si mide menos de 1,40m hasta 1,20m, deberá venir acompañado.
        c. Si mide menos de 1,20m, no podrá subir ni acompañado.

    2. Modificar la función para impedir la subida al juego si la persona fue penalizada
    por no respetar las normas y reglas del juego.
*/


// 1° Alternativa de declaración: uso de variable retornada
function puedeSubir1(alturaDeLaPersona, vieneAcompaniada, personaPenalizada){
    let puedeSubir = false;

    if (personaPenalizada == false) {
        if(alturaDeLaPersona >= 1.40 && alturaDeLaPersona < 2.00 ){
            puedeSubir = true;
        }

        if(alturaDeLaPersona < 1.40 && alturaDeLaPersona >= 1.20 && vieneAcompaniada == true){
            puedeSubir = true;
        }
    }

    return puedeSubir;
}


// 2° Alternativa de declaración: uso de multiples retornos
function puedeSubir2(alturaDeLaPersona, vieneAcompaniada, personaPenalizada){
    if (personaPenalizada == false) {
        if(alturaDeLaPersona >= 1.40 && alturaDeLaPersona < 2.00 ){
            return true;
        }

        if(alturaDeLaPersona < 1.40 && alturaDeLaPersona >= 1.20 && vieneAcompaniada == true){
            return true;
        }
    }

    return false;
}


// 3° Alternativa de declaración: resolución dentro del mismo retorno
function puedeSubir3(alturaDeLaPersona, vieneAcompaniada, personaPenalizada){
    return (personaPenalizada == false && ( (alturaDeLaPersona >= 1.40 && alturaDeLaPersona < 2.00 ) || (alturaDeLaPersona < 1.40 && alturaDeLaPersona >= 1.20 && vieneAcompaniada == true)));
}


console.log(puedeSubir1(true, 1.35, false));
console.log(puedeSubir2(true, 1.35, false));
console.log(puedeSubir3(true, 1.35, false));