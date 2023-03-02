/*
    CONSIGNA:
    Valoración de Películas
    Usando la estructura switch, pedile al usuario que valore la película que acaba de ver en:
        ● Muy Mala.
        ● Mala.
        ● Mediocre.
        ● Buena.
        ● Muy buena.

    Acompaña cada valoración con un mensaje que indique si te lamentas o te alegras por su valoración.
    Por ejemplo, "Calificaste la película como Muy Mala. Lo lamentamos mucho.".

    En caso de que ingresara un valor distinto, mostrale el mensaje: "Ingresaste un valor inválido".
    Cuando el usuario haya valorado la película, agradecele su visita.
*/

function valorPelicula(valoracion) {
    let mensajeDeRetornoLamento = "Calificaste a la película como " + valoracion + ", lo sentimos mucho. Gracias por habernos visitado, que tengas un buen dia.";
    let mensajeDeRetornoAlegre  = "Calificaste a la película como " + valoracion + ", nos alegra que la hayas disfrutado. Gracias por habernos visitado, que tengas un buen dia.";
    switch (valoracion) {
        case "mala":
            return mensajeDeRetornoLamento;
        case "muy mala":
            return mensajeDeRetornoLamento;
        case "mediocre":
            return mensajeDeRetornoLamento;
        case "buena":
            return mensajeDeRetornoAlegre;
        case "muy buena":
            return mensajeDeRetornoAlegre;
        default:
            return "Ingresaste una valoración inválida";
    }
}

console.log(valorPelicula("mala"));