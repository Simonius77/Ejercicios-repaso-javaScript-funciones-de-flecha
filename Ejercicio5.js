/*Exercici 5 - Detector de temperatura
Crea una funció anomenada estatTemperatura que rebi una temperatura.

Ha de retornar:

"Fa fred" si és inferior a 10 graus.
"Temperatura agradable" si està entre 10 i 25 graus.
"Fa calor" si és superior a 25 graus.*/

function estatTemperatura(temperatura) {
    if (temperatura < 10) {
        return "Fa fred";
    } else if (temperatura >= 10 && temperatura <= 25) {
        return "Temperatura agradable";
    } else {
        return "Fa calor";
    }
}
console.log(estatTemperatura(5));   // Hace frio
console.log(estatTemperatura(15));  // Temperatura agradable
console.log(estatTemperatura(30));  // Hace calor
