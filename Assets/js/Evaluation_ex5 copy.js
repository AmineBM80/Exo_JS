//Variables RegExp//
let filtre1 = new RegExp ('^[A-Za-z]+$');
let filtre2 = new RegExp ('^[0-9]{5}$');
let filtre3 = new RegExp ('^[a-zA-Z0-9.-_]+$');
let filtre4 = new RegExp ('^[a-zA-Z]+$');
let filtre5 = new RegExp ('^[a-zA-Z0-9.-]+[@]{1}[a-zA-Z0-9.-]+[.]{1}[a-z]{2,10}$');
let filtre6 = new RegExp ('^[a-zA-Z0-9.-_]+$');

//Variable filtre.test//
// let resultat_nom = filtre1.test(document.getElementById("nom").value);

// let resultat_nom = filtre1.test(document.form1.nom.value);
// let resultat_prenom = filtre1.test(document.form1.prenom.value);
// let resultat_postal = filtre2.test(document.form1.cp.value);
// let resultat_adresse = filtre3.test(document.form1.adresse.value);
// let resultat_ville = filtre4.test(document.form1.ville.value);
// let resultat_mail = filtre5.test(document.form1.email_2.value);
// let resultat_question = filtre6.test(document.form1.votre_question.value);

let validation = document.getElementById("idSubForm3");
//NOM//
let nom = document.getElementById("nom");
let nom_m = document.getElementById("nom_manquant");
//PRENOM//
let prenom = document.getElementById("prenom");
let prenom_m = document.getElementById("prenom_manquant");
//SEXE//
let feminin = document.getElementById("F");
let masculin = document.getElementById("M");
let sexe_m = document.getElementById("sexe_manquant");
//DATE//
let date = document.getElementById("date");
let date_m = document.getElementById("ddn_manquant");
//CODE POSTAL//
let cp = document.getElementById("cp");
let cp_m = document.getElementById("cp_manquant");
//ADRESSE//
let adresse = document.getElementById("adresse");
let adresse_m = document.getElementById("adresse_manquant");
//VILLE//
let ville = document.getElementById("ville");
let ville_m = document.getElementById("ville_manquant");
//MAIL//
let email = document.getElementById("email_2");
let email_m = document.getElementById("email_manquant");
//QUESTION//
let question = document.getElementById("votre_question");
let question_m = document.getElementById("question_manquant");

validation.addEventListener('click', valid);
function valid(e)
{
    //NOM//
    if(nom.validity.valueMissing)
    {
        e.preventDefault();
        nom_m.textContent = "nom non saisie"
        nom_m.style.color = "red";
    }
    else if(filtre1.test(nom.value) == false)
    {
        e.preventDefault();
        nom_m.textContent = "Format incorrect"
        nom_m.style.color = "orange"
    }
    else if(filtre1.test(nom.value) == true)
    {
        nom_m.textContent = "✓"
        nom_m.style.color = "green"
    }

    //PRENOM//
    if(prenom.validity.valueMissing)
    {
        e.preventDefault();
        prenom_m.textContent = "Prénom non saisie"
        prenom_m.style.color = "red";
    }
    else if(filtre1.test(prenom.value) == false)
    {
        e.preventDefault();
        prenom_m.textContent = "Format incorrect"
        prenom_m.style.color = "orange"
    }
    else if(filtre1.test(prenom.value) == true)
    {
        prenom_m.textContent = "✓"
        prenom_m.style.color = "green"
    }

    //SEXE//
    if((feminin.checked != 1) && (masculin.checked != 1)){
        e.preventDefault();
        sexe_m.textContent = "Quel est votre sexe ?";
        sexe_m.style.color = "red";
    }
    else if((feminin.checked = 1) || (masculin.checked = 1))
    {
        sexe_m.textContent = "✓"
        sexe_m.style.color = "green"
    }

    //CODE POSTAL//
    if(cp.validity.valueMissing)
    {
        e.preventDefault();
        cp_m.textContent = "Code postal non saisie"
        cp_m.style.color = "red";
    }
    else if(filtre2.test(cp.value) == false)
    {
        e.preventDefault();
        cp_m.textContent = "Format incorrect"
        cp_m.style.color = "orange"
    }
    else if(filtre2.test(cp.value) == true)
    {
        cp_m.textContent = "✓"
        cp_m.style.color = "green"
    }

    //ADRESSE//
    if(adresse.validity.valueMissing)
    {
        e.preventDefault();
        adresse_m.textContent = "adresse non saisie"
        adresse_m.style.color = "red";
    }
    else if(filtre3.test(adresse.value) == false)
    {
        e.preventDefault();
        adresse_m.textContent = "Format incorrect"
        adresse_m.style.color = "orange"
    }
    else if(filtre3.test(adresse.value) == true)
    {
        adresse_m.textContent = "✓"
        adresse_m.style.color = "green"
    }

    //VILLE//
    if(ville.validity.valueMissing)
    {
        e.preventDefault();
        ville_m.textContent = "Ville non saisie"
        ville_m.style.color = "red";
    }
    else if(filtre4.test(ville.value) == false)
    {
        e.preventDefault();
        ville_m.textContent = "Format incorrect"
        ville_m.style.color = "orange"
    }
    else if(filtre4.test(ville.value) == true)
    {
        ville_m.textContent = "✓"
        ville_m.style.color = "green"
    }
    
    //MAIL//
    if(email.validity.valueMissing)
    {
        e.preventDefault();
        email_m.textContent = "Email non saisie"
        email_m.style.color = "red";
    }
    else if(filtre5.test(email.value) == false)
    {
        e.preventDefault();
        email_m.textContent = "Format incorrect"
        email_m.style.color = "orange"
    }
    else if(filtre5.test(email.value) == true)
    {
        email_m.textContent = "✓"
        email_m.style.color = "green"
    }

    //QUESTION//
    if(question.validity.valueMissing)
    {
        e.preventDefault();
        question_m.textContent = "Question non saisie"
        question_m.style.color = "red";
    }
    else if(filtre6.test(question.value) == false)
    {
        e.preventDefault();
        question_m.textContent = "Format incorrect"
        question_m.style.color = "orange"
    }
    else if(filtre6.test(question.value) == true)
    {
        question_m.textContent = "✓"
        question_m.style.color = "green"
    }
    else{}
}

