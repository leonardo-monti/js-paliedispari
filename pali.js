const parolaUtente = prompt("Inserisci una parola");

if (!isNaN(parolaUtente)) {
    alert("I numeri NON sono permessi");
} else {

    function isPalindroma(parola) {
        const parolaInversa = parola.split("").reverse().join("");
        if (parola === parolaInversa) {
            return true;
        }
        else {
            return false;
        }
    }
    const inserimento = isPalindroma(parolaUtente);

    if (inserimento) {
        alert("La parola è palindroma");
    } else {
        alert("La parola NON è palindroma");
    }
}
