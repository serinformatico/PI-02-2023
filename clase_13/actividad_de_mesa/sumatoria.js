/*
    CONSIGNA:
    Sumatoria

    Deberás crear una función llamada sumatoria que reciba un
    número como parámetro y que devuelva la sumatoria de todos
    sus números anteriores, incluso ese mismo. Por ejemplo:
        ● sumatoria(3) debe retornar 6 porque hace (1+2+3)
        ● sumatoria(8) debe retornar 36
*/


function sumatoria(numero) {
    let acumulador = 0;
    for (let i = 1; i <= numero; i++) {
        acumulador += i;
    }

    return acumulador;
}

console.log(sumatoria(8));
