/*
    CONSIGNA:
    Nos contactan desde un teatro donde hace falta determinar el
    ganador de un concurso de stand up que consta de 3 presentaciones
    por participante. Nos piden que armemos el programa que determine
    al ganador y —a continuación— nos explican el funcionamiento del
    concurso para que lo tengamos en cuenta a la hora de realizar
    nuestro programa:
        El público, máximo 100 personas, votó quién considera que
        estuvo mejor al terminar cada etapa. Por ejemplo, sube Alicia,
        se presenta y baja; sube Bob, se presenta y baja. Terminada la
        presentación, el público vota indicando quién cree que ganó esa
        tanda. Luego, continúa la siguiente tanda, igual que la primera.
        Y finalmente, una tercera.
    ¿Cómo representarías en una tabla tipo planilla de cálculos este problema?
    Como estos concursos se dan online, ocurren miles cada día. Nos llega a
    nuestro servidor la información por cada concurso en formato de arrays,
    uno por cada participante. Por lo tanto, los recibimos así:
        ● El array de Alicia es: alicia = [ 23, 82, 46 ];
        ● El array de Bob es: bob = [ 45, 8, 32];
    La tarea consiste en enfrentar estas votaciones comparando a[0] con b[0],
    a[1] con b[1] y a[2] con b[2].
        ● Si a[i] > b[i], entonces, Alicia recibe 1 punto.
        ● Si a[i] < b[i], entonces, Bob recibe 1 punto.
        ● Si a[i] === b[i], ninguna persona recibe un punto.
    Los puntos de comparación son los puntos totales que ganó una persona. ¡Ojo! No los
    votos, sino los puntos ganados en cada etapa.
*/

const alicia = [10, 80, 75];
const bob    = [90, 20, 25];

function encontrarGanador(a, b) {
    let puntosPrimerParticipante  = 0;
    let puntosSegundoParticipante = 0;

    for (let i = 0; i < a.length; i++) {
        puntosPrimerParticipante  += a[i] > b[i] ? 1 : 0;
        puntosSegundoParticipante += b[i] > a[i] ? 1 : 0;
    }

    if (puntosPrimerParticipante > puntosSegundoParticipante) {
        return "El ganador es el participante A";
    } else if (puntosSegundoParticipante > puntosPrimerParticipante) {
        return "El ganador es el participante B";
    } else {
        return "Hay empate";
    }
}

console.log(encontrarGanador(alicia, bob));
