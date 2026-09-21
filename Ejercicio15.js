/*Exercici 15 - Bateria del mòbil
Crea una classe anomenada Mobil.
Ha de tenir:
una marca;
un nivell de bateria, que començarà a 100.
Afegeix un mètode:
utilitzar(minuts)
Per cada minut d'ús, la bateria baixa un 1%.
La bateria mai pot baixar de 0.*/
//clase Mobil con marca y nivel de bateria
class Mobil {
    constructor(marca) {
        this.marca = marca;
        this.nivelBateria = 100;
    }
//metodo utilizar que disminuye el nivel de bateria en un 1% por cada minuto de uso
    utilizar(minutos) {
        this.nivelBateria -= minutos;
        if (this.nivelBateria < 0) {
            this.nivelBateria = 0;
        }
    }
}   

const movil = new Mobil("Iphone");
//Ejemplo de uso pasando un valor de 30 minutos a la funcion utilizar
movil.utilizar(30);
console.log(`Nivel de bateria: ${movil.nivelBateria}%`);