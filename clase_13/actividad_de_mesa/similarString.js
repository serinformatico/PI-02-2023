/*
    CONSIGNA:
    Similar String.split()

    Deberás crear una función llamada split que reciba un string
    y simule el comportamiento de la función original. Si no estás
    seguro de cómo funciona, Google puede ayudarte.
    Importante: no podés usar el String.split(). Por ejemplo:
        ● split("hola") debe retornar ["h","o","l","a"]
        ● split("chau") debe retornar ["c","h","a","u"]
*/


function split(string){
    const stringConvertidoEnArray = [];
    
    for(let i = 0; i < string.length; i++){
        stringConvertidoEnArray.push(string[i]);
    }

    return stringConvertidoEnArray;
}

console.log(split("hola"));
