/*Exercici 2 - Enviament gratuït
Una botiga cobra 4,95 € d'enviament si la compra és inferior a 50 €.
Crea una funció anomenada calculaCompra que rebi el preu de la 
compra i retorni el total que haurà de pagar el client.*/
function calculaCompra(preuCompra) {
    let total = preuCompra;
    if (preuCompra < 50) {
        total += 4.95;
    }
    return total;
}
console.log(calculaCompra(30));