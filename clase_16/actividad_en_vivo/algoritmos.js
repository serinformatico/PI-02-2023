let num1 = 20;
let num2 = 15;
let num3 = 12;
let num4 = 15;

// Algoritmo imperativo poco escalable y de baja legibilidad.
if (num1 >= num2 && num1 >= num3 && num1 >= num4) {
    console.log("Estructura if: El máximo es " + num1);
} else if (num2 >= num1 && num2 >= num3 && num2 >= num4) {
    console.log("Estructura if: El máximo es " + num2);
} else if (num3 >= num1 && num3 >= num2 && num3 >= num4) {
    console.log("Estructura if: El máximo es " + num3);
} else if (num4 >= num1 && num4 >= num2 && num4 >= num3) {
    console.log("Estructura if: El máximo es " + num4);
}

// Algoritmo imperativo de mayor escalabilidad y legibilidad.
const numeros = [num1, num2, num3, num4, 44];
let maximo = numeros[0];
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maximo) {
        maximo = numeros[i];
    }    
}
console.log("Estructura for: El máximo es " + maximo);


// Algoritmo declarativo
let maximoDeclarativo = Math.max(...numeros);
console.log(maximoDeclarativo);