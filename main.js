// Un alert() espone 5 numeri generati casualmente.
var numero;
var numeri = [];

// Richiamo la funzione della creazione di numeri casuali, ne faccio creare 5 (con valore da uno a 100) e evito le ripetizioni 

while(numeri.length < 5){
    var numero = numbersRandom(1, 100);
    if(numeri.includes(numero) == false){
        numeri.push(numero);
    }
}
console.log(numeri)

alert("Questi sono i 5 numeri che devi ricordare: " + numeri);

// Da li parte un timer di 30 secondi.
setTimeout(memorizzazione, 30000);
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
var i = 0;
var numeriUtente;
var numeriGiusti = [];

function memorizzazione(){
    for(i = 0; i < numeri.length; i++){
        numeriUtente = parseInt(prompt("Inserisci i numeri che hai visto in precendenza: "));
        if(isInArray(numeri, numeriUtente) == true){
            numeriGiusti.push(numeriUtente);     
        }
        // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
        alert("Hai indovinato: " + numeriGiusti.length);
        console.log("Hai indovinato: " + numeriGiusti.length);
        alert('I numeri che hai indovinato sono: ' + numeriGiusti);
        console.log('I numeri che hai indovinato sono: ' + numeriGiusti);
    }
}

// FUNZIONI

// Funziione che crea numeri casuali
function numbersRandom(min, max){
    return risultato = Math.floor(Math.random() * max - min + 1) + min; 
}

//Funzione che permette di controllare se un elemento è presente nell'array
function isInArray(array, element){
    if(array.includes(element)){
        return true;
    }
    return false;
}