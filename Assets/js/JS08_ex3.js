// Exercice 3 !

/*Variables*/
let i=0;
let somme=0;
let nb_notes=0;

// /*Conditions*/

nb_notes=prompt("Souhaitez-vous faire la moyenne de combien de notes ?","Nb de Notes");
nb_notes=parseInt(nb_notes);
notes = new Array(nb_notes);

for(i=1; i<=nb_notes; i++)
{   
    note_i=prompt("Entrez la note");
    notes[i-1]=parseInt(note_i);
    somme+=notes[i-1];
}

let moyenne=(somme/nb_notes);
let n2 = document.createElement('p');
n2.textContent ="La moyenne des notes est : "+moyenne;
document.body.appendChild(n2);



