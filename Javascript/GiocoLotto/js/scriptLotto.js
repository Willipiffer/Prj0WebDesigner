function lotto() {
    var numeri = [];
    var quantiNumeri = document.getElementById("numeroLotto").value;

    var risultato = document.getElementById("campoRisultato");
    risultato.innerHTML = "";
    var errore = document.getElementById("numeroLotto");
    errore.removeAttribute("class");

    if (quantiNumeri >= 1 && quantiNumeri <= 10) {
        for (var i = 0; i < quantiNumeri; i++) {
            var numero = Math.ceil(Math.random() * 90);
            if (numeri.indexOf(numero) == -1) {
                numeri.push(numero);
                risultato.innerHTML += "<b class=bordoNumero>" + numero + "</b>";
            } else {
                i--;
            }
        }
    } else if (quantiNumeri.trim() == "") {
        risultato.innerHTML = "<br><b style=color:red>Non hai inserito niente!</b>";
        errore.setAttribute("class", "bordoRosso");
    } else {
        risultato.innerHTML = "<br><b style=color:red>Per favore scegli un numero tra 1 e 10</b>";
        errore.setAttribute("class", "bordoRosso");
    }
    document.getElementById("numeroLotto").value = "";
}