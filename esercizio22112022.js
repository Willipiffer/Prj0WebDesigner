//creo una funzione di controllo

var mioForm = document.querySelector("#mioForm");
var feedBack = document.querySelector("#feedBack");

//questa funzione validerà tutti i campi
function validate(){
    feedBack.textContent = "";
    checkNomeCognome();
    checkCodFis();
    checkEmail();
    checkCap();
    checkSelect();

    if (checkNomeCognome() && checkCodFis() && checkSelect() && checkEmail() && checkCap()){
       componiUser();
    }
    

};

function checkNomeCognome(){
var nome = document.querySelector("#nome").value;
var cognome = document.querySelector("#cognome").value;
if (nome.trim() == "" || cognome.trim() == ""){
    event.preventDefault();
    feedBack.setAttribute("class", "txtOrange");
    feedBack.innerHTML += "Hai dimenticato il nome o il cognome <br>";
    return false;

}else{
    return true;
}

};

//formatoCodFis è una regex = regular expression
const formatoCodFis = /^[A-Z]{6}[0-9]{2}[A-Z][0-9]{2}[A-Z][0-9]{3}[A-Z] *$/i

function checkCodFis(){

    var codFis = document.querySelector('#codFis').value;

    if (codFis.trim()== ""){
        event.preventDefault();
        feedBack.setAttribute("class", "txtRed");
        feedBack.innerHTML += "Inserisci il tuo codice fiscale <br> ";
        return false;

    }else if(codFis.match(formatoCodFis)){
        console.log("bravo");
        return true;

    }else if(!codFis.match(formatoCodFis)){      
        event.preventDefault();
        feedBack.setAttribute("class", "txtRed");
        feedBack.innerHTML +=" Il codice fiscale inserito non è corretto <br> "; 
        return false;
       
    }

    
};




var formatoMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

function checkEmail(){
    var email = document.querySelector("#email").value;
    if (email.trim() == ""){
        event.preventDefault();
        feedBack.setAttribute("class", "txtRed");
        feedBack.inn += "Hai dimenticato la mail <br>";
        return false;


    }else if(email.match(formatoMail)){
        console.log("mail ok");
        return true;
    }
    
    else if(!email.match(formatoMail)){
        event.preventDefault();
        feedBack.setAttribute("class", "txtRed");
        feedBack.innerHTML += "Hai inserito una mail non valida <br>";
        return false;
    }
};




var formatoCap = /^[0-9]{5}$/;

function checkCap(){
    
    var cap = document.querySelector("#cap").value;    
    if(cap.trim() == ""){
        event.preventDefault();
        feedBack.setAttribute("class", "txtRed");
        feedBack.innerHTML += "Hai dimenticato di inserire il Cap <br>";
        return false;

    }else if(cap.match(formatoCap)){
    console.log("OK");
   return true;

    
       
    }else if(!cap.match(formatoCap)) {
        console.log("Inserisci cap corretto");
        event.preventDefault();
        feedBack.setAttribute("class", "txtRed");
        feedBack.innerHTML += "Inserisci un cap corretto <br>";
        return false;
    }

    }
 



function checkSelect(){

    var tipoUser = document.querySelector("#tipoUser").value;

    if (tipoUser == -1){
        event.preventDefault();
        feedBack.innerHTML += "Scegli il tipo di abbonamento <br>";
        return false;
    }else{
        return true;
    }

};

var prezzoUtenza = document.querySelector("#prezzoUtenza");


function stampaPrezzo(){
    var tipoUser = document.querySelector("#tipoUser");
    var scelta = tipoUser.value;
    console.log(tipoUser.value);
    if(scelta == "base" ){
        prezzoUtenza.textContent = "Costo: 8€ / mese"
    }else if (scelta == "premium"){
        prezzoUtenza.textContent = "Costo : 15€ / mese"
    }else if( scelta == "platinum"){
        prezzoUtenza.textContent = "Costo : 50€ / mese"
    }else{
        prezzoUtenza.textContent = "";
    };
        
   
};

tipoUser.addEventListener("change", stampaPrezzo, false)

mioForm.addEventListener("submit", componiUser, false);

mioForm.addEventListener("submit", validate, false);


//controlla mail cap e stampa un avviso per ogni campo che viene dimenticato



//lezione 21.11.2022


// voglio comporre un oggetto con le info dell'utente appena registrato
//Trasformo queste informazioni in formato JSON e le salvo all'interno della local storage
function Utente(nome, cognome, email, cap, tipoUser, codFis){
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.cap = cap;
    this.tipoUser = tipoUser;
    this.codFis = codFis;
}

function componiUser(){
    var nome = document.querySelector('#nome').value;
    var cognome = document.querySelector('#cognome').value;
    var email = document.querySelector('#email').value;
    var cap = document.querySelector('#cap').value;
    var tipoUser = document.querySelector('#tipoUser').value;
    var codFis = document.querySelector('#codFis').value;

    var user = new Utente(nome, cognome, email, cap, tipoUser, codFis);

    var userDaSalvare = JSON.stringify(user);

    localStorage.setItem('user', userDaSalvare);
}

//dopo, vado a prendere il nome e il cognome dell'utente appena registrato e lo saluto in un'altra pagina.