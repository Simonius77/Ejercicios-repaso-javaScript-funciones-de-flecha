/*Exercici 10 - Normal o fletxa?
Escriu dues versions de la mateixa funció:
Una utilitzant function.
Una utilitzant =>.
La funció ha de rebre el preu d'un producte i retornar-lo amb un 21% d'IVA.
Després prova les dues funcions amb el mateix valor i comprova que retornen el mateix resultat.*/

//Funcion normal

function calcularIVA(precio){
    return precio * 1.21;
} 
console.log(calcularIVA(100)); // 121

//Funcon de flecha 

const calcularIVA2 = (precio) => {
    return precio * 1.21;
};
console.log(calcularIVA2(100)); // 121