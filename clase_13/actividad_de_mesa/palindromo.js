/*
    CONSIGNA:
    Palíndromo

    Deberás crear una función llamada palindromo que indique si una
    palabra es palíndroma o no. Debe retornar "true" en caso de que
    lo sea, y "false" en caso de que no. Por ejemplo:
        ● palindromo("anilina") debe retornar true
        ● palindromo("Ana") debe retornar true
        ● palindromo("Enrique") debe retornar false
*/


function palindromo(palabra) {
    let palabraInversa = "";

    for (let i = (palabra.length-1); i >= 0; i--) {
        palabraInversa += palabra[i]
    }

    return palabra === palabraInversa ? true : false
}

console.log(palindromo("anilina"));