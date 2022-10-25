//***************************************************EXERCICE 1***************************************************//

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
    tablelength = 0;
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

//****************************************************************************************************************//
//***************************************************EXERCICE 2***************************************************//
//****************************************************************************************************************//
let x = 0;
let i = 0;
// Conditions
function nombre()
{
    x = 0;
    x =parseInt(prompt("Affichez la table de multiplication du nombre :"));
}
function TableMultiplication()
{
    nombre();
    // for(i; i<11; i++)
    // {
    // let n4 = document.createElement('p');
    // n4.textContent = i + " x " + x + " = " + i*x;
    // document.body.appendChild(n4);
    // {
    i = 0;
    let contenun = "<ul>";
    for(i; i<11; i++)
    {
        contenun += "<li>" + i + " x " + x + " = " + i*x + "</li>";
    }
    contenun += "</ul>";
    document.getElementById("multiplication").innerHTML = "La table de multiplication de "+ x +" <br>" + contenun;
}

//****************************************************************************************************************//
//***************************************************EXERCICE 3***************************************************//
//****************************************************************************************************************//

let tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
let g = 0;
document.getElementById("tab").innerHTML = "Les prénoms du tableau sont : <br>" + "Audrey, Aurélien, Flavien, Jérémy, Laurent, Melik, Nouara, Salem, Samuel, Stéphane";

function prenomRemoved()
{
    let prenom = String(prompt("Entrez le prénom à retirer de la liste"));

    while(tab.indexOf(prenom) == -1)
    {
        alert(prenom  + " n'est pas dans la liste des prénoms");
        prenom = String(prompt("Entrez le prénom à retirer de la liste"));
    }
    let contenu_prenom = "<ul>";
    for (g=0; g<tab.length; g++)
    {
        let pos = tab.indexOf(prenom);
        tab.splice(pos,1);
        tab.push(' ');
        contenu_prenom += "<li>" + tab[g] + "</li>";
        document.getElementById("newtab").innerHTML = "Les prénoms restant sont : <br>" + contenu_prenom;
    }
}

//****************************************************************************************************************//
//***************************************************EXERCICE 4***************************************************//
//****************************************************************************************************************//

let PU;
let QTECOME;
let PORT;

function prix()
{
    PU = parseInt(prompt("Entrez le prix unitaire du produit"));
}

function quantite()
{
    QTECOME = parseInt(prompt("En combien d'exemplaire souhaitez vous le commander ?"));
}

function total()
{
    prix();
    quantite();

    let TOT = PU*QTECOME;

    if (TOT < 100)
    {
        PORT = TOT * (2/100);
        if(PORT < 6)
        {
            PORT = 6;
        }
        TOT += PORT;
    }


    if ((100 <= TOT) && (TOT <= 200))
    {
        TOT = TOT * (95/100); // Remise de 5%
        PORT = TOT * (2/100);
        if(PORT < 6)
        {
            PORT = 6;
        }
        TOT += PORT;
    }

    if (TOT > 200){

        TOT = TOT * (90/100); // Remise de 10%

        if ((TOT > 200) && (TOT < 500))
        {
            PORT = TOT * (2/100);
            if(PORT < 6)
            {
                PORT = 6;
            }
            TOT += PORT;
        }

        if (TOT > 500)
        {
            PORT = 0
            TOT += PORT;
        }
    }

    document.getElementById("total").innerHTML = "Le total a payer est de : " + TOT + " €";
}