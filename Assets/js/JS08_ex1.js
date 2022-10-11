// Exercice 1 !

let prenom = String(prompt("Entrez un prenom, ne rien entrez quand la saisie est fini"));
let nbrprenom = 0;
let listname = (nbrprenom+1) + " " + prenom;

let prenom1 = document.createElement('p');
prenom1.textContent = listname;
document.body.appendChild(prenom1);


while (prenom!="")
{
    prenom = String(prompt("Entrez un autre prenom, ne rien entrez quand la saisie est fini"));
    nbrprenom = nbrprenom +1;
    listname = (nbrprenom+1) + " " + prenom;
    let prenom2 = document.createElement('p');
    prenom2.textContent = listname;
    document.body.appendChild(prenom2);
}

let listname2 = "il y'a eu " + nbrprenom + " prénom(s) saisie";
nbrprenom = nbrprenom;
let prenom3 = document.createElement('p');
prenom3.textContent = listname2;
document.body.appendChild(prenom3);           

 


// let listname2 = "il y'a eu " + nbrprenom + " prénom(s) saisie";
// nbrprenom = nbrprenom;
// let prenom3 = document.createElement('p');
// prenom3.textContent = listname2;
// document.body.appendChild(prenom3);

