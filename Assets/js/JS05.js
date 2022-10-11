/*Les différentes variables*/
let firstname = prompt("Entrez votre prénom");
let age = prompt("Entrez votre age");
let sexe;

/* Condition du sexe*/
if (window.confirm("etes vous un homme ?") == true) 
{
    sexe = 'homme';
}

else {
    sexe = 'femme';
}

/*Fenêtre d'alerte final*/
alert(`Vous etes un(e) ${sexe}, vous vous appelez ${firstname}, et vous avez ${age} ans`)