/*Exercici 20 - Completa la classe
Completa les parts que falten:

class Bombeta {

    constructor() {
        this.encesa = false;
    }

    encendre() {
        // COMPLETA
    }

    apagar() {
        // COMPLETA
    }

}
El mètode encendre() ha de fer que encesa sigui true.

El mètode apagar() ha de fer que sigui false.*/

class Bombeta {
    constructor() {
        this.encesa = false;
    }   
    encendre() {
        this.encesa = true;
    }
    apagar() {
        this.encesa = false;
    }
}