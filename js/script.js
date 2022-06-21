/*
1- Chiedo quanti chilometri deve percorrere.
2- Chiedo l'età del passeggero.
3- Prezzo iniziale.
4- Applicare sconti.
5- Mostro il prezzo nella pagina con due decimali.
*/

/* Chiedo quanti km deve percorrere */
const kmPercorrenza = prompt('Quanti chilometri devi percorrere?');
console.log(kmPercorrenza);

/* Chiedo quanti anni ha l'user */
const etaViaggiatore = prompt('Quanti anni hai?');
console.log(etaViaggiatore);

/* Prezzo iniziale */
const costoIniziale = (kmPercorrenza * 0.21).toFixed(2);
console.log(costoIniziale);

/* Mostro il prezzo all'user */
document.getElementById('prezzo-non-scontato').innerText = '€' + costoIniziale;

/* Applico sconti e mostro numeri con solo due decimali dopo la virgola */

if ( etaViaggiatore < 18 ) {
    let prezzoGiovani = (costoIniziale * 0.8);
    console.log(prezzoGiovani);
    document.getElementById('nuovo-prezzo').innerText = 'Nuovo prezzo scontato:' + '  ' + '€' + prezzoGiovani.toFixed(2);

} else if ( 65 < etaViaggiatore ) {
    let prezzoOver = (costoIniziale * 0.6 );
    console.log(prezzoOver);
    document.getElementById('nuovo-prezzo').innerText = 'Nuovo prezzo scontato:' + '  ' + '€' + prezzoOver.toFixed(2);
}
