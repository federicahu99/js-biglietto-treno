/*
1- Chiedo quanti chilometri deve percorrere.
2- Chiedo quanti hanni l'età del passeggiero.
3- Prezzo iniziale
4- Applicare sconti.
5- Mostro il prezzo nella pagina con due deccimali.
*/

/* Chiedo quanti km deve percorrere */
const kmPercorrenza = prompt('Quanti chilometri devi percorrere?');
console.log(kmPercorrenza);

/* Chiedo quanti anni ha l'user */
const etaViaggiatore = prompt('Quanti anni hai?');
console.log(etaViaggiatore);

/* Prezzo iniziale */
const costoIniziale = (kmPercorrenza * 0.21)
console.log(costoIniziale);

/* Mostro il prezzo all'user */
document.getElementById('prezzo-non-scontato').innerText = '€' + costoIniziale;

/* Applico sconti */

