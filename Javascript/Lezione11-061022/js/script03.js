
var nomiStudenti = ["Marco", "Pietro", "Cinzia", "Roberto", "Jona", "Isa", "Elena", "Lorenzo", "Ali", "Lucia", "Luigi", "Olga", "Roberta", "Riccardo"]

nomiStudenti.sort();

// document.write(nomiStudenti);

// voglio scrivere il nome degli studenti nel tag p creato in HTML

// Recupero l'elemento HTML attraverso il suo ID utilizzando un metodo per la manipolazione del DOM (Document Object Model)

var elListaStudenti = document.getElementById("listaStudenti");

// controllo cos'è nomiStudenti

console.log(elListaStudenti);
console.log(typeof elListaStudenti);

// modifico la sua proprietà "innerHTML" (quello che c'è scritto dentro, una proprietà)

// elListaStudenti.innerHTML = "Ciao";


// Alt+Shift+Freccetta in basso per copiare la riga su cui è il cursore

elListaStudenti.innerHTML = nomiStudenti[0] + "<br>" +
                            nomiStudenti[1] + "<br>" +
                            nomiStudenti[2] + "<br>" +
                            nomiStudenti[3] + "<br>" +
                            nomiStudenti[4] + "<br>" +
                            nomiStudenti[5] + "<br>" +
                            nomiStudenti[6] + "<br>" +
                            nomiStudenti[7] + "<br>" +
                            nomiStudenti[8] + "<br>" +
                            nomiStudenti[9] + "<br>" +
                            nomiStudenti[10] + "<br>" +
                            nomiStudenti[11] + "<br>" +
                            nomiStudenti[12] + "<br>" +
                            nomiStudenti[13] + "<br>";

var elTotaleStudenti = document.getElementById("totaleStudenti");

elTotaleStudenti.innerHTML = "Numero di Studenti: " + nomiStudenti.length;