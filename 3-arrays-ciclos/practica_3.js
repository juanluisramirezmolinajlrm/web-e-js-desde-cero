// Declarar un arreglo con distintos tipos de frutas
let frutas = ["manzana", "plátano", "manzana", "naranja", "plátano", "uva", "manzana", "naranja", "uva", "manzana"];

// Crear un objeto para almacenar la cantidad de cada fruta
let contadorFrutas = {};

// Recorrer el arreglo y contar cada fruta
for (let fruta of frutas) {
    if (contadorFrutas[fruta]) {
        contadorFrutas[fruta]++;
    } else {
        contadorFrutas[fruta] = 1;
    }
}

// Imprimir el resultado en consola
console.log("Cantidad de cada tipo de fruta:", contadorFrutas);
