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
const costoIniziale = (kmPercorrenza * 0.21);
console.log(costoIniziale);

/* Mostro il prezzo all'user */
document.getElementById('prezzo-non-scontato').innerText = '€' + costoIniziale;



/* Applico sconti */

if ( etaViaggiatore < 18 || 65 < etaViaggiatore) {
    if ( etaViaggiatore < 18 ) {
        const scontoMinorenni = costoIniziale * 20 / 100;
        console.log(scontoMinorenni);
        let prezzoGiovani = (costoIniziale - scontoMinorenni);
        console.log(prezzoGiovani);
        document.getElementById('nuovo-prezzo').innerText = 'Nuovo prezzo scontato:' + '  ' + '€' + prezzogiovani;

    } else if ( 65 < etaViaggiatore ) {
        const scontoOver = costoIniziale * 40 / 100;
        console.log(scontoOver);
        let prezzoOver = (costoIniziale - scontoOver);
        console.log(prezzoOver);
        document.getElementById('nuovo-prezzo').innerText = 'Nuovo prezzo scontato:' + '  ' + '€' + prezzoOver ;
    }
}

/* Mostro il prezzo nella pagina con due decimali. */