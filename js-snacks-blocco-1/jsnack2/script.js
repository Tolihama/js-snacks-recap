/* JSnack 2
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

const wordOne = prompt('Inserire parola 1');
const wordTwo = prompt('Inserire parola 2');

if (wordOne.length === wordTwo.length) {
    console.log('Le due parole hanno stessa lunghezza.', 'Parola 1:', wordOne, 'Parola 2:', wordTwo);
} else if (wordOne.length < wordTwo.length) {
    console.log(wordOne, wordTwo);
} else {
    console.log(wordTwo, wordOne);
}