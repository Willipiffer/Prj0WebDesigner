
var numeroIniziale = 36.4356385285625;

var numeroArrotondato = numeroIniziale.toFixed(2); // Arrotonda al dato numero di cifre decimali

console.log(numeroArrotondato);

console.log(numeroIniziale.toPrecision(3)); // Cifre significative specificate



// Cast del numero, forziamo una stringa a cambiare tipo e diventare numero

var num2 = "50";

var num2Vero = Number(num2);

console.log(typeof num2Vero);


// Cosa succede se "castiamo" un valore che non è un numero? Se possibile vengono trasformati in numero

var num3 = true;
var num4 = new Date();
var num5 = "123 456";

console.log(Number(num3)); // true equivale a 1, false a 0
console.log(Number(num4)); // 1665139392540 data in millisecondi
console.log(Number(num5)); // NaN = not a number



var num7 = 12.89;

console.log(parseInt(num7)); // parseInt trasforma un numero con virgola in numero intero - in questo caso 12

console.log(parseFloat(num7)); // manitene il numero con virgola


// isNaN restituisce un booleano per capire se quello che stiamo valutando è un numero o no

var numeroProva = "Marco";
console.log(isNaN(numeroProva)); // true

var numeroProva2 = 56;
console.log(isNaN(numeroProva2)); // false

var numeroProva3 = "56";
console.log(isNaN(numeroProva3)); // false, perchè dentro la stringa c'è comunque un numero
