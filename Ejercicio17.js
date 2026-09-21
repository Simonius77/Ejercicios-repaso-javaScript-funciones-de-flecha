/*Exercici 17 - Termòstat
Crea una classe anomenada Termostat.

Quan es crea, la temperatura inicial serà de 20 ºC.

Afegeix dos mètodes:

pujar()
baixar()
Cada vegada que s'executa un mètode, la temperatura canvia un grau.

La temperatura mínima serà de 15 ºC i la màxima de 30 ºC.*/

class Termostato {
    constructor() {
        this.temperatura = 20;
    }
    //metodo subir que aumenta la temperatura en 1 grado si es menor a 30
    Subir() {
        if (this.temperatura < 30) {
            this.temperatura++;
        }
    }
    //metodo bajar que disminuye la temperatura en 1 grado si es mayor a 15
    Bajar() {
        if (this.temperatura > 15) {
            this.temperatura--;
        }
    }
}   
//Ejemplo de uso creando un termostato y subiendo la temperatura 5 grados
const termostato = new Termostato();
termostato.Subir();
termostato.Subir();
termostato.Subir();
termostato.Subir();
termostato.Subir();
console.log(`Temperatura actual: ${termostato.temperatura} ºC`);