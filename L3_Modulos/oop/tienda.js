import { Libro } from "./libro.js";
import { Disco } from "./disco.js";

var libro = new Libro("Dublinés", "Alfonso Zapico", 18);
var libro1 = new Libro("El arte de volar", "Antonio Altarriba y Kim", 20.90);
var disco = new Disco("Próxima estación: Esperanza", "Manu Chao", 15);

export var tienda = [];
tienda.push(libro, libro1, disco);

window.onload = function () {
    var imprimirListado = document.getElementById("listado");
    for (producto in tienda) {
        var capa = document.createElement("div");
        capa.innerHTML = tienda[producto].mostrar();
        imprimirListado.appendChild(capa);
    }
}


