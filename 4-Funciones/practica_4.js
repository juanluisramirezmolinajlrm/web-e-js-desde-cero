// Arreglo para almacenar los libros leídos
const librosLeidos = [];

// Función para agregar un libro al arreglo
function agregarLibro(titulo) {
    librosLeidos.push(titulo);
    console.log(`Libro agregado: ${titulo}`);
}

// Función para mostrar todos los libros leídos
function mostrarLibrosLeidos() {
    if (librosLeidos.length === 0) {
        console.log("Aún no has leído ningún libro.");
    } else {
        console.log("Libros leídos:");
        librosLeidos.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro}`);
        });
    }
}

// Ejemplo de uso
agregarLibro("1984");
agregarLibro("Cien años de soledad");
mostrarLibrosLeidos();
