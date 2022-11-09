// Operatori di confronto

// == è usato per chiedere se due variabili sono uguali

var num1 = 3;
var num2 = 4;

var confronto = (num1 == num2); // Chiedo se la prima variabile è uguale alla seconda, e in questo caso ritorna il risultato false

console.log(confronto);

console.log(num1 < num2); // Chiedo se la prima variabile è minore della seconda, true

console.log(num1 > num2); // Chiedo se la prima variabile è maggiore della seconda, false

console.log(num1 <= num2); // Chiedo se la prima variabile è minore o uguale alla seconda, true

console.log(num1 != num2); // Chiedo se la prima variabile NON è uguale alla seconda, true

// === è usato per chiedere se due variabili sono STRETTAMENTE uguali (ovvero anche dello stesso tipo)

console.log("---------------------------------");

var num3 = 42;
var num4 = "42";

console.log(num3 == num4); // True, sono entrambi lo stesso numero

console.log(num3 === num4); // False, sono entrambi lo stesso numero ma un diverso tipo di dato (il primo è un numero, il secondo una stringa)

console.log("---------------------------------");

// Possiamo valutare anche stringhe, non solo numeri

var stringa1 = "Marco";
var stringa2 = "Dario";

console.log(stringa1 == stringa2); // False, sono diverse

console.log(stringa1.length == stringa2.length); // True, hanno lo stesso numero di lettere

console.log("---------------------------------");

// Operatori di confronto logico
// Valuteremo più condizioni contemporaneamente
// && = AND logico - condizione 1 AND condizione 2
// Ritorna risultato true solo se ENTRAMBE le condizioni sono true

var punteggio = 40;
var skill = 15;

// Per esempio, mettiamo che stiamo giocando ad un gioco e per passare al prossimo livello, il punteggio deve essere superiore a 30 E le skill superiori a 20
// Entrambe le condizioni devono essere soddisfatte per vincere il gioco

var vittoria = (punteggio >= 30) && (skill >= 20);

console.log("Hai Vinto? " + vittoria); // Ritorna false, perchè la prima condizione è stata soddisfatta ma la seconda no

// || = OR logico - condizione 1 OPPURE condizione 2
// Ritorna risultato true se almeno UNA delle condizioni è true

var vittoria2 = (punteggio >= 30) || (skill >= 20);

console.log("Hai vinto? " + vittoria2); // Ritorna true, perchè la prima condizione è stata soddisfatta 


// Riproviamo! Gioco 2


var punteggio2 = 40;
var skill2 = 20;

var vittoria3 = (punteggio2 >= 30) && (skill2 >=20); 

console.log("Hai vinto? " + vittoria3); // Ritorna true, perchè entrambe le condizioni sono state soddisfatte

var vittoria4 = (punteggio2 >= 30) || (skill2 >= 20);

console.log("Hai vinto? " + vittoria4); // Ritorna true, perchè entrambe le condizioni sono state soddisfatte anche se ne bastava una

