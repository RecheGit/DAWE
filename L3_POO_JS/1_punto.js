class Punto {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    suma(punto) {
        var puntoFinal = new Punto;
        puntoFinal.x = punto.x + this.x;
        puntoFinal.y = punto.y + this.y;
        return "Punto: {x: " + puntoFinal.x + ", y: " + puntoFinal.y + "}";
    }
}
console.log(new Punto(1,2).suma(new Punto(2,1)));