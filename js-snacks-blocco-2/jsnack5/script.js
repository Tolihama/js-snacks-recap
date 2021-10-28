/* JSnack 5 - Blocco 2
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro. */

const randomElements = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'z'
]

const arrOne = [];
const arrTwo = [];
const maxLength = 20;

// Initial param
const arrOneLength = Math.floor(Math.random() * maxLength) + 1;
const arrTwoLength = Math.floor(Math.random() * maxLength) + 1;

// Initial random generation arrays
for (let i = 0; i < arrOneLength; i++) {
    arrOne.push(randomElements[Math.floor(Math.random() * (randomElements.length - 1))]);
}

for (let i = 0; i < arrTwoLength; i++) {
    arrTwo.push(randomElements[Math.floor(Math.random() * (randomElements.length - 1))]);
}

// Input array
console.log('Array di partenza:');
console.log(arrOne);
console.log(arrTwo);

// Equalize array
while (arrOne.length < arrTwo.length) {
    arrOne.push(randomElements[Math.floor(Math.random() * (randomElements.length - 1))]);
}
while (arrOne.length > arrTwo.length) {
    arrTwo.push(randomElements[Math.floor(Math.random() * (randomElements.length - 1))]);
}

// Output array
console.log('Array di output:');
console.log(arrOne);
console.log(arrTwo);

