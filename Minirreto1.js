/*Minireptes
Minirepte 1 - Pedra, paper o tisores... sense joc automàtic
Demana a dos jugadors que introdueixin:

pedra
paper
tisores
Crea una funció anomenada decideixGuanyador que rebi les dues opcions i retorni:

"Guanya el jugador 1"
"Guanya el jugador 2"
"Empat"
No és necessari generar opcions aleatòries.*/

let jugador1 = prompt("Jugador 1, introduce piedra, papel o tijeras:");
let jugador2 = prompt("Jugador 2, introduce piedra, papel o tijeras:");

function Ganador(opcion1, opcion2) {  
    if (opcion1 === opcion2) {
        return "Empate";
    } else if ((opcion1 === "piedra" && opcion2 === "tijeras") || 
               (opcion1 === "papel" && opcion2 === "piedra") || 
               (opcion1 === "tijeras" && opcion2 === "papel")) {
        return "Gana el jugador 1";
    } else {
        return "Gana el jugador 2";
    }   
}

console.log(Ganador(jugador1, jugador2));