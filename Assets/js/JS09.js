/*Variables*/
let numero1 = parseInt(prompt("Entrez un numéro"));
let numero2 = parseInt(prompt("Entrez un autre numéro"));
let img = document.createElement("img");
img.src = "src/img/papillon.jpg";

var div = document.getElementById("x");
div.appendChild(img);

let n3 = document.createElement('p');
n3.textContent = "le cube de "+ numero1+ " est égal à :" +numero1*numero1;
document.body.appendChild(n3);

let n4 = document.createElement('p');
n4.textContent = "le produit de "+ numero1+" x "+numero2+" = "+numero1*numero2;
document.body.appendChild(n4);


// function produit(numero1, numero2)
// {
//     let img = document.createElement("img");
//     img.src = "src/img/papillon.jpg";

//     let div = document.getElementById("x");
//     div.appendChild(img);

//     let n3 = document.createElement('p');
//     n3.textContent = "le cube de "+ numero1+ " est égal à :" +numero1*numero1;
//     document.body.appendChild(n3);

//     let n4 = document.createElement('p');
//     n4.textContent = "le produit de "+ numero1+" x "+numero2+" = "+numero1*numero2;
//     document.body.appendChild(n4);
// }