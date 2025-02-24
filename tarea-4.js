const libros_leidos = [];

function agregarLibro(titulo) {
    libros_leidos.push(titulo);
    console.log("Libro agregado: " + titulo);
}

//Funsion

function mostrarLibrosLeidos() {
    if (libros_leidos.length === 0) {
        console.log("Aún no has ingresado ningún libro");
    } else {
        console.log("Libros leídos:");
        libros_leidos.forEach(function(libro, index) {
            console.log((index + 1) + " . " + libro);});
    }
}


agregarLibro("La odisea");

agregarLibro("Marco Polo");

mostrarLibrosLeidos();

