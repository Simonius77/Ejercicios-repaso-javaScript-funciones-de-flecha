/*Bloc 4 - Exercicis de lectura i correcció
Exercici 18 - Troba el problema
El següent programa hauria de crear un alumne, però dona un resultat incorrecte:

class Alumne {

    constructor(nom, nota) {
        nom = nom;
        nota = nota;
    }

}

const alumne = new Alumne("Anna", 8);

console.log(alumne.nom);
Corregeix el codi perquè mostri:

Anna*/
//falta el this. para asignar los valores de nom y nota a las propiedades del objeto Alumne
//codigo corregido
class Alumne {
    constructor(nom, nota) {
        this.nom = nom;
        this.nota = nota;
    }   
}
const alumne = new Alumne("Anna", 8);
console.log(alumne.nom);
