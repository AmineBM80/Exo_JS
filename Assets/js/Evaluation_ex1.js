// Variables
let tableau;
let tablelength = 0;
let vingtEtMoins;
let vingtAQuarante;
let QuaranteEtPlus;
let nbrVingtMoins = 0;
let nbrvingtAQuarante = 0;
let nbrQuarantePlus = 0;

// Conditions

function AfficheTab()
{
    const jeune = vingtEtMoins;
    jeune.shift();
    const moyen = vingtAQuarante;
    moyen.shift();
    const vieux = QuaranteEtPlus;
    vieux.shift();
    
    document.getElementById("jeune").innerHTML = ("<br> Les personnes de moins de 20ans ont " + jeune + " ans");
    document.getElementById("moyen").innerHTML = ("<br> Les personnes agées entre 20 et 40ans ont " + moyen + " ans");
    document.getElementById("vieux").innerHTML = ("<br> Les personnes agées de plus de 40ans ont " + vieux + " ans");

    let contenuj = "<ul>";
    for(i=0; i<vingtEtMoins.length; i++)
    {
        contenuj += "<li>" + vingtEtMoins[i] + "</li>";
    }
    contenuj += "</ul>";

    let contenum = "<ul>";
    for(b=0; b<vingtAQuarante.length; b++)
    {
        contenum += "<li>" + vingtAQuarante[b] + "</li>";
    }
    contenum += "</ul>";

    let contenuv = "<ul>";
    for(a=0; a<QuaranteEtPlus.length; a++)
    {
        contenuv += "<li>" + QuaranteEtPlus[a] + "</li>";
    }
    contenuv += "</ul>";

    document.getElementById("tablejeune").innerHTML = "tableau des moins de 20ans <br>" + contenuj;
    document.getElementById("tablemoyen").innerHTML = "tableau des 20 - 40ans <br>" + contenum;
    document.getElementById("tablevieux").innerHTML = "tableau des 40ans et plus <br>" + contenuv;
    document.getElementById("nbrvaleurs").innerHTML = "<br>  Vous avez saisie l'âge de " + (tablelength) + " personnes.";

}

function SaisieTab()
{
    let j=0;
    let remplir = 0;
    vingtEtMoins = new Array(remplir);
    QuaranteEtPlus = new Array(remplir);
    vingtAQuarante = new Array(remplir);
    let x=0;
    let y=0;
    let z=0;

    while(100 > remplir)
    {
        j++;
        remplir = prompt("Entrez l'âge de la personne numéro " + (j) + ", entrez un centenaire pour arrêter");
        tablelength++;
        if (remplir < 20)
        {
            x++;
            vingtEtMoins[x] = [remplir];
            nbrVingtMoins++;
        }
        if ((20 <= remplir) && (remplir <= 40))
        {
            y++;
            vingtAQuarante[y] = [remplir];
            nbrvingtAQuarante++;
        }
        if (remplir > 40)
        {
            z++;
            QuaranteEtPlus[z] = [remplir];
            nbrQuarantePlus++;
        }
    }  

    AfficheTab();
}

// SaisieTab();