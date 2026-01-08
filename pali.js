const parolaUtente = prompt("Inserisci una parola");

function isPalindroma(parola) {
    const parolaInversa = parola.split("").reverse().join("");
    if (parola === parolaInversa) {
        return true;
    }
    else {
        return false;
    }
}