let PU;
let QTECOME;
let PORT;

function prix()
{
    PU = parseInt(prompt("Entrez le prix unitaire du produit"));
}

function quantite()
{
    QTECOME = parseInt(prompt("En combien d'exemplaire souhaitez vous le commander ?"));
}

function total()
{
    prix();
    quantite();

    let TOT = PU*QTECOME;

    if (TOT < 100)
    {
        PORT = TOT * (2/100);
        if(PORT < 6)
        {
            PORT = 6;
        }
        TOT += PORT;
    }

    if ((100 <= TOT) && (TOT <= 200))
    {
        TOT = TOT * (95/100); // Remise de 5%
        PORT = TOT * (2/100);
        if(PORT < 6)
        {
            PORT = 6;
        }
        TOT += PORT;
    }

    if ((TOT > 200) && (TOT < 500))
    {
        TOT = TOT * (90/100); // Remise de 10%
        PORT = TOT * (2/100);
        if(PORT < 6)
        {
            PORT = 6;
        }
        TOT += PORT;
    }

    if (TOT > 500)
    {
        TOT = TOT * (90/100); // Remise de 10%
        PORT = 0
        TOT += PORT;
    }

    document.getElementById("total").innerHTML = "Le total a payer est de : " + TOT + " €";
}