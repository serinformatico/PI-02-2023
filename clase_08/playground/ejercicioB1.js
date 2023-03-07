/*
    EJERCICIO 1:
    Para este ejercicio te damos la función tablaDeMultiplicar ya definida, la cual
    recibe un número como parámetro. Queremos que al ejecutarse la función muestre
    por consola la tabla de multiplicar del 1 al 10 del número que reciba.

    Por ejemplo si el número que pasamos por parámetro es 5, la función deberá imprimir:
    5 * 1 = 5 ... 5 * 10 = 50
*/

function tablaDeMultiplicar(numero) {
    let i = 1;
    while (i <= 10) {
        console.log(5 + ' * ' + i + ' = ' + i*numero);
        i++;
    }
}

tablaDeMultiplicar(5);