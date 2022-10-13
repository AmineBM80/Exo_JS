/*Variables*/
let tableau = Array(parseInt(prompt("Choisissez la taille du tableau !")));
let tabLen = tableau.length;
let text = "<ul>";

for (i = 0; i < tabLen; i++) 
{
    let remplir = prompt("Entrez la valeur " + (i+1) + " du tableau");
    tableau [i] = [remplir];   
    text += "<li>" + tableau[i] + "</li>";
}
text += "</ul>";

document.getElementById("demo").innerHTML = text;
document.getElementById("tableauID").innerHTML = 
("Les valeurs contenues dans le tableau sont les suivantes : " + tableau);

