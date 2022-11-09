// E' possibile richiamare funzioni all'interno di altre funzioni

// function salutaUtente() {
//     var demo = document.getElementById("demo");

//     var nomeUtente = recuperaNomeUtente();

//     demo.innerHTML = "<h2>Ciao " + nomeUtente + "!</h2>";
// }

// function recuperaNomeUtente(){
//     var nomeUtente = prompt("Come ti chiami?");
//     return nomeUtente; // output
// }


// Calcola il volume

function calcolaArea(altezza, larghezza){
    var area = larghezza * altezza;
    return area;
}

function calcolaVolume(altezza, larghezza, profondita){
    var area = calcolaArea(altezza, larghezza);
    var volume = area * profondita;
    return volume;
}

console.log(calcolaVolume(8, 10, 2));


// Recupero il nome utente dal tag input
// demo possiamo recuperarlo anche fuori dalla funzione, dato che è un elemento statico dell'html con cui l'utente non interagisce

// var demo = document.getElementById("demo");

// function saluta(){
//     // DENTRO la funzione si recuperano i valori dei campi input (i value)
//     // Perchè quando lo script viene lanciato, l'utente ancora non ha scritto
//     // Dentro la funzione, possiamo decidere di recuperare il valore solo una volta che l'utente ha inserito il value
//     // con il .value al termine del metodo, recupero quello che ha scritto l'utente
//     var nomeUtente = document.getElementById('nomeUtente').value;
//     // console.log("Ciao " + nomeUtente + "!");
//     demo.innerHTML = "<h2>Ciao " + nomeUtente + "!</h2>";
// }



var demo = document.getElementById("demo");

function saluta(){
    var nomeUtente = document.getElementById("nomeUtente").value;
    var cognomeUtente = document.getElementById("cognomeUtente").value;

// Prendo i campi input per applicargli dinamicamente le classi

var inputNome = document.getElementById("nomeUtente");
var inputCognome = document.getElementById("cognomeUtente");

// Rimuovo la classe inizialmente con removeAttribute, in modo che se il bordo di uno dei campi è attualmente rosso, si resetta se l'utente ha scritto qualcosa

inputNome.removeAttribute("class");
inputCognome.removeAttribute("class");

    if(nomeUtente.trim() == "" && cognomeUtente.trim() == ""){
        // demo.innerHTML = "<h2>Non hai inserito un nome!</h2>";
        demo.innerHTML = "<h2>Hai dimenticato tutti i campi!</h2>";
        inputNome.setAttribute("class", "bordoRed");
        inputCognome.setAttribute("class", "bordoRed");
    }else if(nomeUtente.trim() == "" && cognomeUtente.trim() != ""){
        demo.innerHTML = "<h2>Hai dimenticato il nome!</h2>";
        inputNome.setAttribute("class", "bordoRed");
    }else if(nomeUtente.trim() != "" && cognomeUtente.trim() == ""){
        demo.innerHTML = "<h2>Hai dimenticato il cognome!</h2>"
        inputCognome.setAttribute("class", "bordoRed");
    }else{
        demo.innerHTML = "<h2>Ciao " + nomeUtente + " " + cognomeUtente + "!</h2>"
        // pulisco i campi di testo
        // attenzione: non basta resettare la var stessa, ma dobbiamo cancellare il valore dei campi di testo così che non rimanga il testo sulla pagina
        document.getElementById("nomeUtente").value = "";
        document.getElementById("cognomeUtente").value = "";
    }

}