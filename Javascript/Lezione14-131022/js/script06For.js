

// i++ = prima viene letto il valore della variabile, e poi viene aumentato
// ++i = prima viene aumentato il valore della variabile, poi viene letta
// i-- = prima viene letto il valore della variabile, e poi viene diminuito
// --i = prima viene diminuito il valore della variabile, poi viene letta

var eta = 30;

console.log(eta++); // La variabile viene stampata con il suo valore iniziale, poi viene aumentata


var ore = 11;
console.log(++ore); // La variabile viene prima aumentata, e poi stampata nella console

// I cicli vengono usati per ripetere un dato blocco di codice dentro le parentesi graffe finchè la condizione che diamo al ciclo è VERA

console.log("-----------------------Ciclo-------------------");

for(var i = 0; i < 10; i++) {
    console.log(i);
}

// var i = 0; inizializzazione, creiamo una variabile chiamata i
// i < 10; condizione, il ciclo si ripete finchè i è minore di 10, poi si ferma
// i++ aumento, ad ogni ciclo la i aumenterà di 1

// Ad ogni "giro" verrà eseguito il codice nelle graffe e il valore di i aumenterà di 1. Dopo dieci cicli, il valore di i sarà 10 e il ciclo smetterà di funzionare

// 10° giro: i = 9, 9 < 10, i++ e la var i aumenta di uno
// 11° giro: i = 10, 10 < 10 è false, per cui il ciclo si ferma.


// ciclo inverso

console.log("------------------Ciclo Inverso-------------");

for(var i = 10; i > 0; i--) {
    console.log(i);
}

// In questo caso invece che cominciare da 0 e "contare" fino a 10, questo ciclo comincia fa un conto alla rovescia da 10 a 0


// Leggere un Array

console.log("-----Elenco Studenti in ordine Alfabetico------");

var studenti = ["Marco", "Cinzia", "Isa", "Pietro", "Riccardo", "Roberta", "Roberto", "Olga", "Lorenzo", "Luigi", "Jona", "Elena", "Ali"];

studenti.sort();

for(var i = 0; i < studenti.length; i++) {
    console.log(studenti[i]);
}

// Come con il ciclo inverso, possiamo leggere l'elenco all'inverso

console.log("-------------Elenco invertito------------");

for(var i = studenti.length - 1; i >= 0; i--) {
    console.log(studenti[i]);
}

// studenti.length - 1 è necessario perchè la lunghezza dell'array è 8, ma l'ultima posizione è 7 dato che gli array sono 0-based

var demo = document.getElementById('demo');

for(var i = 0; i < studenti.length; i++) {
    demo.innerHTML += "<li>" + studenti[i] + "</li>";
}