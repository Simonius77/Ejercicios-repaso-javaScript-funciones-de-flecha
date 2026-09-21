/*Exercici 13 - Personatge de videojoc
Crea una classe anomenada Personatge.
Ha de tenir:
nom
vida, que començarà sempre a 100
Afegeix els mètodes:
rebreDany(quantitat)
curar(quantitat)
La vida no pot baixar de 0 ni superar 100.*/

class Personatge {
    constructor(nombre) {
        this.nombre = nombre;
        this.vida = 100;
    }

    dano(cantidad) {
        this.vida -= cantidad;
        if (this.vida < 0) {
            this.vida = 0;
        }
    }

    curar(cantidad) {
        this.vida += cantidad;
        if (this.vida > 100) {
            this.vida = 100;
        }
    }
}