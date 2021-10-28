/* JSnack 3 - Blocco 2
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
Javascript - JS */


// Names and Surnames lists
const names = [
    'Paolo',
    'Francesco',
    'Pierfrancesco',
    'Luigi',
    'Luca',
    'Daniele',
    'Aurora',
    'Eleonora',
    'Vittorio',
    'Calogero',
    'Bruno',
    'Jacopo',
    'Elena',
    'Sofia',
    'Federico',
    'Alessandro'
]

const surnames = [
    'Duzioni',
    'Marino',
    'Ragusa',
    'Scarinci',
    'Grippaudo',
    'Potente',
    'Labianca',
    'Bonito',
    'Nannetti',
    'Ferroni',
    'Russo',
    'Vanoli'
]

// Script param
const nGuest = 3;

// Guests random generator
for (let i = 0; i < nGuest; i++) {
    const randNameIndex = Math.floor(Math.random() * (names.length - 1));
    const randSurnameIndex = Math.floor(Math.random() * (surnames.length - 1));
    console.log(`${names[randNameIndex]} ${surnames[randSurnameIndex]}`);
}
