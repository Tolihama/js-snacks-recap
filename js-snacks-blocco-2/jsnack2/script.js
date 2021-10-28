/* JSnack 2 - Blocco 2
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo
Javascript - JS */

const input = parseInt(prompt('Inserisci un numero'));

if (input % 2 === 0) {
    console.log(input);
} else {
    console.log(input + 1);
}