/*Minirepte 2 - Robot amb bateria
Crea una classe Robot.

Ha de tenir:

un nom;
100 punts de bateria.
Afegeix aquests mètodes:

avancar() → consumeix 10 punts de bateria.
carregar() → torna la bateria a 100.
estat() → mostra el nom i la bateria actual.
El robot no podrà avançar si la bateria és 0.*/

class Robot {   
    constructor(nombre) {
        this.nombre = nombre;
        this.bateria = 100;
    
    }
    avanzar() {
        if (this.bateria >= 10) {
            this.bateria -= 10;
        } else {
            console.log("No hi ha bateria suficient per avançar.");
        }
    }

    cargar() {
        this.bateria = 100;
    }

    estado() {
        console.log(`Nombre: ${this.nombre}, Batería: ${this.bateria}`);
    }
}

const robot = new Robot("R2-D2");
robot.estado();
robot.avanzar();
console.log(`Batería después de avanzar: ${robot.bateria}`);