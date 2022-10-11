// Exercice 1 !

/*Variables*/
let n1 = parseInt(prompt("Entrez un numéro positif"));
let n3 = 0

// /*Conditions*/

for(n1; n1>-1; n1--)
{
    let n2 = document.createElement('p');
    n2.textContent = n1;
    document.body.appendChild(n2);
}

