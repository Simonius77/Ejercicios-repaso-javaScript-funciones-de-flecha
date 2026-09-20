/*Bloc 3 - Classes
Exercici 12 - Ascensor
Crea una classe anomenada Ascensor.

Quan es crea un ascensor, començarà a la planta 0.

Ha de tenir dos mètodes:

pujar() → puja una planta.
baixar() → baixa una planta.
L'ascensor no pot baixar mai per sota de la planta 0.*/

class Ascensor {
    constructor() {
        this.planta = 0;
    }
    //funcion para subir
    subir() {
        this.planta++;
    }
    //funcion para bajar
    bajar() {
        //control para que no baje por debajo de la planta 0
        if (this.planta > 0) {
            this.planta--;
        }
    }

}
//prueba de la clase
const ascensor = new Ascensor();
//subimos 3 plantas
ascensor.subir();
ascensor.subir();
ascensor.subir();
console.log(ascensor.planta);