// Variables
let x = parseInt(prompt("Affichez la table de multiplication du nombre :"));
let i = 0;

// Conditions
function TableMultiplication(x)
{
    for(i; i<11; i++)
    {
    let n4 = document.createElement('p');
    n4.textContent = i + " x " + x + " = " + i*x;
    document.body.appendChild(n4);
    }
}

TableMultiplication(x);