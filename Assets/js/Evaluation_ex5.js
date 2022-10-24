//Variables RegExp//
let filtre1 = new RegExp ('^[A-Za-z]+$');
let filtre2 = new RegExp ('^[0-9]{5}$');
let filtre3 = new RegExp ('^[a-zA-Z0-9.-_]+$');
let filtre4 = new RegExp ('^[a-zA-Z]+$');
let filtre5 = new RegExp ('^[a-zA-Z0-9.-]+[@]{1}[a-zA-Z0-9.-]+[.]{1}[a-z]{2,10}$');
let filtre6 = new RegExp ('^[a-zA-Z0-9.-_]+$');

//Variable filtre.test//
// let resultat_nom = filtre1.test(document.getElementById("nom").value);
function verif()
{
    let resultat_nom = filtre1.test(document.form1.nom.value);
    let resultat_prenom = filtre1.test(document.form1.prenom.value);
    let resultat_postal = filtre2.test(document.form1.cp.value);
    let resultat_adresse = filtre3.test(document.form1.adresse.value);
    let resultat_ville = filtre4.test(document.form1.ville.value);
    let resultat_mail = filtre5.test(document.form1.email_2.value);
    let resultat_question = filtre6.test(document.form1.votre_question.value);
    
    if (resultat_nom != true)
    {
        alert("Nom mal saisie ! N'entrez que des caractère alphabétique");
        return false;
    }

    if (resultat_prenom != true)
    {
        alert("Prénom mal saisie ! N'entrez que des caractère alphabétique");
        return false;
    }

    if (resultat_postal != true)
    {
        alert("Code postal mal saise ! 5 chiffres Svp !");
        return false;
    }

    if (resultat_adresse != true)
    {
        alert("Adresse mal saisie !");
        return false;
    }

    if (resultat_ville != true)
    {
        alert("Ville mal saisie");
        return false;
    }

    if (resultat_mail != true)
    {
        alert("Mail mal saisie")
        return false;
    }

    if (resultat_question != true)
    {
        alert("N'oubliez pas votre question");
        return false;
    }
}