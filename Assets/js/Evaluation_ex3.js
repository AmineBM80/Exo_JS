let tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

document.getElementById("tab").innerHTML = "Les prénoms du tableau sont : <br>" + tab;

function prenomRemoved()
{
    let prenom = String(prompt("Entrez le prénom à retirer de la liste"));

    while(tab.indexOf(prenom) == -1)
    {
        alert(prenom  + " n'est pas dans la liste des prénoms");
        prenom = String(prompt("Entrez le prénom à retirer de la liste"));
    }
    
    for (i=0; i<tab.length; i++)
    {
        // if(prenom != tab[i])
        // { 
        //     prenom = String(prompt("Mauvaise saisie ! Entrez un prénom à retirer de la liste"));
        // }

        let pos = tab.indexOf(prenom);
        tab.splice(pos,1);
        tab.push(' ');
        document.getElementById("newtab").innerHTML = "Les prénoms restant sont : <br>" + tab;
        
    }
}