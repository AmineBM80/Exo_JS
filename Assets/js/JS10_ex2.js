/*Variables*/
let tableau;
let y;

function GetInteger()
{
  y = Number(prompt("Votre tableau comportera combien de valeurs?"));
  
  while(y != parseInt(y))
  {
    y = Number(prompt("ENTRÉE ERRONÉES !!! Entrez uniquement un entier"))
    console.log("chiffre décimal");
  }
}

function InitTab()
{
  GetInteger();
  tableau = new Array(y);
}

function AfficheTab()
{
  const points = tableau;
  document.getElementById("demo").innerHTML = points;
}

function SaisieTab()
{
  InitTab();
  for (i = 0; i < tableau.length; i++) 
  {
    let remplir = prompt("Entrez la valeur " + (i+1) + " du tableau");
    tableau[i] = [remplir];
  }
  AfficheTab();
}

function RechercheTab()
{
  let valeurs = parseInt(prompt("Entrez le rang de la valeurs voulant être récupéré"));
  document.getElementById("demo").innerHTML = ("Le numéro rentrez au rang " + valeurs + " est : " + tableau[valeurs-1]);
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
  document.getElementById("demo").innerHTML = ("La moyenne des valeurs du tableau est : " + moyenne + 
  "<br> La somme des valeurs du tableau est : " + somme );
}

function myFunction1()
{
  const points = tableau;
  points.sort();
  document.getElementById("demo").innerHTML = points;
}

function myFunction2()
{
  const points = tableau;
  points.sort(function(a, b){return a - b});
  document.getElementById("demo").innerHTML = points;
}

// function Tri()
// {
//   SaisieTab();
//   let changed;
//   do{
//       changed = false;
//       for(i=0; i < tableau.length-1; i++) 
//       {
//           if(tableau[i] > tableau[i+1]) 
//           {
//               let tmp = tableau[i];
//               tableau[i] = tableau[i+1];
//               tableau[i+1] = tmp;
//               changed = true;
//           }
//       }
//   } while(changed);
//   AfficheTab();
//   document.getElementById("tri").innerHTML = tableau;
// }
// Tri(tableau);