/*Exercici 9 - Calculadora ràpida
Crea quatre funcions de fletxa:
suma
resta
multiplica
divideix
Cada funció ha de rebre dos números i retornar el resultat.*/
//suma
const suma = (a, b) => a + b;
//resta
const resta = (a, b) => a - b;
//multiplica
const multiplica = (a, b) => a * b;
//division
const division = (a, b) =>{
    //control de error para evitar division por 0
    if (b === 0) {
        return "Error: No es pot dividir per zero";
    }
    return a / b;
}

console.log(suma(5, 3));        // 8
console.log(resta(5, 3));     // 2
console.log(multiplica(5, 3));  // 15
console.log(division(6, 3));    // 2