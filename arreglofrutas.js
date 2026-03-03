/*Instrucciones para resolver el problema:
Declara un arreglo llamado frutas con varios tipos de frutas.
Crea un objeto para almacenar la cantidad de cada tipo de fruta.
Usa un ciclo for/while para recorrer el arreglo y contar las frutas.
Imprime en la consola la cantidad de cada tipo de fruta.
Opcional: intenta implementar la solución con el otro ciclo también (for/while).*/

let frutas = ["manzana", "banana", "naranja", "manzana", "pera", "banana", "naranja", "manzana"];
let conteoFrutas = {};

for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];
    if (conteoFrutas[fruta]) {
        conteoFrutas[fruta]++;
    } else {
        conteoFrutas[fruta] = 1;
    }
}

console.log("Conteo de frutas:");
for (let fruta in conteoFrutas) {
    console.log(fruta + ": " + conteoFrutas[fruta]);
}

// Implementación con while
let conteoFrutasWhile = {};
let index = 0;
while (index < frutas.length) {
    let fruta = frutas[index];
    if (conteoFrutasWhile[fruta]) {
        conteoFrutasWhile[fruta]++;
    } else {
        conteoFrutasWhile[fruta] = 1;
    }
    index++;
}

console.log("Conteo de frutas (while):");
for (let fruta in conteoFrutasWhile) {
    console.log(fruta + ": " + conteoFrutasWhile[fruta]);
}   
