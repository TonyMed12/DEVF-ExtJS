/* Problema: Seguimiento de Libros
Crea un sistema muy sencillo para hacer seguimiento de los libros que has leído.

Instrucciones para resolver el problema:
Define una función `agregarLibro(titulo)`, que añada un libro a un array llamado `librosLeidos`.
Define una función `mostrarLibrosLeidos()`, que imprima todos los libros que has leído. */

let librosLeidos = [];

function agregarLibro(titulo) {
    librosLeidos.push(titulo);
}

function mostrarLibrosLeidos() { 
    console.log("Libros leídos:");
    for(let i = 0; i < librosLeidos.length; i++){
        console.log(librosLeidos[i]);
    } 
}

agregarLibro("Habitos Atómicos");
agregarLibro("Te vas a morir y todavia no comienzas a vivir");
agregarLibro("Deja de ser tu");
agregarLibro("La inteligencia emocional");
agregarLibro("La meditación");

mostrarLibrosLeidos();