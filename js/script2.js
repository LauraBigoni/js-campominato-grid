console.log('JS OK!');
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
function getRandomNumber (min, max, list) {
    let randNumber;
    do {
        randNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (list.includes(randNumber));
    return randNumber;
}

// # Recupero gli elementi in pagina
const difficulty = document.getElementById('game-difficulty').addEventListener("change", changeMode);
const game = document.getElementById('game');

// # Costanti logiche
const cells = 10;
const columns = 10;
const totalCells = cells * columns;
const extractedNumbers = [];

// # Creo le celle
for (let i = 0; i < totalCells; i++) {
    // ottengo un num random
    const cellNumber = getRandomNumber(1,100,extractedNumbers);

    // aggiungo il num alla lista di quelli usciti
    extractedNumbers.push(cellNumber);

    // Creo la cella
    const cell = createCell(cellNumber);

    cell.addEventListener('click' , function (){
    cell.classList.toggle('clicked');
    });
    game.appendChild(cell);
}