

var listaDiCose = ["Zaino", "PC", "Telefono", "Occhiali", "Portafogli"];

var elMiaLista = document.getElementById("miaLista");

// ciclo "for in", For semplificato - Il FOR esegue per un numero definito di volte una data operazione. In questo caso eseguirà l'operazione tante volte quanti sono gli elementi dentro il nostro array

for(var indice in listaDiCose){
    elMiaLista.innerHTML += listaDiCose[indice] + "<br>";
}

