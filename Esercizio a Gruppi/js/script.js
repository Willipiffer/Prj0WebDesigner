
var carte = document.getElementById("galleriaCarte");

function Foto(url, titolo, prezzo, quantita, id){
    this.url = url;
    this.titolo = titolo;
    this.prezzo = prezzo;
    this.quantita = quantita;
    this.id = id;

    this.cardFoto = function(){
        var card = '<div class="col-3"><div class="card" style="width : 18rem;"><img src="' + this.url + '" class="card-img-top"><div class=card-body"><h5 class="card-title m-3">' + this.titolo + '</h5><p class="card-text m-3">Prezzo: €' + this.prezzo + '<br>Quantità rimanente: ' + this.quantita + '</p><a href="#" class="btn btn-primary m-3" id="button' + this.id + '">Acquista</button></div></div></div>'
        return card;
    }
}

var galleria = [
    new Foto("https://source.unsplash.com/300x300/?cat", "Foto Gatto", 5, 10, 1),
    new Foto("https://source.unsplash.com/300x300/?dog", "Foto Cane", 7, 12, 2),
    new Foto("https://source.unsplash.com/300x300/?sea", "Foto Mare", 10, 7, 3),
    new Foto("https://source.unsplash.com/300x300/?flower", "Foto Fiore", 12, 4, 4),
    new Foto("https://source.unsplash.com/300x300/?car", "Foto Macchina", 5, 5, 5),
    new Foto("https://source.unsplash.com/300x300/?fruit", "Foto Frutta", 10, 5, 6),
    new Foto("https://source.unsplash.com/300x300/?piano", "Foto Pianoforte", 500, 1, 7),
    new Foto("https://source.unsplash.com/300x300/?guitar", "Foto Chitarra", 2, 50, 8)
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
    var prezzo = Number(document.getElementById("prezzoImg").value);
    var quantita = Number(document.getElementById("quantitaImg").value);
    var id = galleria.length + 1;

    var foto = new Foto(url, titolo, prezzo, quantita, id);
    galleria.push(foto);

    stampaFoto();

    document.getElementById("linkImg").value = "";
    document.getElementById("titoloImg").value = "";
    document.getElementById("prezzoImg").value = "";
    document.getElementById("quantitaImg").value = "";

    console.log(galleria);
}


var button = document.getElementById("button");
button.onclick = aggiungiFoto;