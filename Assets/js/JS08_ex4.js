// Exercice 4 !

/*Variables*/
let numero1 = parseInt(prompt("Entrez un numéro"));
let numero2 = parseInt(prompt("Entrez un autre numéro"));

// /*Conditions*/

if (numero1 >0)
{
    for(numero1; numero1>-1; numero1--)
    {   
        let n3 = document.createElement('p');
        n3.textContent = numero1+" x "+numero2+" = "+numero1*numero2;
        document.body.appendChild(n3);
    }
}

else 
{
    for(numero1; numero1<1; numero1++)
    {   
        let n3 = document.createElement('p');
        n3.textContent = numero1+" x "+numero2+" = "+numero1*numero2;
        document.body.appendChild(n3);
    }
}
