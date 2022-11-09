
// Le condizioni di script06OpConfronto adesso le facciamo valutare direttamente da un'istruzione if e else

var punteggio = 40;
var skill = 20;

var condizione = (punteggio >= 30) && (skill >= 20); // risultato true

// Le condizioni date ad if e else devono SEMPRE risultare in un valore booleano (ovvero true o false)

if (condizione) {
    // se la condizione è vera, il codice tra queste parentesi viene eseguito
    console.log("Congratulazioni! Hai Vinto!");
} else {
    // se è falsa, il codice a venire eseguito sarà questo
    console.log("GAME OVER! Tenta di nuovo!");
}

////////////////////////////////////////////////////////////////

if ((punteggio >= 30) || (skill >=20)) {
    console.log("Hai vinto di nuovo!");
} else {
    console.log("Perso di nuovo? Fai pratica e migliora!");
} // Qui il codice di IF viene eseguito, dato che entrambe le condizioni sono true (anche se bastava che una fosse true per via dell'operator OR, || )



if ((punteggio >=50) || (skill>=30)) {
    console.log("Wohooo! Congratulazioni! Hai Vinto!");
} else {
    console.log("G-A-M-E O-V-E-R");
} // Qui il codice di else viene eseguito, dato che nessuna delle due condizioni sono true

/////////////////////////////////////////////////

// Possiamo anche dare più condizioni a cascata per avere molte risposte diverse a situazioni diverse


if ((punteggio < 30) && (skill < 20)){
    console.log("Mi sa che è meglio se fai il tutorial");
} else if ((punteggio < 30) && (skill <= 20)){
    console.log("Ci sei quasi, cerca di ottenere più punteggio!");
} else if ((punteggio <= 30) && (skill <20)) {
    console.log("Migliora le tue skill e la vittoria sarà tua!");
} else {
    console.log("HAI VINTO! *Victory Fanfare*");
}

// if semplice

var nome = prompt("Come ti chiami?");

if (nome == "Marco" || nome == "Anna" || nome == "Pasquale") {
    console.log("Benvenuto/a, " + nome + "!");
}else{
    console.log("Mi dispiace ma non ti conosco " + nome + ", rilogga");
}



// % = Operatore di percentuale, o di resto della divisione
// Dà come risultato il numero che rimane dopo aver diviso un numero con un altro - o più semplicemente, calcola quante volte il secondo numero può "entrare" nel primo e quanto "rimane". Quindi se il primo numero è divisibile per il secondo il risultato sarà sempre zero

var operazione = 20 / 4;

console.log(operazione); // Risultato è 5

var operazione2 = 20 % 4;

console.log(operazione2); // Risultato è 0 - perchè non "rimane" niente dalla divisione dato che 20 può essere diviso per 4


// Possiamo utilizzare questo ad esempio per sapere se un numero è pari o dispari

var numero = 44;

if ((numero % 2) == 0) {
    console.log(numero + " è pari");
}else {
    console.log(numero + " è dispari");
}

// Oppure per sapere se un dato numero è divisibile per un'altro

var numero2 = 55;

if ((numero2 % 5) == 0) {
    console.log(numero2 + " è multiplo di 5");
}else{
    console.log(numero2 + " non è multiplo di 5");
}

