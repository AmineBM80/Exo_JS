let societe = document.form2.Societe.value
let filtre = new RegExp("^[A-Za-z]+$");
let filtre_num = new RegExp("^[0-9]*$");
let filtre_city = new RegExp("[A-Za-z]+$");
let filtre_mail = new RegExp("^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$")
let resultat_societe;
let resultat_p_contact;
let code_postal;
let resultat_ville;
let resultat_mail;

function verif()
{
    resultat_societe = filtre.test(document.form2.Societe.value);
    resultat_p_contact = filtre.test(document.form2.p_contact.value);
    code_postal = filtre_num.test(document.form2.Zip.value);
    resultat_ville = filtre_city.test(document.form2.Ville.value);
    resultat_mail = filtre_mail.test(document.form2.mail.value);

    if (resultat_societe != true)
    {
        alert("Dans société n'écrivez que des caractères alphabetique");
        return false;
        console.log(resultat_societe);
    }

    if (resultat_p_contact != true)
    {
        alert("Dans la catégorie \"personne à contacter\" n'écrivez que des caractères alphabétique");
        return false;
    }

    if (code_postal != true)
    {
        alert("Entrez le code postal sur 5 chiffres SVP !");
        return false;
    }

    if (resultat_ville != true)
    {
        alert("Entrés étronée ou oubliée ! Entrez la ville !")
        return false;
    }

    if (resultat_mail != true)
    {
        alert("Entrés étronée ou oubliée ! Entrez le mail !")
        return false;
    }
}