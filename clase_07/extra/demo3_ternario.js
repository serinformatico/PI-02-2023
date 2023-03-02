/*
    Operador condicional (ternario)
    El operador condicional (ternario) es el único operador que tiene
    tres operandos. Este operador se usa con frecuencia como atajo para
    la instrucción if.

    Un operador condicional (ternario) tiene el siguiente aspecto:

    condición ? expresión_1 : expresión_2;

    Nota: Se puede decir que: true equivale a 1 y false a 0.
*/

let a = 10;
let b = 8;
let esMayorQue = a > b ? true : false;


let variable = false;
let esArgentino = variable == true ? "Si, es Argentino" : "No, no es Argentino";


let edad = 18;
let esAdulto = edad >= 18 ? "Si, es mayor de edad" : "No, es menor de edad";


console.log(esMayorQue);
console.log(esArgentino);
console.log(esAdulto);