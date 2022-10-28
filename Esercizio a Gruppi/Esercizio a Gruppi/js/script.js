


function Foto(url, titolo, prezzo, quantita){
    this.url = url;
    this.titolo = titolo;
    this.prezzo = prezzo;
    this.quantita = quantita;

    this.cardFoto = function(){
        var card = '<div class="col-3"><div class="card" style="width : 18rem;"><img src="' + this.url + '" class="card-img-top"><div class=card-body"><h5>' + this.titolo + '</h5><p>Prezzo: €' + this.prezzo + '</p><a href="#" class="btn btn-primary">Quantità rimanente: ' + this.quantita + '</button></div></div></div>'
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

var carte = document.getElementById("galleriaCarte");
galleria.forEach(foto => {
    carte.innerHTML += foto.cardFoto();
});