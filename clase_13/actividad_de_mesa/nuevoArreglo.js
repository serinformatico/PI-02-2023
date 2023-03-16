/*
    CONSIGNA:
    Nuevo arreglo

    Deberás crear una función llamada nuevoArreglo que reciba
    un número como parámetro y que devuelva un nuevo arreglo
    con tantos elementos como el número que le hayas pasado.
    Por ejemplo:
        ● nuevoArreglo(5) debe retornar [1,2,3,4,5]
        ● nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]
*/


function nuevoArreglo(numero) {
    const numeros = [];

    for (let i = 1; i <= numero; i++) {
        numeros.push(i);
    }

    return numeros;
}

console.log(nuevoArreglo(5));
