
// Fare i controlli sull'inserimento
// Segnare al fondo della pagina quante cose abbiamo da fare

var btn = document.getElementById('btn'); // recupero il button

var item; // singola cosa da fare
var lista = []; // lista completa
var divLista = document.getElementById('lista');
var divFeedback = document.getElementById('feedback');

// Prendo quello che scrive l'utente e lo inserisco nella lista

function prendiItem(){
    item = document.getElementById('item').value;

    if(controlla(item)){
    lista.push(item);
    stampa(lista);
    }
}

function stampa(lista){
    // Pulisco ogni volta il div lista, in modo che elementi precedenti non vengono ripetuti ogni volta che stampo la lista
    divLista.innerHTML = "";
    for(var i = 0; i < lista.length; i++){
        divLista.innerHTML += "<li>" + lista[i] + " - <button onclick='elimina(item)'>Elimina</button></li>";
    }
}

function controlla(item){
    divFeedback.innerHTML = "";

    // if(item.trim() == ""){
    //     divFeedback.innerHTML = "<b style='color:red'>Non hai inserito niente!</b>";
    // }else if(lista.indexOf(item) != -1){
    //     divFeedback.innerHTML = "<b style='color:red'>Questo lo hai già scritto!</b>";
    // }else{
    //     lista.push(item);
    // }

    if(item.trim() == "" || lista.indexOf(item) != -1){
        divFeedback.innerHTML = "<b style='color:red'>Non hai inserito niente oppure ti sei ripetuto!</b>";
        return false;
    }else{
        return true;
    }
}

// Trasferisco l'evento onclick nel mio script. ATTENZIONE! Quando richiamo la funzione in questo caso non devo utilizzare le parentesi tonde altrimenti la funzione parte non appena inizia lo script anzichè quando il bottone viene cliccato
btn.onclick = prendiItem;