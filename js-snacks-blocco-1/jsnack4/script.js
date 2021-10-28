/* JSnack 4
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array */

const numArr = [];
const lengthArr = 6;

for (let i = 0; i < lengthArr; i++) {
    const input = parseInt(prompt('Inserire un numero'));
    if (input % 2 !== 0) {
        numArr.push(input);
    }
}

console.log(numArr);