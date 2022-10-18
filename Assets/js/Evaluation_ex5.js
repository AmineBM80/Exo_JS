let filtre = new RegExp("^[A-Za-z]+$");
let resultat_nom;
// console.log(resultat_nom);

function verif()
{
    if (resultat_nom != true)
    {
        resultat_nom = filtre.test(document.getElementById("nom").value);
        alert("Dans nom n'écrivez que des caractères alphabetique");

    }
    console.log(resultat_nom);
}

// document.getElementById("idSubForm3").addEventListener("click"), ()
//     resultat_nom