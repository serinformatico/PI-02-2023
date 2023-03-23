/*
    EJERCICIO 2:
    Ahora bien. dado los siguientes numeros:
        let num1 = 13;
        let num2 = 1663;
        let num3 = 3363;

    Ahora vamos a refactorizar nuestro código con la siguiente
    indicación.
    Dados 4 números reales (enteros, decimales, positivos y/o
    negativos), ¿cómo podemos identificar el número mayor y
    mostrarlo por la consola? Modifiquemos el código para que
    ahora acepte 4 números.

*/

let num1 = 13;
let num2 = 1663;
let num3 = 3363;
let num4 = 7500;

if (num1 >= num2 && num1 >= num3 && num1 >= num4) {
    console.log(num1);
} else if (num2 >= num1 && num2 >= num3 && num2 >= num4) {
    console.log(num2);
} else if (num3 >= num1 && num3 >= num2 && num3 >= num4)  {
    console.log(num3);
} else if (num4 >= num1 && num4 >= num2 && num4 >= num3)  {
    console.log(num4);
}