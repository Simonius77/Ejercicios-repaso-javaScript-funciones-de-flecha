/*Exercici 19 - Què passarà?
Observa el programa:

class Comptador {

    constructor() {
        this.valor = 0;
    }

    incrementar() {
        this.valor = this.valor + 1;
    }

}

const comptador = new Comptador();

comptador.incrementar();
comptador.incrementar();
comptador.incrementar();

console.log(comptador.valor);
Sense executar-lo, indica quin valor mostrarà per consola.

Després comprova la teva resposta.*/
//El valor que mostrara por consola sera 3, ya que se llama al metodo incrementar() tres veces, y cada vez que se llama al metodo se incrementa el valor en 1.

class Contador {
    constructor() {
        this.valor = 0;
    }   
    incrementar() {
        this.valor = this.valor + 1;
    }   
}
const contador = new Contador();
contador.incrementar();
contador.incrementar();
contador.incrementar();     
console.log(contador.valor);