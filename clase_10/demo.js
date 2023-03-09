let x = 10;
let y = 5;
let z = 7;

//const numeros = [10, 15, 51, 7, 5];

//  i0-i1-i2 
// [10, 5, 7]
// numeros[1]

//numeros.push(15);
//numeros.unshift(2);


// for (let i = (longitud-1); i >= 0; i--) {
//     console.log(numeros[i]);    
// }

//let elementoEliminadoInicial = numeros.shift();
//let elementoEliminadoFinal = numeros.pop();



let saludo = "Buenas Noches, bienvenidos camada 2, chau";

let variable = saludo.replace("Noches", "Días");
// join crea un string a partir de un array
// split crea una array a partir de un string
const miArray = saludo.split(" ");
let otroString = miArray.join(" ");
console.log(otroString);
