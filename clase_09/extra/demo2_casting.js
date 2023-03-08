/*
    Casting de tipos de datos
*/


let castingDeStringABooleano = Boolean("true");
console.log(castingDeStringABooleano, typeof castingDeStringABooleano); // true boolean

let castingDeEnteroABooleano = Boolean(0);
console.log(castingDeEnteroABooleano, typeof castingDeEnteroABooleano); // false boolean

let castingDeStringANumerico = Number("12.52");
console.log(castingDeStringANumerico, typeof castingDeStringANumerico); // 12.52 number

let castingDeEnteroAString = String(500);
console.log(castingDeEnteroAString, typeof castingDeEnteroAString); // 500 string