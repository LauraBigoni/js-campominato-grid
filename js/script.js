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

function changeMode() {
    // # Recupero i valori delle opzioni di difficoltà
    const level = document.getElementById("game-difficulty").value;
    displayMode(level);
    console.log(level);
}

function displayMode(difficulty) {
    // # Alla scelta della difficoltà genero una griglia di gioco
    choice.innerHTML = `Hai scelto: <strong>${difficulty}</strong>`;

    // # Creo le celle per il gioco 
    if (difficulty === 'easy mode') {
        createCell(10);
    } else if (difficulty === 'normal mode') {
        createCell(9);
    } else if (difficulty === 'hard mode') {
        createCell(7);
    } else {
        console.log('Non hai selezionato un livello di difficoltà');
        choice.innerHTML = `Non hai selezionato un livello di difficoltà`;
        game.innerHTML = '';
    }
}

function createCell(cells) {
    const totalCells = cells * cells;
    const extractedNumbers = [];
    game.innerHTML = '';

    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell justify-content-center';
        cell.style.width = `calc(100% / ${cells})`;
        cell.style.height = `calc(100% / ${cells})`;
        const cellNumber = getRandomNumber(1,100, extractedNumbers)
        extractedNumbers.push(cellNumber);
        cell.innerHTML = `<span>${cellNumber}</span>`;

        cell.addEventListener('click', function () {
            cell.classList.toggle('clicked')
        });
        game.appendChild(cell);
    }
}

// # Recupero gli elementi in pagina
const difficulty = document.getElementById('game-difficulty').addEventListener("change", changeMode);
const game = document.getElementById('game');
const choice = document.getElementById('choice');