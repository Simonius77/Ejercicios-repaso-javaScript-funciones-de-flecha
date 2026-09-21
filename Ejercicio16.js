/*Exercici 16 - Compte bancari
Crea una classe anomenada CompteBancari.
Ha de guardar:
el titular;
el saldo.
Afegeix dos mètodes:
ingressar(quantitat)
retirar(quantitat)
No es podrà retirar una quantitat superior al saldo disponible.
En aquest cas s'haurà de mostrar:
Saldo insuficient.*/

class CuentaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    ingresar(cantidad) {
        this.saldo += cantidad;
    }

    retirar(cantidad) {
        if (cantidad <= this.saldo) {
            this.saldo -= cantidad;
        } else {
            console.log("Saldo insuficiente.");
        }
    }
}
//Ejemplo de uso creando una cuenta bancaria con titular "Juan" y saldo inicial de 1000
const cuenta = new CuentaBancaria("Juan", 1000);
//Ejemplo de uso ingresando 500 a la cuenta
cuenta.ingresar(500);
console.log(`Saldo actual: ${cuenta.saldo}`);