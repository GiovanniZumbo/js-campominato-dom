// PLANNING

/* 
#MILESTONE 2
Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS. Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.
- Recupero gli elementi dal DOM
- Creo una funzione che mi genera le celle
- Creo l'evento sul bottone
- Richiamo la funzione con un ciclo for


#MILESTONE 3
In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;
-Aggiungo nella funzione che la cella deve avere come content, i.

#MILESTONE 4
Al click sulla cella, stampiamo il numero della cella cliccata in console, poi coloriamo la cella d'azzurro!
- creo una classe per il bg blue sul CSS
- Creo un event listener sulla cella
- Console log del contenuto
- Aggiungo una classe "blue" sulla cella che si attiva al click

*/





// # STAGING

const grid = document.getElementById('grid');
const playButton = document.getElementById('playbtn');
const form = document.querySelector('form');
const select = document.getElementById('difficulty');


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

    // Genero le celle

    for (let i = 0; i < totalCells; i++) {

        const cell = createCell(i + 1, selectValue);

        // Al click:
        cell.addEventListener('click', function () {
            console.log(parseInt(cell.innerText));
            cell.classList.add('clicked');
        });

        grid.appendChild(cell);
    }
}

form.addEventListener('submit', startGame);

// # DATA GATHERING

// # EVENT HANDLING

// # PROCESSING

// # OUTPUT 


/* Quando viene selezionata una difficoltà deve cambiare il numero di righe e di colonne della griglia*/

