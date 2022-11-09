// METODI PER STRINGHE

// Le stringhe sono 0-based - ogni carattere è indicizzato in base alla sua posizione, partendo da 0

var str1 = "Oggi è Venerdì";

var lunghezzaStr1 = str1.length;

console.log(lunghezzaStr1); // Stampa il numero di caratteri della stringa, spazi inclusi

// Metodi per ricerca

var search1 = str1.indexOf("Venerdì"); // Trova l'indice iniziale della stringa specificata
 
console.log(search1);

var str2 = "Il corso di JS è tenuto da un'azienda di Torino";
var search2 = str2.indexOf("di"); // Prima occorrenza della stringa di, carattere 9
var search3 = str2.lastIndexOf("di"); // Ultima occorrenza della stringa di, carattere 38
var search4 = str2.indexOf("Napoli"); // Non c'è nella stringa, carattere -1

console.log(search2);
console.log(search3);
console.log(search4);


var str3 = "Stiamo studiando le basi del linguaggio";

var search5 = str3.charAt(20); // restituisce il carattere in un dato indice
var search6 = str3.charCodeAt(20); // restituisce il codice carattere (univoco per ogni carattere della tastiera) nel dato indice

console.log(search5);
console.log(search6);


// Metodi per il taglio, per separare stringhe

var str4 = "Javascript è un linguaggio basato su prototipi";
var sl = str4.slice(5, 10); // Estrae una porzione della stringa, iniziando dal primo indice dato e finendo al secondo indice

console.log(sl);

var sub = str4.substring(6, 14);
console.log(sub);
console.log(str4);

// Metodi per sostituire

var str5 = "Explorer è il miglior browser che ci sia!";
var rep = str5.replace("Explorer", "Chrome"); // Rimpiazza la prima stringa con la seconda

console.log(rep);

// Metodi vari ed eventuali

var upp = str5.toUpperCase(); // Trasforma la stringa in maiuscolo
var low = str5.toLowerCase(); // e minuscolo

console.log(upp);
console.log(low);

// Metodi per scomporre in array

var str6 = "Scomponiamo in array";
var strInArr = str6.split(""); // Scompone la stringa nel punto in cui si trova il carattere dato (o tutti se non viene dato un carattere) e lo piazza in un array
var strInArr2 = str6.split(" "); // Qui scompone in array quando trova uno spazio nella stringa
var strInArr3 = str6.split("amo"); // Qui scompone in array quando trova "amo"
var strInArr4 = str6.split("a"); // Qui scompone ogni volta che trova "a"
console.log(strInArr);
console.log(strInArr2);
console.log(strInArr3);
console.log(strInArr4);

// Metodi per comporre in stringa

var nuovaStr = strInArr3.join(""); // Join ricompone un array in stringa
console.log(nuovaStr);

var mioNome = ["M", "A", "R", "C", "O"];
var nome = mioNome.join("");
console.log(nome);

/////////////////////////////////////////////////

var tuoNome = "Massimiliano";
var nomeInv = tuoNome.split("").reverse().join(""); // Possiamo usare metodi non solo per variabili ma anche per array, concatenandone diversi, in questo caso per spezzare la stringa in un array, invertire l'ordine con un metodo per array, e poi ricomporre la stringa

console.log(nomeInv);

// Trim() taglia gli spazi vuoti

var nomeUtente = "                Marco"
var nomeCorretto = nomeUtente.trim();
console.log(nomeCorretto);

var nomeUtente2 = "                Pippo                 buongiorno"
var nomeCorretto2 = nomeUtente.trimStart();
console.log(nomeCorretto2);

console.log(nomeUtente.concat("Ciao")); // concatena un'altra stringa