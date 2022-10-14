let tableau;
let tablelength = 0;

function AfficheTab()
{
  const points = tableau;
  points.pop();
  document.getElementById("demo").innerHTML = ("<br> Les valeurs contenues dans le tableau sont les suivantes : " + points);

  let contenu = "<ul>";
  for(i=0; i<tableau.length; i++){
      contenu += "<li>" + tableau[i] + "</li>";
  }
  contenu += "</ul>";

  document.getElementById("tableaffichage").innerHTML = "<br>" + contenu;
  document.getElementById("nbrvaleurs").innerHTML = "<br>  Vous avez saisie " + (tablelength) + " valeurs dans le tableau";

}

function SaisieTab()
{
  let j=0;
  let remplir = prompt("Entrez la valeur " + (j+1) + " du tableau, entrez 0 pour arrêter");
  tableau = new Array(remplir);

  while(remplir != 0)
  {
    j++;
    remplir = prompt("Entrez la valeur " + (j+1) + " du tableau, entrez 0 pour arrêter");
    tableau[j] = [remplir];
    tablelength++;
  }  

  AfficheTab();
}

function RechercheTab()
{
  let valeurs = parseInt(prompt("Entrez le rang de la valeurs voulant être récupéré"));
  document.getElementById("demo").innerHTML = ("<br>Le numéro rentrez au rang " + valeurs + " est : " + tableau[valeurs-1]);
}

function InfoTab()
{
  let somme = 0;
  for (i = 0; i < tableau.length; i++)
  {
    somme += parseInt(tableau [i]);
  }
  let moyenne = 0;
  moyenne = somme / tableau.length;
  document.getElementById("demo").innerHTML = ("<br>La moyenne des valeurs du tableau est : " + moyenne + 
  "<br> La somme des valeurs du tableau est : " + somme );
}

function myFunction1()
{
  const points = tableau;
  points.sort();
  document.getElementById("demo").innerHTML = "<br> Par ordre alphabétique les valeurs sont : " + points;
}

function myFunction2()
{
  const points = tableau;
  points.sort(function(a, b){return a - b});
  document.getElementById("demo").innerHTML = "<br> Par ordre numérique les valeurs sont : " + points;
}

function maximum()
{
  const points = tableau;
  myFunction2();
  let max = points[tableau.length-1];
  document.getElementById("demo").innerHTML = "<br> La valeur maximum du tableau est : " + max;
}

function minimum()
{
  const points = tableau;
  myFunction2();
  let max = points[0];
  document.getElementById("demo").innerHTML = "<br> La valeur minimum du tableau est : " + max;
}

