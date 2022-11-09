
// creo un array con i punteggi
var punteggi = [25, 30, 22, 21, 53, 32, 18];

// recupero il tag ul
var lista = document.getElementById('listaPunti');

for(i = 0; i < punteggi.length; i++) {

    if(punteggi[i] < 25){
        lista.innerHTML += "<li>" + punteggi[i] + " - questo round è andato male!" + "</li>";
    }else if(punteggi[i] >= 30){
        lista.innerHTML += "<li>" + punteggi[i] + " - questo round è andato BENISSIMO!"+ "</li>";
    }else{
        lista.innerHTML += "<li>" + punteggi[i] + "</li>";
    }
}


// Impostare un'altra condizione: se il punteggio è inferiore a 18, scrivi "Il round è andato MALISSIMO"

// Sotto la lista dei punteggi fai sapere all'utente se ha vinto al gioco oppure no
// L'utente perde se ha più di due punteggi sotto il 18

var punteggi2 = [25, 30, 22, 21, 53, 32, 18, 16]

var response = document.getElementById('response')

for (var i = 0; i < punteggi2.length; i++) {


    if(punteggi2[i] < 25){
        l.innerHTML += "<li>" + punteggi2[i] + " - questo round è andato male!" + "</li>";
    }else if(punteggi[i] >= 30){
        lista.innerHTML += "<li>" + punteggi2[i] + " - questo round è andato BENISSIMO!"+ "</li>";
    }else{
        lista.innerHTML += "<li>" + punteggi2[i] + "</li>";
    }

    if(punteggi[i] == 18){
        var gameOver = 0;
        gameOver++
    }

    if (gameOver > 2) {
        response.innerHTML = "Hai perso!"
    }else{
        response.innerHTML = "Hai vinto!"
    }
}