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

alert("Questi sono i 5 numeri che devi ricordare: " + numeri);


// FUNZIONI

// Funziione che crea numeri casuali
function numbersRandom(min, max){
    return risultato = Math.floor(Math.random() * max - min + 1) + min; 
}