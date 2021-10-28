/* Bonus pomeriggio (28 ottobre 2021)
Ogni volta che si clicca un bottone, il nostro programma chiederà un numero di 4 cifre all’utente.
Se l’utente ha inserito un numero corretto, allora il programma calcolerà la somma e le media di tutte le cifre che lo compongono stampandola nel DOM, altrimenti ripeterà la richiesta di inserimento finché non avrà inserito un numero corretto. */

// DOM ref
const btnScriptActivate = document.getElementById('script-activate');
const scriptOutput = document.getElementById('script-output');

// Btn Script
btnScriptActivate.addEventListener('click', function() {
    // Var init
    let number = 0;
    let sum = 0;
    let media = 0;

    // Number input
    do {
        number = prompt('Inserisci un numero di quattro cifre.').trim();
    } while (number.length !== 4);

    // Sum
    for (let i = 0; i < number.length; i++) {
        sum += parseInt(number[i]);
    }

    // Media
    media = sum / number.length;

    // Output
    scriptOutput.innerHTML = `
    <div>Numero inserito: ${number}</div>
    <div>Somma: ${sum}</div>
    <div>Media: ${media}</div>`;
});