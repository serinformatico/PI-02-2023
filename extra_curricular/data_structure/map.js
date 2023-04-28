/*
    ESTRUCTURA: _Map
        A diferencia del tipo Object, Map requiere que utilices los métodos set() y get()
        para definir y recuperar cualquier valor de par de llaves que quieras añadir a la
        estructura de datos. Tampoco se pueden sobrescribir las propiedades heredadas de
        la clase Map. Además, esta estructura de datos es iterable.

        Generalmente, se usa como diccionario de datos.
*/


// Declaración de Map
const miMapTelefonico = new Map();


// Inserción y definición de un elemento en Map (llave y valor)
miMapTelefonico.set("Ana", "2645778855");
miMapTelefonico.set("Pedro", "2616550021");
miMapTelefonico.set("Lorena", "2646640788");
miMapTelefonico.set("Carmen", "2646640788");


// Obtener el valor de un elemento por su llave
console.log(miMapTelefonico.get("Lorena"));


// Eliminar un elemento por su llave
miMapTelefonico.delete("Lorena");
console.log(miMapTelefonico.get("Lorena"));


// Recorrer los elementos del Map y obtener sus llaves/valores
for (let [llave, valor] of miMapTelefonico) {
    console.log("\t" + llave + ": " + valor);
}