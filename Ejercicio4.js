/*Aquest programa hauria de calcular el quadrat d'un número, però no funciona correctament:
function quadrat(numero) {
    numero * numero;
}
const resultat = quadrat(5);
console.log(resultat);
Troba l'error i modifica la funció perquè el resultat sigui:

25*/

//En la funcion falta el return para que devuelva el resultado del cálculo. Aquí está la función corregida:

function quadrat(numero) {
    return numero * numero;
}
console.log(quadrat(5));