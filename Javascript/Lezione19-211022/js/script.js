/* -------------------------------------------------------------------------- */
/*                         Funzione che prende numeri                         */
/* -------------------------------------------------------------------------- */

var numeri=[];

function raccolta(){
    var num1 = Number(document.getElementById("primoNum").value);
    var num2 = Number(document.getElementById("secondoNum").value);

    numeri.push(num1, num2);
}

// E' possibile ritornare più valori con il return, se ritorniamo un'array

// function raccolta(){
//     var num1 = document.getElementById("primoNum").value;
//     var num2 = document.getElementById("secondoNum").value;

//     return [num1, num2];
// }





/* -------------------------------------------------------------------------- */
/*                      Funzioni che eseguono operazioni                      */
/* -------------------------------------------------------------------------- */

// function somma(){
//     raccolta();

//     var operazione = Number(numeri[0]) + Number(numeri[1]);

//     stampa(operazione);

//     document.getElementById("primoNum").value = "";
//     document.getElementById("secondoNum").value = "";

//     numeri=[];
// }

// function moltiplica(){
//     raccolta();

//     var operazione = Number(numeri[0]) * Number(numeri[1]);

//     stampa(operazione);
//     document.getElementById("primoNum").value = "";
//     document.getElementById("secondoNum").value = "";

//     numeri=[];
// }

// function sottrai(){
//     raccolta();

//     var operazione = Number(numeri[0]) - Number(numeri[1]);

//     stampa(operazione);
//     document.getElementById("primoNum").value = "";
//     document.getElementById("secondoNum").value = "";

//     numeri=[];
// }

// function dividi(){
//     raccolta();

//     var operazione = Number(numeri[0]) / Number(numeri[1]);

//     stampa(operazione);
//     document.getElementById("primoNum").value = "";
//     document.getElementById("secondoNum").value = "";

//     numeri=[];
// }

/* -------------------------------------------------------------------------- */
/*                          Funzione unica di calcolo                         */
/* -------------------------------------------------------------------------- */

function calcola(operatore){
    raccolta();

    if(operatore == '+'){
        var operazione = numeri[0] + numeri[1];
    }else if(operatore == '-'){
        var operazione = numeri[0] - numeri[1];
    }else if(operatore == '*'){
        var operazione = numeri[0] * numeri[1];
    }else if(operatore == '/'){
        var operazione = numeri[0] / numeri[1];
    }

    stampa(operazione);

    document.getElementById("primoNum").value = "";
    document.getElementById("secondoNum").value = "";

    numeri = [];
}


/* -------------------------------------------------------------------------- */
/*                             Funzione che stampa                            */
/* -------------------------------------------------------------------------- */

function stampa(operazione){
    var risultato = document.getElementById("risultato");
    risultato.innerHTML = "<h1>Il risultato è: " + operazione + "</h1>"; 
}