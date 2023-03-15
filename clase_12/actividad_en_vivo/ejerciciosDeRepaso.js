
// Variables (durante el tiempo de ejecución puede cambiar su valor)
console.log("\n ===== Variables =====");
let a = 10;
let nombre = "Martha";
console.log(a, nombre);


// Constantes (durante el tiempo de ejecución NO puede cambiar su valor)
console.log("\n ===== Constantes =====");
const iva = 21.0;
console.log(iva);


// Operador += (también puede ser -= *= /=)
console.log("\n ===== Operador += =====");
let valor = 10;     // Valor vale 10
valor  = valor + 2; // Valor vale 12
valor += 2;         // Valor vale 14 (solo me evito re-escribir la palabra "valor")
console.log(valor);


// Arrays
const vector = [11, 22]; 
vector.push(15);   // Agrego el elemento al final del array
vector.push(20);   // Agrego el elemento al final del array
vector.unshift(5); // Agrego el elemento al principio del array
vector.pop();      // Elimino el último elemento del array


console.log("\n ===== Recorrido del vector + contandor + acumulador =====");
// vector = [ 5, 11, 22, 15 ]
let acumulador = 0;
let contador = 0;
for (let i = 0; i < vector.length; i++) {
    contador++; // Se incrementa en uno por cada iteración
    acumulador += vector[i]; // Suma el valor actual que tiene el acumulador + un nuevo valor

    // Determinar la paridad
    if (vector[i] % 2 == 0) {
        console.log(vector[i] + " es par");
    } else {
        console.log(vector[i] + " es impar");
    }
}


console.log("\n ===== Concatenación de arrays =====");
const array1 = [ 99, 44 , 77 ];
const array2 = [ 11, 22 ];
const arrayConcatenado = array1.concat(array2); 
console.log(arrayConcatenado);


// Objetos
console.log("\n ===== Objetos =====");
const estudiante1 = {
    nombre: "Juan",
    edad: 20,
    estudiar: function (materia) {
        return "está estudiando " + materia;
    }
};

const estudiante2 = {
    nombre: "Pablo",
    edad: 30,
    estudiar: function (materia) {
        return "está estudiando " + materia;
    }
};

const estudiante3 = {
    nombre: "Lorena",
    edad: 25,
    estudiar: function (materia) {
        return "está estudiando " + materia;
    }
};
console.log(estudiante1);
console.log(estudiante2);
console.log(estudiante3);
console.log("El estudiante 1, " + estudiante1.estudiar("Programación Imperativa"));


// Array de objetos
console.log("\n ===== Arrray de objetos =====");
const estudiantes = [estudiante2];
estudiantes.push(estudiante3);
estudiantes.unshift(estudiante1);
console.log(estudiantes);