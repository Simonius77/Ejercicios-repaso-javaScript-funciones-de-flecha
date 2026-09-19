/*Exercici 6 - Preu d'un aparcament
Un aparcament cobra 2 € per hora.

Crea una funció que rebi el nombre d'hores que ha estat aparcat un vehicle i retorni el preu total.

Si el vehicle ha estat aparcat més de 5 hores, el preu màxim serà de 10 €.*/

function calculaPreuAparcament(horas) {
    let precio = horas * 2;   
    if (precio > 10) {
        precio = 10;
    }
    return precio;
}

console.log(calculaPreuAparcament(3));  //resultado: 6
console.log(calculaPreuAparcament(6)); //resultado: 10