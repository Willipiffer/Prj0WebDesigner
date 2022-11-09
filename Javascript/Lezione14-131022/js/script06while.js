// while appartiene alla famiglia dei cicli, ed esegue quello che si trova tra parentesi graffe finchè la condizione specificata da rispettare è true

// La sintassi è la seguente

// while(condizione) {
//     codice per fare qualcosa
// }

var i = 1;

// while(i < 10) {
//     console.log(i + " - non sono ancora arrivato a dieci");
//     i++;
// }


// while(i <= 10){
//     console.log(i + " x 2 = " + (i * 2));
//     i++;
// }


// Il do while funziona in modo simile, ma questo ciclo assicura che il codice venga eseguito almeno una volta prima che la condizione per i cicli successivi venga controllata

do{
    console.log("la mia i vale: " + i);
    i++;
}while(i<1);