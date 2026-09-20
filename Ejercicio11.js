/*Exercici 11 - Quin codi prefereixes?
Observa aquestes dues funcions:

function dobleA(numero) {
    return numero * 2;
}

const dobleB = numero => numero * 2;
Respon:

Quin resultat dona dobleA(5)? 10
Quin resultat dona dobleB(5)? 10
Quina diferència principal observes en la manera d'escriure-les?*/
 //la diferencia principal es que en el primer caso se necesita el return
 //y en el segundo caso no es necesario ya que es una funcion de flecha y tiene un return implicito.

 function dobleA(numero) {
    return numero * 2;
}

const dobleB = numero => numero * 2;

console.log(dobleA(5)); 
console.log(dobleB(5));