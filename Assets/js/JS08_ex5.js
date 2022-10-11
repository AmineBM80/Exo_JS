// Exercice 5 !

let mot = String(prompt("Entrez un mot"));

let voyelle = 0;
let string = mot.toString();
  
//Boucle dans le mot
for (var i = 0; i <= string.length - 1; i++) {
  
    if (string.charAt(i) == "a" 
    || string.charAt(i) == "e"
    || string.charAt(i) == "i"
    || string.charAt(i) == "o" 
    || string.charAt(i) == "u") 
    {
    voyelle += 1;
    }
}
let nombrevoyelle = document.createElement('p');
nombrevoyelle.textContent = "Le nombre de voyelle dans le mot est de : "+voyelle;
document.body.appendChild(nombrevoyelle);

  
  