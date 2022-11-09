/* ARRAY, nuovo tipo di dato, mentre la variabile contiene una sola informazione, gli Array sono contenitori di elementi "simili" (ovvero dello stesso tipo, ex. stringhe, numeri, etc.) tra loro. Sono 0-based, ovvero gli elementi all'interno sono indicizzati a partire da 0. Ex. Il primo valore sarà il valore 0, il secondo sarà valore 1, e così via */

var primoArray;

primoArray = ["Giuseppe", "Franco", "Emanuele", "Marco"];

console.log(primoArray);

// var secondoArray = ["Luca", 33, "Francesca", "Isabella"];

// console.log(secondoArray);

/* Da notare che non ricevo nessun errore dal secondo Array perchè javascript non lo considera un errore tecnico, ma è assolutamente un errore logico: vogliamo tenere le informazioni dello stesso tipo insieme, avere un array di informazioni miste non ha senso */

var colori = ['bianco', 'rosso', 'giallo']; 
// virgolette singole o doppie non fanno differenza, a meno che non si usino entrambe allo stesso momento

console.log(colori);

// Possiamo usare un singolo elemento dell'array alla volta usando il suo indice

console.log(colori[0]);
console.log(colori[1]);
console.log(colori[2]);

// Possiamo anche cambiare il valore di singoli elementi usando l'indice

colori[0] = "blu";

console.log(colori);

// METODI PER ARRAY, ovvero azioni che ci permettono di manipolare l'array

// push aggiunge un elemento all'array

colori.push("verde");
colori.push("arancione");

console.log(colori);
/* Attenzione a non confondere metodi con proprietà dato che sono entrambe definite con il punto. 
La proprietà length è una proprietà dell'array, il numero di elementi nell'array. 
Non ha parentesi tonde dopo, dato che non è un metodo */

// I metodi sono verbi, sono azioni. Proprietà sono semplicemente caratteristiche
// ex. Mescolare l'impasto per fare una torta è un'azione - la quantità di farina nell'impasto è una proprietà

console.log(colori.length);

// pop è l'opposto di push, rimuove l'ultimo elemento

colori.pop();

// sort ordina gli elementi in ordine alfabetico

colori.sort();

// reverse inverte l'ordine degli elementi

colori.reverse();

// slice taglia l'array in una posizione, cancellando quello che viene dopo

var nuovoArray = colori.slice(2);

console.log(nuovoArray);