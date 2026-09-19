/*Exercici 8 - Funció de fletxa en una sola línia
Crea una funció de fletxa anomenada esParell.

Ha de rebre un número i retornar true si és parell o false si és senar.*/

const esParell = (numero) => numero % 2 === 0;
console.log(esParell(4)); // resultado: true
console.log(esParell(5)); // resultado: false