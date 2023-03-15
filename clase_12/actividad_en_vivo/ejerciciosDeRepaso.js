
// Variables
console.log("\n ===== Variables =====");
let a = 10;
let nombre = "Sergio";
console.log(a, nombre);

// Constantes
console.log("\n ===== Constantes =====");
const iva = 21.0;
console.log(iva);

// Arrays
const vector = [11, 22]; 
vector.push(15);
vector.push(20);
vector.unshift(5);
//vector.pop();

// [ 5, 11, 22, 15, 20 ]
let acumulador = 0;
let contador = 0;
for (let i = 0; i < vector.length; i++) {
    contador++;
    acumulador += vector[i];

    // Paridad
    if (vector[i] % 2 == 0) {
        console.log(vector[i] + " es par");
    } else {
        console.log(vector[i] + " es impar");
    }
}

const a1 = [ 20, 30 , 40];
const a2 = [10, 15];
const nuevoArray = a1.concat(a2); 
console.log(nuevoArray);


let resultado = 10;
resultado = resultado / 2;
console.log(resultado);
console.log("Acumulador " + acumulador);
console.log("contador " + contador);


// Objetos
const estudiante1 = {
    nombre: "Juan",
    edad: 20
};

const estudiante2 = {
    nombre: "Pablo",
    edad: 30
};

const estudiante3 = {
    nombre: "Lorena",
    edad: 25
};

const estudiantesDeProgramacionImperativa = [];
estudiantesDeProgramacionImperativa.push(estudiante1);
estudiantesDeProgramacionImperativa.unshift(estudiante2);
estudiantesDeProgramacionImperativa.push(estudiante3);

let aux = estudiantesDeProgramacionImperativa[0];
console.log(aux);
estudiantesDeProgramacionImperativa[0] = estudiantesDeProgramacionImperativa[1];
console.log(estudiantesDeProgramacionImperativa[0]);
estudiantesDeProgramacionImperativa[1] = aux;
console.log(estudiantesDeProgramacionImperativa[1]);

estudiantesDeProgramacionImperativa.shift();
console.log(estudiantesDeProgramacionImperativa);


// Métodos propios de Strings


// Métodos propios de Arrays


// funciones declaradas


// funciones expresadas


// funciones de fecha


// Estructura if


// Estructura switch


// Estructura for incremental


// Estructura for decremental


// Estructura while