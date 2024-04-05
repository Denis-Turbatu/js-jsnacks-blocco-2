
// Aggiunge gli elementi
let countMaxElem = 0;
function addElementi(numIter) {
    let i = 0;
    do {
        const addElem = prompt("Inserisci");
        newArray.push(addElem);
        i++;
    } while (i < numIter);
    countMaxElem = i;
}

function contaElementi() {
    return countMaxElem;
}
