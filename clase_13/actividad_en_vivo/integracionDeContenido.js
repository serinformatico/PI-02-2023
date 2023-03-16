/*
    CONSIGNA:
    Integración de contenido:

    1. Crear un array llamado misMascotas.
    2. Dentro de este array crearemos un objeto para cada mascota. Cada
       objeto deberá tener: 
        ● nombre
        ● raza
        ● edad 
        ● sonido
        ● un método que nos retorne ese sonido 2 veces
        -> Cuando esté listo, verificar en consola.
    3. Deberemos crear una función que se llame aumentarEdad que aumente
       la edad de cada animal en 1.
    4. Ahora debemos crear otra función, que se llame  aumentarEdad2, que
       va a hacer un trabajo más fino:
        ● Si la mascota tiene menos de 6 años, debe aumentar su edad en 1
        ● Si la mascota tiene entre 6 y 10 años, debe aumentar su edad en 2
        ● Si la mascota tiene más de 10 años, deberá sumarle la mitad de
          su edad
    5. Ahora crearemos una función que va a generar un identificador (ID)
    en cada objeto, que será secuencial y que empezará en 1.
    6. Por último eliminaremos la propiedad "raza", ya que para nosotros
       todos los animalitos son iguales
*/


const misMascotas = [
    {
        nombre: 'Tito',
        raza: 'Callejero',
        edad: 12,
        sonido: 'miau',
        sonidoDeMascota: function () {
            return `${this.sonido} ${this.sonido}`;
        }
    },
    {
        nombre: 'Betty',
        raza: 'Callejero',
        edad: 5,
        sonido: 'guau',
        sonidoDeMascota: function () {
            return `${this.sonido} ${this.sonido}`;
        }
    },
    {
        nombre: 'Lola',
        raza: 'Callejero',
        edad: 7,
        sonido: 'guau',
        sonidoDeMascota: function () {
            return `${this.sonido} ${this.sonido}`;
        }
    }
];
console.log("\n ===== Array de Objetos =====");
console.log(misMascotas);
console.log("Sonido de la mascota: " + misMascotas[0].sonidoDeMascota());


function aumentarEdad(mascotas) {
    for (let i = 0; i < mascotas.length; i++) {
        mascotas[i].edad++;
    }

    return mascotas;
}
console.log("\n ===== Retorno de aumentarEdad =====");
console.log(aumentarEdad(misMascotas));


function aumentarEdad2(mascotas) {
    for (let i = 0; i < mascotas.length; i++) {
        if (mascotas[i].edad < 6) {
            mascotas[i].edad++;
        } else if (mascotas[i].edad >= 6 && mascotas[i].edad <= 10) {
            mascotas[i].edad += 2;
        } else {
            let mitadDeLaEdad = mascotas[i].edad / 2;
            mascotas[i].edad += mitadDeLaEdad;
        }
    }

    return mascotas;
}
console.log("\n ===== Retorno de aumentarEdad2 =====");
console.log(aumentarEdad2(misMascotas));


function agregarId(mascotas) {
    for (let i = 0; i < mascotas.length; i++) {
        mascotas[i].identificador = i+1;
    }

    return mascotas;
}
console.log("\n ===== Retorno de agregarId =====");
console.log(agregarId(misMascotas));


function eliminarPropiedad(mascotas, propiedad) {
    for (let i = 0; i < mascotas.length; i++) {
        delete mascotas[i][propiedad];
    }

    return mascotas;
}
console.log("\n ===== Retorno de eliminarPropiedad =====");
console.log(eliminarPropiedad(misMascotas, "raza"));