/* 
TRACCIA:

L'utente indica TRAMITE DOM un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49

Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

Scriviamo prima cosa vogliamo fare passo passo in italiano, 
dividiamo il lavoro in micro problemi.
Di cosa ho bisogno per generare i numeri?
Le validazioni e i controlli in un secondo momento.
*/

// # FUNZIONI
function changeMode() {
    let x = document.getElementById("game-difficulty").value;
    document.getElementById("choice").innerHTML = `Hai scelto: <strong>${x}</strong>`;
}

// # Recupero gli elementi in pagina
const difficulty = document.getElementById('game-difficulty').addEventListener("change", changeMode);

// # Recupero i valori delle opzioni di difficoltà

    // # Calcolo il prezzo del biglietto e mostro in pagina i risultati
    // if (gamedifficulty === '1') {

    // } else if (gamedifficulty === '2') {

    // } else if (gamedifficulty === '3') {

    // }
// });
