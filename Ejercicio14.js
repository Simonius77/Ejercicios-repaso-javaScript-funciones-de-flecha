/*Exercici 14 - Semàfor
Crea una classe anomenada Semafor.
El semàfor començarà en estat:
vermell
Afegeix un mètode canvia() que canviï l'estat seguint aquest ordre:
vermell → verd → groc → vermell*/

class Semaforo {
    constructor() {
        this.estado = "rojo";
    }

    cambiar() {
        switch (this.estado) {
            case "rojo":
                this.estado = "verde";
                break;
            case "verde":
                this.estado = "amarillo";
                break;
            case "amarillo":
                this.estado = "rojo";
                break;
        }
    }   
}
