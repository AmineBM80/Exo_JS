// let magicnumber;
// let randomnumber;
// randomnumber = Math.floor(Math.random() * 10000);

// document.querySelector('#test1').onclick = function() 
// {
//     alert("Vous avez saisie : " + document.form1.alert1.value)
// }

// function verif()
// {
//     magicnumber = document.Nbr_magique.alert2.value;

//     console.log(magicnumber);
//     console.log(randomnumber);

//     if (magicnumber == randomnumber)
//     {
//         alert("Félicitations !!! Vous avez eu le bon numéro !")
//     }

//     else if (magicnumber<randomnumber)
//     {
//         alert("Le nombre magique est plus grand ! Réessayez !")
//     }

//     else if (magicnumber>randomnumber)
//     {
//         alert("Le nombre magique est plus petit ! Réessayez !")
//     }

// }

function checkForm(f) {
    alert("Vous vous appelez : " + f.elements['nom'].value + " " + f.elements['prenom'].value);
    return false; // do not submit the form
}
