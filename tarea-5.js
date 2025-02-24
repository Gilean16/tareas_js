const libros_leidos = [];

function agregar_libro(titulo) {
    libros_leidos.push(titulo);
    console.log("Libro agregado: " + titulo);
}

function mostrar_leidos() {
    if (libros_leidos.length === 0) {
        console.log("Aún no has leído ningún libro.");
    } else {
        console.log("Libros leídos:");
        libros_leidos.forEach(function(libro, index) {
            console.log((index + 1) + ". " + libro);
        });
    }
}

class Libro {
    constructor(titulo, autor, anio, estado) {
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.estado = estado;
        this.capitulos = [];
    }

    describir_librito() {
        console.log("Libro titulado " + this.titulo + ", escrito por " + this.autor + " en el año " + this.anio + ", el estado es: " + this.estado + ".");
    }

    agregar_capitulito(capitulo) {
        this.capitulos.push(capitulo);
    }

    eliminar_capitulito(capitulo) {
        const indice = this.capitulos.indexOf(capitulo);
        if (indice !== -1) {
            this.capitulos.splice(indice, 1);
        }
    }
}


const libro1 = new Libro("Caballos Desbocados", "Yukio Mishima", 1963, "disponible");
libro1.describir_libroito();
libro1.agregar_capitulito("Capítulo 1");
libro1.agregar_capitulito("Capítulo 2");
libro1.eliminar_capitulito("Capítulo 2");
