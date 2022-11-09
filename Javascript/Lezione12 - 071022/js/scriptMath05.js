// Math.random() calcola un numero casuale tra 0 e 1 
// Se mi serve ad esempio un numero casuale tra 0 e 10, posso semplicemente moltiplicare il math random per 10 o per qualsiasi altro numero

var numeroCasuale = Math.random() * 425;

console.log(numeroCasuale);

// metodo ceil arrotonda all'intero superiore (per eccesso)

var num = 10.48

console.log(Math.ceil(num))

// metodo floor arrotonda all'intero inferiore (per difetto)

console.log(Math.floor(num));

// voglio ottenere un numero casuale tra 1 e 10, avvolgo il math.random con il math.ceil

console.log(Math.ceil(Math.random() * 10));

// Moltiplicando per un numero di verse possiamo espandere o ridurre il tetto massimo

console.log(Math.ceil(Math.random() * 90))

// Math.round() fa un arrotondamento in base ai decimali - a o sopra lo 0.50 arrotonda in eccesso, sotto lo 0.50 arrotonda in difetto

var num2 = 7.50;

console.log(Math.round(num2));