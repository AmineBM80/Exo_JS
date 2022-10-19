/*Exercice 3*/
/*Variables*/
let n1 = parseInt(prompt("Entrez un premier numéro"));
let n2 = parseInt(prompt("Entrez un second numéro"));
let operateur = prompt("Entrez un opérateur : + ou - ou * ou / ");

/*Conditions*/
tableauoperators= ['+','-','*','/'];

while ((operateur != tableauoperators[0]) && (operateur != tableauoperators[1]) && (operateur != tableauoperators[2]) && (operateur != tableauoperators[3])){
    operateur = prompt("Mauvais opérateur entrez : + ou - ou * ou / ");
    alert(operateur);
}

function calcul(operateur, n1, n2){
    let result
        if (operateur == tableauoperators[0])  
        {
            return result = n1 + n2;
        }    
        else if (operateur == tableauoperators[1])
        {
            return result = n1 - n2;
        }
        else if (operateur == tableauoperators[2])
        {
            return result = n1 * n2;
        }
        else if ((operateur == tableauoperators[3]) && (n2 != 0))
        {
        return result = n1 / n2;
        }
        else 
        {                                       
            return result = "division par 0 !!!!!"; 
        }
} 

alert(calcul(operateur, n1, n2));

// switch (operateur){
//        case "+" : alert(n1 + n2); break;
//        case "-" : alert(n1 - n2); break;
//        case "*" : alert(n1 * n2); break;
//        case "/" :
//            if (n2 == 0){
//                alert ("division par 0");
//                break;
//             }
//             alert(n1 / n2)
//         default : alert("opérateur erroné !"); break;
//     }
