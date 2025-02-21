const frutas = ["manzana", "pera", "manzana", "naranja", "grosella", "manzana", "uva", "naranja", "uva", "toronja"];

const conteoFrutitas = {};


for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];
    conteoFrutitas[fruta] = (conteoFrutitas[fruta] || 0) + 1;
 }

console.log("Conteo de frutas usando for:", conteoFrutitas);


const conteoFrutasWhile = {};
let index = 0;

while (index < frutas.length) {
    let fruta = frutas[index];
    conteoFrutasWhile[fruta] = (conteoFrutasWhile[fruta] || 0) + 1;
    index++;
}

console.log("Conteo de frutas usando while:", conteoFrutasWhile);
