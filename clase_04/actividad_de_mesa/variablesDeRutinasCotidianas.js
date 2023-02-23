/*
    CONSIGNA:
    Ahora les toca pensar a ustedes. Piensen dos situaciones de la vida cotidiana e
    identifiquen las variables que conllevan. Para luego, todas esas variables que
    pensaron con sus respectivos valores, deberán escribirlas en un archivo .js que
    esté correctamente guardado en la carpeta de trabajo que hayan armado (o deberán armar una).
*/

let nombre             = "Leandro";
let edad               = 27;
let alturaEnCm         = 173;
let viveEnDepartamento = false;
let pisoDepartamento   = null;

let cena               = "Empanadas";
let faltanIngredientes = true;
let tapasParaEmpanadas = 12;
let carnePicadaEnKg    = 0.5;
let cebollasEnKg       = 2.0;
let ajiMorronEnKg      = 0;
let zanahoriaEnKg      = 0;

let nombreDelSuperMercado = "Super Tienda DH";
let estaAbierto           = true;
let estaCerca             = true;
let requieroDeUnVehiculo  = false;

let llevoEfectivo         = false;
let llevoTarjetaDeCredito = true;
let montoAPagarEnPesos    = 1850.0;

console.log(nombre);
console.log(edad);
console.log(alturaEnCm);
console.log(viveEnDepartamento);
console.log(pisoDepartamento);
console.log(cena);
console.log(faltanIngredientes);
console.log(tapasParaEmpanadas);
console.log(carnePicadaEnKg);
console.log(cebollasEnKg);
console.log(ajiMorronEnKg);
console.log(zanahoriaEnKg);
console.log(nombreDelSuperMercado);
console.log(estaAbierto);
console.log(estaCerca);
console.log(requieroDeUnVehiculo);
console.log(llevoEfectivo);
console.log(llevoTarjetaDeCredito);
console.log(montoAPagarEnPesos);


/*
    CONSIGNA EXTRA:
    Supongamos que estás acomodando tu casa y guardaste las remeras en el cajón de los
    pantalones ¡Un horror!. ¿Cómo haríamos para invertirlos?
*/

let cajonRemeras     = "pantalones";
let cajonPantalones  = "remeras";
let variableauxiliar = cajonRemeras;

cajonRemeras    = cajonPantalones;
cajonPantalones = variableauxiliar;

console.log("El cajón de remeras tiene " + cajonRemeras);
console.log("El cajón de pantalones tiene " + cajonPantalones);
