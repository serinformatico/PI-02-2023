/*
    CONSIGNA:
        Reconocer variables en cada problema, trasladarlas al entorno de trabajo
        y realizar operaciones.
        En la imagen del video juego de Mario Bros ¿Qué variables lo componen?
*/

// MARIO BROS
    // 1. Variable de puntaje
    let puntaje = 0;

    // 2. Cantidad de monedas
    let cantidadDeMonedas = 0;

    // 3. Número de nivel
    let numeroDeNivel = 1;

    // 4. Número de mundo
    let numeroDeMundo = 1;

    // 5. Tiempo restante para terminar el nivel.
    let tiempoRestante = 913;

    // 6. Aunque en esta pantalla no la veamos, también tenemos una variable que
    // indica la cantidad de vidas restantes.
    let vidasRestantes = 2;

    // 7. Cada bloque misterioso tiene una cantidad de monedas, esa cantidad está
    // guardada en una variable. ¿Qué le pasará a la variable cada vez que Mario
    // golpee el bloque?
    let estaGrande = false;

    // 8. Si hilamos fino, podríamos pensar que el estado de Mario puede almacenarse
    // en una variable. ¿Es grande Mario? En el caso de que la variable esté en
    // "Verdadero" (porque tocó un hongo) cuando toque a algún enemigo no pierde
    // vida, sino que cambia su estado a pequeño.
    let monedasDeBloqueMisterioro = 25;

    console.log(puntaje);                   // Imprime el valor 0
    console.log(cantidadDeMonedas);         // Imprime el valor 0
    console.log(numeroDeNivel);             // Imprime el valor 1
    console.log(numeroDeMundo);             // Imprime el valor 1
    console.log(tiempoRestante);            // Imprime el valor 913
    console.log(vidasRestantes);            // Imprime el valor 2
    console.log(estaGrande);                // Imprime el valor false
    console.log(monedasDeBloqueMisterioro); // Imprime el valor 25

    // 6. Imprimir en consola la comparación de nuestra variable cantidad de vidas restante con el valor 0.
    console.log(vidasRestantes == 0);       // Imprime el valor false

    // 7. Imprimir en consola la comparación de nuestra variable cantidad de vidas restante con el valor 0.
    vidasRestantes--;
    console.log(vidasRestantes);            // Imprime el valor 1
