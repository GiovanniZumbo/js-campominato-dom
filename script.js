// PLANNING


// # STAGING

const grid = document.getElementById('grid');
const playButton = document.getElementById('playbtn');
const form = document.querySelector('form');
const select = document.getElementById('difficulty');
const scorePoints = document.getElementById('scorePoints');


//@ FUNCTIONS

// * Funzione per creare una cella
function createCell(content, selectValue) {
    const cell = document.createElement('div');
    cell.classList.add('cell', selectValue);
    cell.innerText = content;

    return cell;
}

// * Funzione per iniziare una nuova partita
function startGame(e) {
    //# Staging

    e.preventDefault();

    grid.innerHTML = ''; // svuoto la griglia

    playButton.innerText = 'Restart game'; // Cambio il testo del bottone

    const selectValue = select.value;
    let rows;
    let cols;
    let score = 0;

    switch (selectValue) {
        case ('easy'):
            rows = 10;
            cols = 10;
            break;
        case ('medium'):
            rows = 9;
            cols = 9;
            break;
        case ('hard'):
            rows = 7;
            cols = 7;
            break;
    }

    const totalCells = rows * cols;

    //# Processing

    // Genero le celle

    for (let i = 0; i < totalCells; i++) {

        const cell = createCell(i + 1, selectValue);

        // Al click:
        cell.addEventListener('click', function () {
            console.log(parseInt(cell.innerText));

            if (cell.classList.contains('clicked')) return;

            cell.classList.add('clicked');
            scorePoints.innerText = ++score;
        });

        grid.appendChild(cell);
    }
}

form.addEventListener('submit', startGame);

// # DATA GATHERING

// # EVENT HANDLING

// # PROCESSING

// # OUTPUT 

/* 

# MILESTONE 1
Prepariamo "Qualcosa" per tenere il punteggio dell'utente.
Quando l'utente clicca su una cella, incrementiamo il punteggio.
Se riusciamo, facciamo anche in modo da non poter più cliccare sulla stessa cella

- Creo una sezione punteggio nel DOM
- Recupero lo score dal DOM e gli do un valore = 0
- Al click sulla cella, cambio il valore dello score (Aumento di 1)
- Blocco la funzione sulla cella una volta cliccata creando un flag





# MILESTONE 2
Facciamo in modo di generare 16 numeri casuali (tutti diversi) compresi tra 1 e il massimo di caselle disponibili.
Generiamoli e stampiamo in console per essere certi che siano corretti
# MILESTONE 3
Quando l'utente clicca su una cella, verifichiamo se ha calpestato una bomba, controllando se il numero di cella è presente nell'array di bombe.
Se si, la cella diventa rossa (raccogliamo il punteggio e scriviamo in console che la patita termina) altrimenti diventa azzurra e dobbiamo incrementare il punteggio.
# MILESTONE 4
Quando l'utente clicca su una cella, e questa non è una bomba, dobbiamo controllare se il punteggio incrementato ha raggiunto il punteggio massimo, perchè in quel caso la partita termina. Raccogliamo quindi il punteggio e scriviamo un messaggio appropriato.
# MILESTONE 5
Quando la partita termina dobbiamo capire se è terminata perchè è stata cliccata una bomba o seperchè l'utente ha raggiunto il punteggio massimo(ossia ha vinto). Dobbiamo poi in ogni caso stampare lin pagina il punteggio raggiunto ed il messaggio adeguato in caso di vittoria o sconfitta.
*/

