/*
    CONSIGNA:
    Ejercicios de For
    ● Hacer un código que nos muestre los números del 0 al 10.

    Vamos a complicar los ejercicios.
    ● Realizar un ejercicio en el cual se visualice una cuenta de 1 a 10, y a la vez, una
      cuenta inversa de 10 a 1.
    ● Realizar un ejercicio en el cual se visualicen los números primos del 1 al 50. (a partir del 11)
*/


function contar() {
    for (let i = 0; i <= 10; i++) {
        console.log(i);
    }
}


function contarYDescontar() {
    for (let i = 1; i <= 10; i++) {
        let contando    = "Contando: " + i;
        let descontando = "\tDescontando: " + (11-i);

        console.log(contando, descontando);
    }
}


// Numero primos: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43 y 47.
function determinarNumerosPrimos() {
    let limite = 50;
    for (let numero = 11; numero < limite; numero++) {
        let comprobacion = true;

        for (let divisor = 2; divisor < numero; divisor++) {
            if (numero % divisor === 0) {
                comprobacion = false;
                break;
            }
        }

        if (comprobacion == true) console.log(numero);
    }
}


console.log("\n ============== Contador =============== ");
contar();

console.log("\n ======== Contador/Descontador ========= ");
contarYDescontar();

console.log("\n ===== Números Primos del 1 al 50 ====== ");
determinarNumerosPrimos();