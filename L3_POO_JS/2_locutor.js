class Locutor {
    constructor(nombre, verbo = "dice") {
        this.nombre = nombre;
        this.verbo = verbo;
    }

    dice(text) {
        console.log(this.nombre + " " + this.verbo + " '" + text + "'");
    }
}

class Feriante extends Locutor {
    constructor(nombre) {
        super(nombre, "grita");
    }

    dice(text) {
        super.dice(text.toUpperCase());
    }
}
//let janire = new Feriante("Mr.Crecepelo");
//janire.dice("Me lo quitan de la manos");
new Feriante("Mr.Crecepelo").dice("Me lo quitan de las manos");

/* 
  class Locutor {
  constructor(nombre, verbo = "dice") {
    this.nombre = nombre;
    this.verbo = verbo;
  }

  dice(text) {
    console.log(`${this.nombre} ${this.verbo} '${text}'`);
  }
}

class Feriante extends Locutor {
  constructor(nombre) {
    super(nombre, "grita");
  }

  dice(text) {
    super.dice(text.toUpperCase());
  }
}

new Feriante("Mr. Crecepelo").dice("Me lo quitan de las manos");

  */