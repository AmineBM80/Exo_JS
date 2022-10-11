/*Exercice 1*/
/*Variables*/
let num = prompt("Entrez un numéro");
const reste = num % 2
let resultat = '0'
/*Conditions*/
if (reste == 0){
    resultat = 'pair';
}
else {
    resultat = 'impair';
}

/*Affichage*/
alert(`Votre nombre est ${resultat}`)


/* -------------------------------------------------------------------------------------------------------*/

/*Exercice 2*/

/*Variables*/
let age = prompt ('Quel age avez-vous ?')

/*Conditions*/
if (age>18)
{
    alert ('Vous êtes majeur') //Affichage
} 
else
{
    alert ('Vous êtes mineur') //Affichage
}


