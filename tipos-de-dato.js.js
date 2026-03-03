console.log("Tipos de datos en JavaScript:");
// Tipos de datos primitivos
let numero = 42; // Número
let texto = "Veinticinco";
let negativo = -666;
let booleano = true; // Booleano
let cero = 0;
let nulo = null; // Nulo
let indefinido; // Indefinido
let falso = false; // Falso
let simbolo = Symbol("simbolo"); // Símbolo

console.log(typeof numero); // number
console.log(typeof texto); // string
console.log(typeof negativo); // number
console.log(typeof booleano); // boolean
console.log(typeof cero); // number
console.log(typeof nulo); // object (esto es un error histórico de JavaScript)
console.log(typeof indefinido); // undefined
console.log(typeof falso); // boolean
console.log(typeof simbolo); // symbol