/*Exercici 1 - Conversor de minuts
Crea una funció anomenada converteixMinuts que rebi una quantitat de
minuts i mostri quantes hores i minuts representa.
Exemple:
converteixMinuts(135)
Resultat:
2 hores i 15 minuts*/

function converteixMinuts(minutos) {
    //Math.floor redondea hacia abajo al número entero más cercano,que correspondera a las horas
    let horas = Math.floor(minutos / 60);
    //El operador % devuelve el resto de la división, que correspondera a los minutos restantes
    let minutosRestantes = minutos % 60;
    console.log(`${horas} hores i ${minutosRestantes} minuts`);
}
//Ejemplo de uso pasando un avalor de 135 minutos a la funcion
converteixMinuts(135);