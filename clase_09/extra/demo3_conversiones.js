/*
    Conversiones de tipos de datos
*/

let numeroEntero1 = Number.parseInt(15.77);
console.log(numeroEntero1, typeof numeroEntero1); // 15 number

let numeroEntero2 = Number.parseInt("10.00");
console.log(numeroEntero2, typeof numeroEntero2); // 10 number

let numeroEntero3 = Number.parseInt("40 years");
console.log(numeroEntero3, typeof numeroEntero3); // 40 number

let numeroDecimal1 = Number.parseFloat(17);
console.log(numeroDecimal1, typeof numeroDecimal1); // 17 number

let numeroDecimal2 = Number.parseFloat("18.33");
console.log(numeroDecimal2, typeof numeroDecimal2); // 18.33 number

let numeroDecimal3 = 875.15788;
let numeroStringCon2Decimales = numeroDecimal3.toFixed(2);
console.log(numeroStringCon2Decimales, typeof numeroStringCon2Decimales); // 875.16 string

let numero1 = 1578;
let numeroString1 = numero1.toString();
console.log(numeroString1, typeof numeroString1); // "1578" string