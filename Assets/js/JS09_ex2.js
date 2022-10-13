/*Variables*/
let tailletab = parseInt(prompt("Entrez votre nombre de mot"));
let Str1 = String;
let Str2 = " ; ";


for (i = 0; i < tailletab; i++)
{
    let remplir = String(prompt("Entrez le " + (i+1) + "eme mot de la liste"));
    Str1 += (remplir+Str2);   
}

function strtok(Str1,Str2, numero)
{
    Str2 = Str1.split(Str2);
    document.getElementById("x").innerHTML = Str2[numero-1];
}

let numero = parseInt(prompt("Entrez le numéro du mot voulant être obtenu"));

strtok(Str1,Str2,numero);