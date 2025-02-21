// Objeto libro con propiedades y métodos
const libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    anio: 1967,
    estado: "disponible",
    capitulos: [],

    describirLibro: function() {
        console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}. Estado: ${this.estado}.`);
    },

    agregarCapitulo: function(capitulo) {
        this.capitulos.push(capitulo);
        console.log(`Capítulo "${capitulo}" agregado.`);
    },

    eliminarCapitulo: function(capitulo) {
        const index = this.capitulos.indexOf(capitulo);
        if (index > -1) {
            this.capitulos.splice(index, 1);
            console.log(`Capítulo "${capitulo}" eliminado.`);
        } else {
            console.log("Capítulo no encontrado.");
        }
    }
};

// Ejemplo de uso
libro.describirLibro();
libro.agregarCapitulo("Capítulo 1: La historia comienza");
libro.agregarCapitulo("Capítulo 2: Un giro inesperado");
libro.eliminarCapitulo("Capítulo 1: La historia comienza");
