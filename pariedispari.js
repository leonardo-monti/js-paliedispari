const sceltaUtente = prompt("Pari o dispari?");

const numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));

function randomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}
const numeroCpu = randomNumber();

function isPari(numero) {
    if (numero % 2 === 0) {
        return "pari";
    }
    else {
        return "dispari";
    }
}

const risultato = isPari(numeroUtente + numeroCpu);

if (risultato === sceltaUtente) {
    alert("Hai vinto");
} else {
    alert("Hai perso");
}