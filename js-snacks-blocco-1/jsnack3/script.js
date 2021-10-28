/* JSnack 3
 Il software deve chiedere per 5 volte all’utente di inserire un numero.
 Il programma stampa la somma di tutti i numeri inseriti con for
 e opzionalmente con while (edited)  */

 const iterations = 5;
 let sum = 0;

// Alternativa con for
/*  for (let i = 0; i < iterations; i++) {
     sum += parseInt(prompt('Inserisci numero'));
 } */

// Alternativa con while
let i = 0;
while (i < iterations) {
    sum += parseInt(prompt('Inserisci numero'));
    i++;
}
 
 console.log(sum);