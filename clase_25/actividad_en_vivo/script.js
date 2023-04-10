console.dir(document);

// Manipular Los Elementos del DOM:

    // Selección por etiqueta:
    const titulo = document.querySelector("h1"); 
    titulo.style.color = "red";

    // Selección por identificador:
    const texto1 = document.getElementById("texto1");
    texto1.innerHTML = "Hola Camada";
    texto1.style.color = "blue";
    console.log(texto1.innerHTML);

    // Selección por nombre:
    const texto2 = document.getElementsByName("texto2");
    texto2[0].value = "Bienvenidos";
    console.log(texto2[0].value);
