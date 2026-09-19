JavaScript - Exercicis de funcions, funcions de fletxa i classes
En aquests exercicis practicarem funcions, return, funcions de fletxa, classes, constructors, this i mètodes.

Bloc 1 - Funcions
Exercici 1 - Conversor de minuts
Crea una funció anomenada converteixMinuts que rebi una quantitat de minuts i mostri quantes hores i minuts representa.

Exemple:

converteixMinuts(135)

Resultat:
2 hores i 15 minuts
Pista: pots utilitzar la divisió i l'operador %.

Exercici 2 - Enviament gratuït
Una botiga cobra 4,95 € d'enviament si la compra és inferior a 50 €.

Crea una funció anomenada calculaCompra que rebi el preu de la compra i retorni el total que haurà de pagar el client.

Exemple 1:

calculaCompra(30)

Resultat:
34.95
Exemple 2:

calculaCompra(70)

Resultat:
70
Exercici 3 - Què mostrarà?
Observa el següent codi:

function calcula(a, b) {
    const resultat = a * 2 + b;
    return resultat;
}

const valor = calcula(4, 3);

console.log(valor);
Sense executar-lo, escriu quin valor creus que mostrarà per consola.

Després executa el programa i comprova si la teva resposta era correcta.

Exercici 4 - Troba l'error
Aquest programa hauria de calcular el quadrat d'un número, però no funciona correctament:

function quadrat(numero) {
    numero * numero;
}

const resultat = quadrat(5);

console.log(resultat);
Troba l'error i modifica la funció perquè el resultat sigui:

25
Exercici 5 - Detector de temperatura
Crea una funció anomenada estatTemperatura que rebi una temperatura.

Ha de retornar:

"Fa fred" si és inferior a 10 graus.
"Temperatura agradable" si està entre 10 i 25 graus.
"Fa calor" si és superior a 25 graus.
Exemple:

estatTemperatura(28)

Resultat:
Fa calor
Exercici 6 - Preu d'un aparcament
Un aparcament cobra 2 € per hora.

Crea una funció que rebi el nombre d'hores que ha estat aparcat un vehicle i retorni el preu total.

Si el vehicle ha estat aparcat més de 5 hores, el preu màxim serà de 10 €.

Exemple:

3 hores → 6 €
8 hores → 10 €


Bloc 2 - Funcions de fletxa
Exercici 7 - Transforma la funció
Transforma aquesta funció normal en una funció de fletxa:

function triple(numero) {
    return numero * 3;
}
Comprova després que:

triple(4)
retorna:

12
Exercici 8 - Funció de fletxa en una sola línia
Crea una funció de fletxa anomenada esParell.

Ha de rebre un número i retornar true si és parell o false si és senar.

Exemple:

esParell(8) → true
esParell(5) → false
Intenta escriure la funció en una sola línia.

Exercici 9 - Calculadora ràpida
Crea quatre funcions de fletxa:

suma
resta
multiplica
divideix
Cada funció ha de rebre dos números i retornar el resultat.

Exemple:

multiplica(6, 4)

Resultat:
24
Exercici 10 - Normal o fletxa?
Escriu dues versions de la mateixa funció:

Una utilitzant function.
Una utilitzant =>.
La funció ha de rebre el preu d'un producte i retornar-lo amb un 21% d'IVA.

Després prova les dues funcions amb el mateix valor i comprova que retornen el mateix resultat.

Exercici 11 - Quin codi prefereixes?
Observa aquestes dues funcions:

function dobleA(numero) {
    return numero * 2;
}

const dobleB = numero => numero * 2;
Respon:

Quin resultat dona dobleA(5)?
Quin resultat dona dobleB(5)?
Quina diferència principal observes en la manera d'escriure-les?
Bloc 3 - Classes
Exercici 12 - Ascensor
Crea una classe anomenada Ascensor.

Quan es crea un ascensor, començarà a la planta 0.

Ha de tenir dos mètodes:

pujar() → puja una planta.
baixar() → baixa una planta.
L'ascensor no pot baixar mai per sota de la planta 0.

Exemple:

const ascensor = new Ascensor();

ascensor.pujar();
ascensor.pujar();
ascensor.baixar();

Planta actual:
1

Exercici 13 - Personatge de videojoc
Crea una classe anomenada Personatge.

Ha de tenir:

nom
vida, que començarà sempre a 100
Afegeix els mètodes:

rebreDany(quantitat)
curar(quantitat)
La vida no pot baixar de 0 ni superar 100.

Exemple:

Vida inicial: 100

rebreDany(30)
Vida: 70

curar(10)
Vida: 80

Exercici 14 - Semàfor
Crea una classe anomenada Semafor.

El semàfor començarà en estat:

vermell
Afegeix un mètode canvia() que canviï l'estat seguint aquest ordre:

vermell → verd → groc → vermell
Exemple:

Estat inicial:
vermell

canvia()
verd

canvia()
groc

canvia()
vermell

Exercici 15 - Bateria del mòbil
Crea una classe anomenada Mobil.

Ha de tenir:

una marca;
un nivell de bateria, que començarà a 100.
Afegeix un mètode:

utilitzar(minuts)
Per cada minut d'ús, la bateria baixa un 1%.

La bateria mai pot baixar de 0.

Exemple:

const mobil = new Mobil("Samsung");

mobil.utilitzar(25);

Bateria:
75%

Exercici 16 - Compte bancari
Crea una classe anomenada CompteBancari.

Ha de guardar:

el titular;
el saldo.
Afegeix dos mètodes:

ingressar(quantitat)
retirar(quantitat)
No es podrà retirar una quantitat superior al saldo disponible.

En aquest cas s'haurà de mostrar:

Saldo insuficient.

Exercici 17 - Termòstat
Crea una classe anomenada Termostat.

Quan es crea, la temperatura inicial serà de 20 ºC.

Afegeix dos mètodes:

pujar()
baixar()
Cada vegada que s'executa un mètode, la temperatura canvia un grau.

La temperatura mínima serà de 15 ºC i la màxima de 30 ºC.

Bloc 4 - Exercicis de lectura i correcció
Exercici 18 - Troba el problema
El següent programa hauria de crear un alumne, però dona un resultat incorrecte:

class Alumne {

    constructor(nom, nota) {
        nom = nom;
        nota = nota;
    }

}

const alumne = new Alumne("Anna", 8);

console.log(alumne.nom);
Corregeix el codi perquè mostri:

Anna
Exercici 19 - Què passarà?
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

Després comprova la teva resposta.

Exercici 20 - Completa la classe
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

El mètode apagar() ha de fer que sigui false.

Minireptes
Minirepte 1 - Pedra, paper o tisores... sense joc automàtic
Demana a dos jugadors que introdueixin:

pedra
paper
tisores
Crea una funció anomenada decideixGuanyador que rebi les dues opcions i retorni:

"Guanya el jugador 1"
"Guanya el jugador 2"
"Empat"
No és necessari generar opcions aleatòries.

Minirepte 2 - Robot amb bateria
Crea una classe Robot.

Ha de tenir:

un nom;
100 punts de bateria.
Afegeix aquests mètodes:

avancar() → consumeix 10 punts de bateria.
carregar() → torna la bateria a 100.
estat() → mostra el nom i la bateria actual.
El robot no podrà avançar si la bateria és 0.