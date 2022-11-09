
// saluta();
// chiediQualcosa();

// Utilizziamo le funzioni per raggruppare tutte le istruzioni per eseguire un compito, così che possiamo richiamarle ed eserguirle in un secondo momento

// dichiariamo una funzione

function saluta (){
    console.log("Ciao!");
}

function chiediQualcosa() {
    console.log("Quanti anni hai?");
}

// Solo dichiarare una funzione non significa eseguirla: le funzioni vengono eseguite solo se "richiamate" usando il loro nome e la loro "firma" (le parentesi tonde e i parametri, se ci sono)

chiediQualcosa();
saluta();

// L'ordine dei richiami della funzione detta l'ordine di esecuzione, non la dichiarazione; e dato che il codice viene letto in blocco, è possibile richiamare una funzione prima di dichiararla, anche se questo non viene fatto per rendere il codice più leggibile


// Possiamo impostare il nome dei parametri (nelle parentesi tonde) quando dichiariamo la funzione, e poi dar loro un valore quando richiamiamo la funzione (il primo valore sarà assegnato al primo parametro e così via):

 function scriviInDemo(nomeUtente, cognomeUtente){
    // Le variabili dichiarate dentro funzioni sono dette "locali" e possono essere usate solamente all'interno delle loro variabili - da notare il colore del nome diverso dal normale
    var miaVariabile = document.getElementById("demo");
    miaVariabile.innerHTML = "<h2>Ciao " + nomeUtente + " " + cognomeUtente + "!</h2>";
 }

 scriviInDemo("Marco", "Tani");

//  console.log(miaVariabile); Questo non funzionerà perchè la variabile è locale e il console.log è fuori dalla sua funziona


 /* -------------------------------------------------------------------------- */
 /*                             Funzione con return                            */
 /* -------------------------------------------------------------------------- */

 function calcolaArea (altezza, larghezza){
        var area = altezza * larghezza;
        // console.log(area);

        // con return "emetto" un output (o risultato) cioè porto fuori il valore dalla funzione
        return area;
 }

 calcolaArea(4,5);

 // Intercetto il valore in uscita di "area" salvandolo in una variabile

 var areaRettangolo = calcolaArea(4,5);

 // e adesso posso usarlo come e dove voglio

 console.log(areaRettangolo);

 demo.innerHTML = "<br>" + areaRettangolo;

 // oltre a poter creare altre variabili con i parametri che voglio e farci quello che mi pare!

 var areaRettangolo1 = calcolaArea(8,10);
 var areaRettangolo2 = calcolaArea(2,6);

 console.log("L'area del rettangolo 1 è: " + areaRettangolo1);
 console.log("L'area del rettangolo 2 è: " + areaRettangolo2);

 //////////////////////////////////////////////////////

 function saluta2 (nome, cognome){
    var saluto = "Ciao " + nome + " " + cognome + "!";
    return saluto;
 }
 
 var saluto1 = saluta2("Marco", "Tani"); // E' possibile utilizzare lo stesso nome per una variabile locale e globale, ma è buona abitudine non farlo

 console.log(saluto1);




 