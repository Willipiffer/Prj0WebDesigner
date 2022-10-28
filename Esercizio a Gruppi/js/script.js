
var carte = document.getElementById("galleriaCarte");

function Foto(url, titolo, prezzo, quantita){
    this.url = url;
    this.titolo = titolo;
    this.prezzo = prezzo;
    this.quantita = quantita;

    this.cardFoto = function(){
        var card = '<div class="col-3"><div class="card" style="width : 18rem;"><img src="' + this.url + '" class="card-img-top"><div class=card-body"><h5 class="card-title m-3">' + this.titolo + '</h5><p class="card-text m-3">Prezzo: €' + this.prezzo + '<br>Quantità rimanente: ' + this.quantita + '</p><a href="#" class="btn btn-primary m-3">Acquista</button></div></div></div>'
        return card;
    }
}

var galleria = [
    new Foto("https://source.unsplash.com/300x300/?cat", "Foto Gatto", 5, 10),
    new Foto("https://source.unsplash.com/300x300/?dog", "Foto Cane", 7, 12),
    new Foto("https://source.unsplash.com/300x300/?sea", "Foto Mare", 10, 5),
    new Foto("https://source.unsplash.com/300x300/?flower", "Foto Fiore", 12, 3),
    new Foto("https://source.unsplash.com/300x300/?car", "Foto Macchina", 5, 5),
    new Foto("https://source.unsplash.com/300x300/?fruit", "Foto Frutta", 10, 25),
    new Foto("https://source.unsplash.com/300x300/?piano", "Foto Pianoforte", 500, 1),
    new Foto("https://source.unsplash.com/300x300/?guitar", "Foto Chitarra", 2, 50)
]


function stampaFoto(){
    carte.innerHTML = "";
    galleria.forEach(foto => {
        carte.innerHTML += foto.cardFoto();
})
};

stampaFoto();

function aggiungiFoto(){

    var url = document.getElementById("linkImg").value;
    var titolo = document.getElementById("titoloImg").value;
    var prezzo = document.getElementById("prezzoImg").value;
    var quantita = document.getElementById("quantitaImg").value;

    var foto = new Foto(url, titolo, prezzo, quantita);
    galleria.push(foto);

    stampaFoto();

    document.getElementById("linkImg").value = "";
    document.getElementById("titoloImg").value = "";
    document.getElementById("prezzoImg").value = "";
    document.getElementById("quantitaImg").value = "";
}


var button = document.getElementById("button");
button.onclick = aggiungiFoto;