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

const selectElement = document.getElementById('difficulty');
let selectValue = selectElement.value;
let rows;
let cols;
const totalCells = rows * cols;


const grid = document.getElementById('grid');
const playButton = document.getElementById('playbtn');
const form = document.querySelector('form');


function createCell(content) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.innerText = content;
    return cell;
}

// # DATA GATHERING

// # EVENT HANDLING

selectElement.addEventListener('click', function () {

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
})


playButton.addEventListener('click', function () {

    grid.innerHTML = ''; // svuoto la griglia
    playButton.innerText = 'Restart game';

    for (let i = 0; i < totalCells; i++) {
        const cell = createCell(i + 1);
        grid.appendChild(cell);

        cell.addEventListener('click', function () {
            cell.classList.toggle('clicked');
            console.log(i + 1);
        })
    }
})

form.addEventListener('submit', function () {
    e.preventDefault;
})


// # PROCESSING

// # OUTPUT 


/* Quando viene selezionata una difficoltà deve cambiare il numero di righe e di colonne della griglia*/

