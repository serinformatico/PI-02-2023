/*
    EJERCICIO 1:
    Dado los siguientes numeros:
        let num1 = 43;
        let num2 = 78;
        let num3 = 14;

    Crear un algoritmo que permita identificar el número mayor.
    Utilizar condicionales como el if, else, o else if. 
    Escribir el código en el siguiente sandbox, se puede hacer
    directamente aquí, o presionar el botón de “abrir sandbox”
    el cual redirige al sitio web de Code Sandbox con el mismo
    ejercicio.
    Les recomendamos esta opción para que puedan guardar automáticamente
    el ejercicio en sus cuentas de Sandbox.
*/

let num1 = 43;
let num2 = 78;
let num3 = 14;

if (num1 >= num2 && num1 >= num3) {
    console.log(num1);
} else if (num2 >= num1 && num2 >= num3) {
    console.log(num2);
} else if (num3 >= num1 && num3 >= num2) {
    console.log(num3);
}