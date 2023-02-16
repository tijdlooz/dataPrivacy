var progressPercentage = document.getElementById("progressPercentage");
var progressBar = document.getElementById("progressbar");
var volgendeButton = document.getElementById("volgende");

var plaatje = document.getElementById("plaatje")
var kop = document.getElementById("kop");
var uitleg = document.getElementById("uitleg");
var input = document.getElementById("name");

var fileName = location.href.split("/").slice(-1); 
console.log(fileName);



if(fileName == "index.html"){
    var closePopup = document.getElementById("closePopup");
    var closePopup2 = document.getElementById("closePopup2");
    closePopup.addEventListener("click", function(){
        document.getElementById("popUp").style.display = "none";
    });

    closePopup2.addEventListener("click", function(){
        document.getElementById("popUp").style.display = "none";
    });
} else if(fileName == "naam.html"){
 //progress
 progressBar.value = 16;
 progressPercentage.innerHTML = progressBar.value + "%";

 //info
 plaatje.src = "images/icon_naam.png";
 kop.innerHTML = "Wat is je naam?";
 uitleg.innerHTML = "Vul hieronder je volledige naam in, druk vervolgends op volgende om door te gaan."
 
 //input field
 input.placeholder = "Volledige Naam";
 input.name = "name";
} else if(fileName == "geboorteDatum.html"){
 //progress
 progressBar.value = 32;
 progressPercentage.innerHTML = progressBar.value + "%";

 //info
 plaatje.src = "images/icon_geboortedatum.png";
 kop.innerHTML = "Wat is je geboortedatum?";
 uitleg.innerHTML = "Vul hieronder je geboortedatum in, druk vervolgends op volgende om door te gaan."
 
 //input field
 input.placeholder = "Geboorte Datum";
 input.name = "Geboorte Datum";
} else if(fileName == "telefoonNummer.html"){
    //progress
 progressBar.value = 48;
 progressPercentage.innerHTML = progressBar.value + "%";

 //info
 plaatje.src = "images/telefoon.png";
 kop.innerHTML = "Wat is je telefoonnummer?";
 uitleg.innerHTML = "Vul hieronder je telefoonnummer in dan kunnen we in de toekomst contact met je opnemen over ons onderzoek, druk vervolgends op volgende om door te gaan."
 
 //input field
 input.placeholder = "Telefoon nummer";
 input.name = "Telefoon nummer";
} else if(fileName == "onlineDelen.html"){
        //progress
 progressBar.value = 64;
 progressPercentage.innerHTML = progressBar.value + "%";

 //info
 plaatje.src = "images/icon_data.png";
 kop.innerHTML = "Denk je na over wat je online deel?";
 uitleg.innerHTML = "Wat deel je vaak online, ben je actief op sociale media? Vul hieronder het antwoord in, druk vervolgends op volgende om door te gaan.";
 
 //input field
 input.placeholder = "Typ hier je tekst";
 input.name = "online delen";
} else if(fileName == "email.html"){
    //progress
progressBar.value = 80;
progressPercentage.innerHTML = progressBar.value + "%";

//info
plaatje.src = "images/icon_email.png";
kop.innerHTML = "Wat is je e-mailadres?";
uitleg.innerHTML = "Vul hieronder je e-mailadres in dan kunnen we in de toekomst contact met je opnemen over ons onderzoek, druk vervolgends op volgende om door te gaan.";

//input field
input.placeholder = "E-mailadres";
input.name = "email";
} else if(fileName == "woonplaats.html"){
    //progress
progressBar.value = 100;
progressPercentage.innerHTML = progressBar.value + "%";

//info
plaatje.src = "images/icon_woonplaats.png";
kop.innerHTML = "Wat is je woonplaats?";
uitleg.innerHTML = "Vul hieronder je woonplaats in, druk vervolgends op volgende om door te gaan.";

//input field
input.placeholder = "Woonplaats";
input.name = "woonplaats";
}
