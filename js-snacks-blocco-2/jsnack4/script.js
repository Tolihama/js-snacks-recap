/* JSnack 4 - Blocco 2
Crea un array di numeri interi
e fai la somma di tutti gli elementi che sono in posizione dispari
Javascript - JS */

const numArr = [];
const numArrLength = 10;
const min = 0;
const max = 100;

// Random numArr generator
for (let i = 0; i < numArrLength; i++) {
    numArr.push(Math.floor(Math.random() * max) + min);
}

// Sum num with odd indexes
let sum = 0;
for (let i = 0; i < numArr.length; i++) {
    if (i % 2 !== 0) {
        sum += numArr[i];
    }
}
console.log(numArr);
console.log(sum);
