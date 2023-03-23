let numeros = [5, 10, 25, 58, 12];
let maximo = 0;
function encontrarMaximo(array) {
	for (let i = 0; i < array.length; i++) {
		if (maximo < array[i]) {
			maximo = array[i];
		}
	}
	return maximo;
}

console.log("Con ciclo for");
console.log(encontrarMaximo(numeros));

// con Math.max
console.log("Con Math.max");
console.log(Math.max(5, 10, 25, 58, 12));
