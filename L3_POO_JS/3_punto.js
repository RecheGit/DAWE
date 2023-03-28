function Punto(x,y) {
    this.x = x;
    this.y = y;
}

Punto.prototype.suma = function(punto) {
    var puntoFinal = new Punto();
    puntoFinal.x = punto.x + this.x;
    puntoFinal.y = punto.y + this.y;
    //return "Punto: {x: " + puntoFinal.x + ", y: " + puntoFinal.y + "}";
    return puntoFinal;
}

var punto = new Punto(1, 2).suma(new Punto(2, 1));
console.log(punto.x, punto.y); // Se espera: 3 3
console.log(punto instanceof Punto); // Se espera: true
console.log(punto.constructor.name); // Se espera Punto