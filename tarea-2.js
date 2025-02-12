//Comparaciones y decisiones en JavaScript.

let calificacion = 99;

if (calificacion >= 90){
    console.log("Excelente");
}else if (calificacion <= 89 && calificacion >=75){
    console.log("Bien")
}else if (calificacion <= 74 && calificacion >=60){
    console.log("Suficiente");
}else if (calificacion <= 59){
    console.log("Reprobaste");
}