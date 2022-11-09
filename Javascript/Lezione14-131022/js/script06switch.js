// lo switch fa parte della famiglia degli if, ergo dei controlli

// con lo switch possiamo stabilire una casistica per condizioni

var messaggio = "";

var livello = 2;
var skill = 0;
var punti = 0;

switch(livello){

    case 1:
        skill = 0;
        punti = 0;
        messaggio = "Benvenuto al primo livello! Skill: " + skill + " Punti: " + punti;
    break;

    case 2:
        skill = 30;
        punti = 50;
        messaggio = "Nel secondo livello guadagnerai meno punti. Skill: " + skill + " Punti: " + punti;
    break;

    case 3:
        messaggio = "Affina le tue abilità, presto ti serviranno!";
    break;

    case 4:
        messaggio = "Preparati ad affrontare il boss!";
    break;

    // il default avviene quando nessuna delle condizioni precendenti è true
    default:
        messaggio = "Bentornato utente!";
    break;
}

console.log(messaggio);