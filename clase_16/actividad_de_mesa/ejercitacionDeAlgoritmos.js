/*
    CONSIGNA:
    Ejercitación de algoritmos

    1) Escriban una función que reciba dos parámetros: un array
    y un índice. La función deberá de mostrar por consola el valor
    del elemento según el índice dado. Por ejemplo, dada el siguiente
    array e índice, la función imprimirá '6'. 
        let array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
        let index = 1;
    Visiten este sandbox para escribir su código.
    https://codesandbox.io/s/busqueda-en-array-025me?file=/src/index.js

    2) Escribir un programa que muestre en pantalla los números del
    1 al 100, sustituyendo los múltiplos de 3 por la palabra “fizz”,
    los múltiplos de 5 por “buzz” y los múltiplos de ambos, es decir,
    los múltiplos de 3 y 5 —o de 15—, por la palabra “fizzbuzz”. 
    Visiten este sandbox para realizar el ejercicio ahí.
    https://codesandbox.io/s/fizzbuzz-3e9uc?file=/src/index.js 
    Recuerden desplegar la consola para ver sus resultados, y utilicen
    la función console.log para mostrar datos en la misma. Pista: si se
    te complica mucho identificar si un número es múltiplo de 3 o 5,
    piensa esto: 
    ¿sabes identificar si un número es múltiplo de 2, es decir, par?
    ¡Misma lógica!
*/

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      } else if (i % 3 === 0) {
        console.log("Fizz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
  }
  fizzBuzz();
  
    let array = [
    3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99,
    100,
  ];
  var index = 1;
  function imprimirIndice(arr, indice) {
    console.log(arr[indice]);
  }
  imprimirIndice(array, index);
  
  

  function diasDelMes(mesNum) {
    switch (mesNum) {
      case 1:
        return `Enero(${mesNum}) tiene 31 dias`;
      case 2:
        return `Febrero(${mesNum}) tiene 28 dias`;
      case 3:
        return `Marzo(${mesNum}) tiene 31 dias`;
      case 4:
        return `Abril(${mesNum}) tiene 30 dias`;
      case 5:
        return `Mayo(${mesNum}) tiene 31 dias`;
      case 6:
        return `Junio(${mesNum}) tiene 30 dias`;
      case 7:
        return `Julio(${mesNum}) tiene 31 dias`;
      case 8:
        return `Agosto(${mesNum}) tiene 31 dias`;
      case 9:
        return `Septiembre(${mesNum}) tiene 30 dias`;
      case 10:
        return `Octubre(${mesNum}) tiene 31 dias`;
      case 11:
        return `Noviembre(${mesNum}) tiene 30 dias`;
      case 12:
        return `Diciembre(${mesNum}) tiene 31 dias`;
  
  
      default:
        return `Por favor, ingrese un numero de mes valido. (1 a 12. numero ingresado: ${mesNum})`;
    }
  }
  console.log(diasDelMes(1));
  console.log(diasDelMes(11));
  console.log(diasDelMes(111));
  

  function reverse(number) {
    return Number(number.toString().split("").reverse().join(""));
  }
  
  
  console.log(reverse(12345));
  
  const numeros = [
    3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100,
  ];
  function buscarRepetidos(array) {
   const unicos = [];
   const repetidos = [];
   for (let i = 0; i < array.length; i++) {
     if (!unicos.includes(array[i])) {
       unicos.push(array[i]);
     } else if (repetidos.includes(array[i])) {
       unicos.push(array[i]);
     } else {
       repetidos.push(array[i]);
     }
   }
   return repetidos;
  }
  console.log(buscarRepetidos(numeros));